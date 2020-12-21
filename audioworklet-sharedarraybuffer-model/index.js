const maxSlot = +sessionStorage.getItem('max-slot') || 8;
const kernelsPerSlot = +sessionStorage.getItem('kernels-per-slot') || 8;

Constants.MAX_SLOT = maxSlot;
Constants.KERNELS_PER_SLOT = kernelsPerSlot;
Constants.apply();

document.getElementById('max-slot').value = maxSlot;
document.getElementById('kernels-per-slot').value = kernelsPerSlot;

document.getElementById('apply').onclick = () => {
  sessionStorage.setItem('max-slot', +document.getElementById('max-slot').value);
  sessionStorage.setItem('kernels-per-slot', +document.getElementById('kernels-per-slot').value);
  window.location.reload();
}

class WorkletNode extends AudioWorkletNode {
  constructor(context) {
    super(context, 'worklet-processor');

    // Worker backend
    this.worker = new Worker('./worker.js');

    const stateBuffer = new SharedArrayBuffer(StateIndex.__SIZE * 4);
    const slotStateBuffer = new SharedArrayBuffer(Constants.MAX_SLOT * 4);
    const slotDataBuffer = new SharedArrayBuffer(Constants.MAX_SLOT * SlotLayout.__SIZE);

    const state = new Int32Array(stateBuffer);

    this.port.onmessage = e => {
      const data = e.data;
      if (data.message == 'INITIALIZE') {
        console.log('[Main] Get worklet initalize', data);
        const sampleRate = data.sampleRate;

        this.port.postMessage({
          message: 'INITIALIZE',
          sampleRate: sampleRate,
          buffers: {
            state: stateBuffer,
            slotState: slotStateBuffer,
            slotData: slotDataBuffer
          },
          maxSlot: maxSlot,
          kernelsPerSlot: kernelsPerSlot
        });
        this.worker.postMessage({
          message: 'INITIALIZE',
          sampleRate: sampleRate,
          buffers: {
            state: stateBuffer,
            slotState: slotStateBuffer,
            slotData: slotDataBuffer
          },
          maxSlot: maxSlot,
          kernelsPerSlot: kernelsPerSlot
        });
      }
    }
    this.worker.onmessage = e => {
      const data = e.data;
      if (data.message == 'SOUND_LOADED') {
        const vid = document.getElementById('video');
        vid.style.display = 'block';
      }
      if (data.message == 'MISS_TIMESLOT') {
        const msg = document.getElementById('msg');
        msg.innerHTML = 'Missed timeslot, frame = ' + data.frame;
      }
    }

    let reqID = 0;
    const vid = document.getElementById('video');
    vid.onseeking = () => {
      const id = ++reqID;
      this.worker.postMessage({
        message: 'REQUEST',
        reqID: id,
        time: vid.currentTime * 1000,
        now: Date.now()
      })
      Atomics.store(state, StateIndex.PRODUCER_REQUEST, id);
      Atomics.notify(state, StateIndex.PRODUCER_OFFSET);
    }
    vid.onseeked = () => {
      setTimeout(() => vid.pause());
      setTimeout(() => {
        vid.play();
      }, 500)
    }
    vid.onplay = () => {
      const id = ++reqID;
      this.worker.postMessage({
        message: 'REQUEST',
        reqID: id,
        time: vid.currentTime * 1000,
        now: Date.now()
      })
      Atomics.store(state, StateIndex.PRODUCER_REQUEST, id);
      Atomics.notify(state, StateIndex.PRODUCER_OFFSET);
    }
    document.getElementById('fetch-input').onchange = () => {
      let val = document.getElementById('fetch-input').value;
      document.getElementById('fetch-label').innerHTML = val + 'ms'
      this.worker.postMessage({
        message: 'SET_FETCH_DELAY',
        value: val
      })
    }
    document.getElementById('burst-input').onchange = () => {
      let val = document.getElementById('burst-input').value;
      document.getElementById('burst-label').innerHTML = (val / 10) + '%'
      this.worker.postMessage({
        message: 'SET_BURST',
        value: val / 10
      })
    }
  }
}

function startme() {
  console.log('Start');
  document.getElementById('no-support').style.display = 'inherit';
  if (typeof WorkletNode !== 'undefined') {
    document.getElementById('no-support').style.display = 'none';
  }
  document.getElementById('container').style.display = 'inherit';
  const context = new AudioContext();
  const source = context.createBufferSource();
  context.audioWorklet.addModule('./worklet.js').then(() => {
    const node = new WorkletNode(context);
    source.connect(node);
    node.connect(context.destination);
    source.start();
  })
}
