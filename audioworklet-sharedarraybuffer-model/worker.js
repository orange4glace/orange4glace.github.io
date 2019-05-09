import { 
  Constants,
  StateIndex,
  SlotState,
  SlotLayout,
  getSlotBufferView } from './common.js'


// The sound data, FLoat32ArrayBuffer
let soundData = undefined;

// Current slot index cursur of Producer
let currentSlotIndex = 0;

// current request ID (reuqested by Main thread)
let currentRequestID = 0;

// Current loop disposer
let currentWork = undefined;

async function loadSound() {
  return new Promise(resolve => {
    const oReq = new XMLHttpRequest();
    oReq.open('GET', './speech.raw', true);
    oReq.responseType = 'arraybuffer';

    oReq.onload = function(oEvent) {
      const arrayBuffer = oReq.response;
      const fab = new Float32Array(arrayBuffer);
      resolve(fab);
    }
    oReq.send();
  })
}

let FETCH_DELAY = 0;
let BURST_POSSIBILITY = 0;

let seekTimer = 0;

self.onmessage = e => {
  const data = e.data;
  console.log(data);
  if (data.message == 'INITIALIZE') {
    initialize(data);
  }
  if (data.message == 'REQUEST') {
    doRequest(data);
  }
  if (data.message == 'SET_FETCH_DELAY') {
    FETCH_DELAY = data.value;
  }
  if (data.message == 'SET_BURST') {
    BURST_POSSIBILITY = data.value;
  }
}

async function initialize(data) {
  const buffers = data.buffers;
  SAB.state = new Int32Array(buffers.state);
  SAB.slotState = new Int32Array(buffers.slotState);
  SAB.slotData = buffers.slotData;
  Constants.MAX_SLOT = data.maxSlot;
  Constants.KERNELS_PER_SLOT = data.kernelsPerSlot;
  Constants.apply();
  soundData = await loadSound();
}

function doRequest(data) {
  if (seekTimer) {
    clearTimeout(seekTimer);
    seekTimer = 0;
  }
  seekTimer = setTimeout(() => {
    if (currentWork) currentWork.dispose();
    const now = Date.now();
    currentRequestID = data.reqID;
    currentWork = startWork(data.time + (now - data.now));
  })
}

const SAB = {
  state: undefined,
  slotState: undefined,
  slotData: undefined,
}


function timeToFrame(time) {
  return Math.floor(time * Constants.FREQUENCY / 1000);
}

function frameToTime(frame) {
  return Math.floor(1000 / Constants.FREQUENCY * frame);
}

/**
 * 
 * @param {number} time 
 */
function startWork(time) {
  let disposer = {
    disposed: false,
    dispose: function() { this.disposed = true; }
  };
  __startWork(time, disposer);
  return disposer;
}

/**
 * 
 * @param {number} time the time
 * @param {object} disposer disposer object
 * @param {boolean} disposer.disposed is disposed
 */
async function __startWork(startTime, disposer) {
  let dt = Date.now();
  // Wait until Worklet consumes new Slot
  // This is for synchronization at first
  Atomics.store(SAB.state, StateIndex.PRODUCER_SIGNAL, 1);
  Atomics.wait(SAB.state, StateIndex.PRODUCER_SIGNAL, 1);
  const startProducerOffset = Atomics.load(SAB.state, StateIndex.PRODUCER_SIGNAL_RESPONSE);
  let startedSystemTime = Date.now();
  dt = startedSystemTime - dt;
  startTime += dt;
  Atomics.sub(SAB.state, StateIndex.PRODUCER_OFFSET, startProducerOffset);
  currentSlotIndex -= startProducerOffset;
  
  let lastFrameIndex = timeToFrame(startTime);

  while (true) {

    // Wait until writing slot is available
    Atomics.wait(SAB.state, StateIndex.PRODUCER_OFFSET, Constants.MAX_SLOT);

    // Worker can be either awaked by Consumer or Main thread (by requesting a new time)
    // If awaked by Main thread (= If request has arrived)
    const lastRequestID = Atomics.load(SAB.state, StateIndex.PRODUCER_REQUEST);
    if (lastRequestID != currentRequestID)
      return false;

    const tmpFrameBuffer = new Float32Array(new ArrayBuffer(Constants.BYTES_PER_SLOT * 2));

    // Dispose gurad
    if (disposer.disposed) return;
    await getData(lastFrameIndex, lastFrameIndex + Constants.FRAMES_PER_SLOT * 2, tmpFrameBuffer);
    if (disposer.disposed) return;
  
    const currentProducerOffset = Atomics.load(SAB.state, StateIndex.PRODUCER_OFFSET);
    if (currentProducerOffset < 0) {
      // Missed expected timeslot
      const slotAdvance = -currentProducerOffset
      Atomics.add(SAB.state, StateIndex.PRODUCER_OFFSET, slotAdvance);
      currentSlotIndex += slotAdvance;
      lastFrameIndex += slotAdvance * Constants.FRAMES_PER_SLOT + Constants.FRAMES_PER_SLOT;
      console.warn('Timeslot missed',lastFrameIndex);
    }
    else {
      // Got expected timeslot
      let recordingSlotOffset = currentSlotIndex % Constants.MAX_SLOT;
      // Try lock slot
      if (Atomics.compareExchange(SAB.slotState, recordingSlotOffset, SlotState.IDLE, SlotState.BUSY)
          == SlotState.IDLE) {
        // Slot locked
        const dataBuffer = new Float32Array(tmpFrameBuffer.buffer,
            0,
            Constants.BYTES_PER_SLOT / 4);
        const slotView = getSlotBufferView(SAB.slotData, recordingSlotOffset);
        const slotHeaderView = slotView.header;
        const slotDataView = slotView.data;
        const lastSlotIndex = slotHeaderView[SlotLayout.INDEX];
        slotHeaderView[SlotLayout.INDEX] = currentSlotIndex;
        slotDataView.set(dataBuffer);
        // console.log('Erase', lastSlotIndex, 'Write', recordingSlotIndex, '(' + (recordingSlotIndex % Constants.MAX_SLOT) + ')', startTime, currentSlotIndex);
        Atomics.store(SAB.slotState, recordingSlotOffset, SlotState.IDLE);
      }
      else {
        // Slot is busy by consumer.
        // Just drop the data
        console.warn('data dropped (busy by consumer)');
      }
      lastFrameIndex += Constants.FRAMES_PER_SLOT;
    }
    Atomics.add(SAB.state, StateIndex.PRODUCER_OFFSET, 1);
    currentSlotIndex += 1;
  }
}

/**
 * 
 * @param {number} startFrame 
 * @param {number} endFrame 
 * @param {Float32Array} outBuffer 
 */
async function getData(startFrame, endFrame, outBuffer) {
  const soundDataView = new Float32Array(soundData.buffer, startFrame * 4, endFrame - startFrame);
  outBuffer.set(soundDataView);

  return new Promise(resolve => {
    if (Math.random() * 100 < BURST_POSSIBILITY) {
      // Make delay
      console.warn('DELAY');
      setTimeout(() => {
        resolve();
      }, FETCH_DELAY * 3);
    }
    else {
      setTimeout(() => {
        resolve();
      }, FETCH_DELAY);
    }
  })
}