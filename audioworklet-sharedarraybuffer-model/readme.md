What I want to achieve here is kind of how video player works.

Basically **master time** is needed to implement a video player. Both video time and audio time is synced with the **master time**. Normally, audio time is used as **master time** but in here, external system(eg : `Date.now()` in UI thread) is used as **master time**.

Also a video player can seek the time. Current time can be changed in anytime. When time changes, video and audio should be synced immediately.

Check out the [**live example**](https://orange4glace.github.io/audioworklet-sharedarraybuffer-model/) first.
**You have to enable ES6 module support** (eg: #enable-experimental-web-platform-features in *Chrome*)
Video player will appear after sound data is loaded. (48.1MB) Initially, video element itself is muted and the sound is provided by AudioWorklet.
Other options like *MAX_SLOT* or *KERNELS_PER_SLOT* will be described below. You can set your own setting.
Since in web browser, user can not control how the video renders precisely, the `currentTime` of video element will act as a system time.

---------------------

Like an existing one of SharedArrayBuffer example model, there's a `Worker` and `Worklet`. `Worker` is a **Producer** which produces a data, `Worklet` is a **Consumer** which consumes a data.

Each thread shares a data by a **RingBuffer**. It consists of numbers of **Slot** and **Slot** is also cosisting of numbers of **Kernel**.

The size of **Kernel** is same as the size of output buffer of **AudioWorklet** which is 512 byte in this case.

**Slot** has a header and number of **Kernel** data. The number of **Kernel** can be customized by a user.

**Slot header** has a *slot index* as a data, which represents the index of the slot data.

**Slot** is used as a unit data to shares data between `Worklet` and `Worker`. They also shares **SlotState** as a SharedArrayBuffer.

The number of states that slot can have is 2, which are **IDLE** and **BUSY**. When **Consumer**(`Worklet`) reads the slot or **Producer**(`Worker`) writes the slot, the state of slot becomes **BUSY**.

Finally, they shares a integer data, named **PRODUCER_OFFSET**. 

The scenario of how **Consumer**(`Worker`) works is described bleow.

1. `process(inputs, outputs, parameters)` is called.

2. Calculate the current *slot index* which matches to the current *kernel index*. The initial *kernel index* is 0.

3. Calculate the *slot offset* which matches to the current *slot index* which is, `slotOffset = slotIndex % MAX_SLOT`

4. Acquire the ownership of the slot, which is `Atomics.compareExchange(slotState, slotOffset, IDLE, BUSY)`

5. If acquiring is successed, check the header of the slot. If the *slot index* recorded on the header equals to the current *slot index*, (which is `slotBufferHeader[SLOT_INDEX] == slotIndex`) The data is valid. Copy the buffer data to local ArrayBuffer. Next, get the *kernel* data matching to current *kernel index* from the coiped local ArrayBuffer and copy it to `output`. Else, that data is invalid which means **Producer** did not produced the data in time.

6. If acquiring is failed, it means that **Producer** is currently writing the slot. We can wait and retry to access the slot later but rather than we just give up the current time slot and process it in the next time.

7. Increase the *kernel index* by 1.

8. If current *kernel index* belongs to the next *slot index*, which is `kernelIndex % KERNELS_PER_SLOT == 0`, decrease the `PRODUCER_OFFSET` by 1. (`Atomics.sub(state, PRODUCER_OFFSET, 1)`). By this action, `PRODUCER_OFFSET` could be less than 0.

**Consumer** continuously increases the *kernel index* when `process` is called.. It doesn't care whether data is available or not. By increasing the *kernel index*, *slot index* is also increasing. If slot is available, it gets the data and copy it to the output data. otherwise, output is just zero-filled buffer.

The scenario of how **Producer**(`Worker`) works is described bleow.

1. When video player is played or seek happens, the Main thread (UI thread) sends a `start(time)` message to `Worker`. `time` is current system time (eg: current time of the video player). We'll say this `time` as a `startedTime`.

2. **Producer** receives a messsage and will start a loop.

3. Before starting the loop, the time of the last data fetched, `lastDataFetchedTime`  is set to `startedTime`.

4. If `PRODUCER_OFFSET == MAX_SLOT`, it means *Ring Buffer* is full so **Producer** should wait until **Consumer** consumes a data. We calls `Atomics.wait(state, PRODUCER_OFFSET, MAX_SLOT)` and wait until a signal from the **Consumer**. On wake, go to next step.

5. Incrase the `PRODUCER_OFFSET` by current value of `PRODUCER_OFFSET`. This means move current *Producer slot index cursor* to current *Consumer slot index currsor*

5. Request the data size of slot (`TIME_PER_SLOT`) from the `lastDataFetchedTime`. (`lastDataFetchedTime` ~ `lastDataFetchedTime + TIME_PER_SLOT`)

6. It might take some time to fetch the data. eg) Disk IO or Decoding

7. Get the current `PRODUCER_OFFSET`

8. If `PRODUCER_OFFSET < 0 `, it means **Producer** has failed to fetch data in time and glitch happens. In this case, we drop the data and skip, which is `Atomics.add(state, PRODUCER_OFFSET, -PRODUCER_OFFSET)`. Set `lastDataFetchedTime` to `lastDataFetchedTime + TIME_PER_SLOT * (-PRODUCER_OFFSET)`. `continue` the loop.

9. If `PRODUCER_OFFSET >= 0`, it means **Producer** is producing data continuously without any glitching. We can append the data next to the last produced slot. `slotIndex = currentProducerSlotIndex + 1` and Increase the `PRODUCER_OFFSET` by 1, `Atomics.add(state, PRODUCER_OFFSET, 1)` Finally, set `lastDataFetchedTime` to `lastDataFetchedTime + TIME_PER_SLOT`.

10. Now we found a *slot index* to write on. We get the ownership of that slot, write the *slot index* at the header part of the slot and write the data at the data part of the slot. If getting ownership is failed, which means **Consumer** is reading the same slot, simply drop the data.

11. Iterate the loop until new request arrives.


The one last concern is how to sync the time of the first data. When **Producer** receives a seek request, **Producer** waits until **Consumer** starts consuming next slot. When awaked, **Producer** knows the time when **Consumer** starts consuming the next slot by calling `Date.now()` immediately. So we add the time difference between the time when request arrvied and `Date.now()` to requested time. That time is the start time our new slot.

The problems & limitations of the design follows :

1. Data must be fetched in timing budget of slot render quantum. (~3ms * `KERNELS_PER_SLOT` at 44.1KHz)

2. When you seek the video player, you have to wait maximum (~3ms * `KERNELS_PER_SLOT` at 44.1KHz) so the new audio can be provided.