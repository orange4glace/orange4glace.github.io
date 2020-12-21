(function() {

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

  let e = (typeof window === 'object' ? window : self);
  e.Constants = Constants;
  e.StateIndex = StateIndex;
  e.SlotState = SlotState;
  e.SlotLayout = SlotLayout;
  e.getSlotBufferView = getSlotBufferView;

})();