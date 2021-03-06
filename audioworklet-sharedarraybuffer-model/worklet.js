/** common.js **/
const Constants = {
  FREQUENCY: 44100,
  MAX_SLOT: 64,
  BYTES_PER_FRAME: 4,
  FRAMES_PER_KERNEL: 128,
  KERNELS_PER_SLOT: 8,
  FRAMES_PER_SLOT: 0,
  BYTES_PER_KERNEL: 0,
  BYTES_PER_SLOT: 0,

  apply: function() {
    this.FRAMES_PER_SLOT = this.FRAMES_PER_KERNEL * this.KERNELS_PER_SLOT;
    this.BYTES_PER_KERNEL = this.FRAMES_PER_KERNEL * this.BYTES_PER_FRAME;
    this.BYTES_PER_SLOT = this.BYTES_PER_KERNEL * this.KERNELS_PER_SLOT;
    SlotLayout.__SIZE = 4 + this.BYTES_PER_SLOT;
  }
}

const StateIndex = {
  PRODUCER_OFFSET: 0,

  PRODUCER_SIGNAL: 1,
  PRODUCER_SIGNAL_RESPONSE: 2,

  PRODUCER_REQUEST: 3,
  
  __SIZE: 4
}

const SlotState = {
  IDLE: 0,
  BUSY: 1
}

const SlotLayout = {
  INDEX: 0,
  DATA: 4,
  __SIZE: 4 + Constants.BYTES_PER_SLOT
}

Constants.apply();

/**
 * 
 * @param {ArrayBuffer} slotDataBuffer 
 * @param {number} slotOffset 
 */
function getSlotBufferView(slotDataBuffer, slotOffset) {
  return {
    header: new Int32Array(slotDataBuffer, SlotLayout.__SIZE * slotOffset, SlotLayout.DATA / 4),
    data: new Float32Array(slotDataBuffer, SlotLayout.__SIZE * slotOffset + SlotLayout.DATA, Constants.BYTES_PER_SLOT / 4)
  };
}
/** common.js **/

let initialized = false;

// Current kernel index cursor
let currentKernelIndexCursor = 0;

// Current slot index cursor, computed from |currentKernelIndexCursor|
let currentSlotIndexCursor = 0;

// Current slot data, copied from SharedArrayBuffer
let currentSlotBuffer = 0;

// Zero filled Float32ArrayBuffer sized in BYTES_PER_KERNEL
let ZERO_SLOT_BUFFER;

const SAB = {
  state: undefined,
  slotState: undefined,
  slotData: undefined
}

class WorkletProcessor extends AudioWorkletProcessor {

  constructor() {
    super();
    console.log('Sample rate', sampleRate);

    this.port.postMessage({
      message: 'INITIALIZE',
      sampleRate: sampleRate
    });

    this.port.onmessage = e => {
      const data = e.data;
      if (data.message == 'INITIALIZE') {
        console.log('Initialize worklet', data);
        const buffers = data.buffers;
        SAB.state = new Int32Array(buffers.state);
        SAB.slotState = new Int32Array(buffers.slotState);
        SAB.slotData = buffers.slotData;
        Constants.FREQUENCY = data.sampleRate;
        Constants.MAX_SLOT = data.maxSlot;
        Constants.KERNELS_PER_SLOT = data.kernelsPerSlot;
        Constants.apply();
        ZERO_SLOT_BUFFER = new Float32Array(new ArrayBuffer(Constants.BYTES_PER_SLOT));
        currentSlotBuffer = new Float32Array(new ArrayBuffer(Constants.BYTES_PER_SLOT));
        initialized = true;
      }
    }
  }

  process(inputs, outputs, parameters) {
    if (!initialized) return true;
    // Single channel, mono
    stepKernel(outputs[0][0]);
    return true;
  }

}


/**
 * 
 * @param {Float32Array} outBuffer Float32Array sized BYTES_PER_KERNEL
 */
const HALF_KERNELS_PER_SLOT = Math.floor(Constants.KERNELS_PER_SLOT / 2);
function stepKernel(outBuffer) {
  if ((currentKernelIndexCursor + 1) % Constants.KERNELS_PER_SLOT == 0) {
    // Increase the slot index
    currentSlotIndexCursor = (currentKernelIndexCursor + 1) / Constants.KERNELS_PER_SLOT;
    getSlotData(currentSlotIndexCursor, currentSlotBuffer);
    Atomics.sub(SAB.state, StateIndex.PRODUCER_OFFSET, 1)
    checkSignal();
    Atomics.notify(SAB.state, StateIndex.PRODUCER_OFFSET, 1);
  }
  currentKernelIndexCursor = currentKernelIndexCursor + 1;
  getKernelData(currentSlotBuffer, currentKernelIndexCursor, outBuffer);
}

function checkSignal() {
  const signal = Atomics.compareExchange(SAB.state, StateIndex.PRODUCER_SIGNAL, 1, 0);
  if (signal == 1) {
    const producerOffset = Atomics.load(SAB.state, StateIndex.PRODUCER_OFFSET);
    Atomics.store(SAB.state, StateIndex.PRODUCER_SIGNAL_RESPONSE, producerOffset);
    Atomics.notify(SAB.state, StateIndex.PRODUCER_SIGNAL, 1);
  }
}

/**
 * 
 * @param {number} currentKernelIndexCursor  target kernel offset
 * @param {Float32Array} outBuffer Float32Array sized BYTES_PER_KERNEL
 */
function getKernelData(slotBuffer, kernelIndex, outBuffer) {
  const kernelOffset = kernelIndex % Constants.KERNELS_PER_SLOT;
  const kernelData = new Float32Array(slotBuffer.buffer,
      Constants.BYTES_PER_KERNEL * kernelOffset,
      Constants.BYTES_PER_KERNEL / 4);
  outBuffer.set(kernelData);
}


let logCount = 0;

/**
 * 
 * @param {number} slotIndex target slot index
 * @param {Float32Array} outBuffer Float32Array sized BYTES_PER_SLOT
 */
function getSlotData(slotIndex, outBuffer) {
  // const currentProducerCursorSlotIndex = Atomics.load(SAB.state, StateIndex.PRODUCER_CURSOR);
  // const currentProducerCursorSlotOffset = currentProducerCursorSlotIndex % MAX_SLOT;
  const slotOffset = slotIndex % Constants.MAX_SLOT;
  // Try lock slot
  if (Atomics.compareExchange(SAB.slotState, slotOffset, SlotState.IDLE, SlotState.BUSY)
      == SlotState.IDLE) {
    // Slot locked
    const slotView = getSlotBufferView(SAB.slotData, slotOffset);
    const slotHeaderView = slotView.header;
    const slotDataView = slotView.data;
    if (slotHeaderView[SlotLayout.INDEX] != slotIndex) {
      // Slot data is not the latest
      outBuffer.set(ZERO_SLOT_BUFFER);
      console.warn('miss! ' + 'expected = ' + slotIndex + ', got = ' + slotHeaderView[SlotLayout.INDEX]);
    }
    else {
      outBuffer.set(slotDataView);
    }
    // Unlock slot
    Atomics.store(SAB.slotState, slotOffset, SlotState.IDLE);
  }
  else {
    // Slot is busy by producer.
    outBuffer.set(ZERO_SLOT_BUFFER);
    console.warn('Busy (by Producer)')
    return;
  }
}

registerProcessor('worklet-processor', WorkletProcessor);