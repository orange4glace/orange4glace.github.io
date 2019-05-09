여기서 달성하고자 하는 상황은 비디오 플레이어가 동작하는 것과 같습니다.

What I want to achieve here is how video player works.

기본적으로 비디오 플레이어를 구현하는데에 있어서는 master time, 즉 어떤 시간에 비디오와 오디오가 동기화될 지 기준이 되는 시간이 필요합니다. 보통은 오디오 시간을 비디오 시간에 동기화 시킵니다만, 여기서는 외부 시스템 타임에 맞춰 비디오와 오디오를 동기화시키고자 합니다.

Basically **master time** is needed to implement a video player. Both video time and audio time is synced with the **master time**. Normally, audio time is used as **master time** but in here, external system(eg : `Date.now()` in UI thread) is used as **master time**.

또한 비디오 플레이어는 seek 기능이 있습니다. 현재 재생시간은 언제든 바뀔 수 있으며, 시간이 바뀔 때 마다 비디오와 오디오는 해당 시간에 즉각적으로 다시 동기화되어야 합니다.

Also a video player can seek the time. Current time can be changed in anytime. When time changes, video and audio should be synced immediately.

기존 SharedArrayBuffer와 마찬가지로, Worker 와 Worklet 이 있습니다.
Worker는 데이터를 생산하는 Producer이고, Worklet은 데이터를 소비하는 Consumer 입니다.

Like an existing one of SharedArrayBuffer example model, there's a `Worker` and `Worklet`. `Worker` is a **Producer** which produces a data, `Worklet` is a **Consumer** which consumes a data.

두 쓰레드는 RingBuffer를 통해 데이터를 공유합니다.
RingBuffer는 여러개의 Slot으로 구성되어 있고, Slot은 여러개의  Kernel로 구성되어 있습니다.

Each thread shares a data by a **RingBuffer**. It consists of numbers of **Slot** and **Slot** is also cosisting of numbers of **Kernel**.

Kernel의 크기는 AudioWorklet이 한 번에 처리하는 데이터의 크기, 즉 여기서는 512Byte입니다.

The size of **Kernel** is same as the size of output buffer of **AudioWorklet** which is 512 byte here.

Slot은 header와 여러개의 Kernel로 구성되어 있으며, 몇 개의 Kernel로 구성될지는 사용자가 결정할 수 있습니다.

**Slot** has a header and numbers of **Kernels** and the number of **Kernel** can be customized by a user.

Slot header에는 현재 Slot에 기록된 데이터가 몇 번째 데이터인지 나타내는 데이터가 담겨 있습니다.

**Slot header** has a *slot index* as a data, which represents the index of the slot data.

Slot은 Worklet과 Worker가 데이터를 주고받는 단위로 사용됩니다.
각 Slot은 State를 SharedArrayBuffer로 가지고 있습니다.

**Slot** is used as a unit data to shares data between `Worklet` and `Worker`. They also shares **SlotState** as a SharedArrayBuffer.

Slot이 가질 수 있는 State는 두 가지로, IDLE과 BUSY 입니다. Consumer(Worklet)가 해당 슬롯의 데이터를 읽거나, Producer(Worker)가 해당 슬롯에 데이터를 기록 할 때 BUSY 상태가 됩니다.

The number states that slots can be have is 2, which are **IDLE** and **BUSY**. When **Consumer**(`Worklet`) reads the slot or **Producer**(`Worker`) writes the slot, the state of slot becomes **BUSY**.

마지막으로, 두 워커는 PRODUCER_OFFSET 이라는 데이터를 공유합니다.
Consumer는 계속해서 Slot index를 증가시키며 데이터를 소비할 것이고, Producer는 계속해서 Slot index를 증가시키며 데이터를 공급하는데, 이 때 Producer가 현재 공급하고 있는 slot index가 Consumer가 현재 소비하고 있는 slot index보다 얼마나 앞서있는지가 PRODUCER_OFFSET입니다.

Finally, they shares a integer data, named **PRODUCER_OFFSET**. 

Consumer(Worklet)의 작동 시나리오는 다음과 같습니다.

The scenario of how **Consumer**(`Worker`) works is described bleow.

1. process(inputs, outputs, parameters) 가 호출됩니다.

1. `process(inputs, outputs, parameters)` is called.

2. 현재 kernel index에 해당하는 slot index, 즉 `slotIndex = Math.floor(kernelIndex / KERNELS_PER_SLOT)` 을 계산합니다. 최초 kernel index는 0입니다.

2. Calculate the current *slot index* which matches to the current *kernel index*. The initial *kernel index* is 0.

3. slot index에 해당하는 slot offset을 가져옵니다. 즉 `slotOffset = slotIndex % MAX_SLOT`

3. Calculate the *slot offset* which matches to the current *slot index* which is, `slotOffset = slotIndex % MAX_SLOT`

4. 해당 slot에 소유권을 가져옵니다. 즉 `Atomics.compareExchange(slotState, slotOffset, IDLE, BUSY)`

4. Acquire the ownership of the slot, which is `Atomics.compareExchange(slotState, slotOffset, IDLE, BUSY)`

5. 소유권을 가져오는데 성공했다면, 해당 Slot의 header를 체크합니다. 만약 header에 기록된 slot index가 현재 요청중인 slot index와 같다면, 즉 `if (slotBufferHeader[SLOT_INDEX] == slotIndex)`, 해당 데이터는 valid한 데이터입니다. 버퍼의 데이터를 로컬 버퍼로 복사하고, 복사된 slot data 중 현재 output에 해당하는 kernel 데이터를 복사합니다. 만약 같지 않다면, 해당 시간에 필요한 데이터는 아직 공급되지 못한 상태입니다.

5. If acquiring is successed, check the header of the slot. If the *slot index* recorded on the header equals to the current *slot index*, (which is `slotBufferHeader[SLOT_INDEX] == slotIndex`) The data is valid. Copy the buffer data to local ArrayBuffer. Next, get the *kernel* data matching to current *kernel index* from the coiped local ArrayBuffer and copy it to `output`. Else, that data is invalid which means **Producer** did not produced the data in time.

6. 소유권을 가져오는데 실패했다면, Producer가 현재 해당 슬롯에 데이터를 기록중이라는 뜻입니다. 잠깐 기다렸다가 다시 소유권을 가져오도록 시도하면 되겠지만, 이 경우 이미 Glitch가 발생했기 때문에 굳이 그러기보다는 해당 시간을 모두 포기하고 다음 process에 다시 시도하는것이 효과적입니다.

6. If acquiring is failed, it means that **Producer** is currently writing the slot. We can wait and retry to access the slot later but rather than we just give up the current time slot and process it in the next time.

7. kernel index를 1 증가시킵니다.

7. Increase the *kernel index* by 1.

8. 현재 kernel index가 다음 slot에 속하는 kernel index일 경우, 즉 `if (kernelIndex % KERNELS_PER_SLOT == 0)` PRODUCER_OFFSET 을 1 감소시킵니다. 즉 `Atomics.sub(state, PRODUCER_OFFSET, 1)` 이 과정에서 PRODUCER_OFFSET은 0보다 작아질 수 있습니다.

8. If current *kernel index* belongs to the next *slot index*, which is `kernelIndex % KERNELS_PER_SLOT == 0`, decrease the `PRODUCER_OFFSET` by 1. (`Atomics.sub(state, PRODUCER_OFFSET, 1)`). By this action, `PRODUCER_OFFSET` could be less than 0.

Consumer는 현재 소비해야 하는 data가 available한지와 상관없이 `process`가 호출될 때 마다 계속해서 kernel index를 증가시킵니다. 계속해서 kernel index를 증가시키며, slot의 데이터가 valid하다면 데이터를 소비하여 소리를 생성시키고, invalid하다면 아무 소리를 생성하지 않습니다.

**Consumer** continuously increases the *kernel index* when `process` is called.. It doesn't care whether data is available or not. By increasing the *kernel index*, *slot index* is also increasing. If slot is available, it gets the data and copy it to the output data. otherwise, output is just zero-filled buffer.

Producer(Worker)의 작동 시나리오는 다음과 같습니다.

The scenario of how **Producer**(`Worker`) works is described bleow.

1. 비디오 플레이어가 재생되거나, seek이 일어날 때 마다, Main thread (UI Thread)는 Worker로 `start(time)` 메세지를 보냅니다. time은 현재 system time (현재 비디오 플레이어의 재생시간) 입니다.  이 시간을 startedTime이라고 하겠습니다.

1. When video player is played or seek happens, the Main thread (UI thread) sends a `start(time)` message to `Worker`. `time` is current system time (eg: current time of the video player). We'll say this `time` as a `startedTime`.

2. 메세지를 받은 Producer는 루프를 시작합니다. 루프는 다음과 같습니다.

2. **Producer** receives a messsage and will start a loop.

3. 루프 시작 전, 가장 마지막으로 가져온 데이터의 시간(lastDataFetchedTime)을 startedTime으로 설정합니다. `lastDataFetchedTime = startedTime`

3. Before starting the loop, the time of the last data fetched, `lastDataFetchedTime`  is set to `startedTime`.

4. 루프내에서, 현재 시스템 시간을 추정합니다. 이는 `estimatedCurrentTime = Date.now() - startedTime`으로 계산됩니다.

4. While the loop, **Producer** conjectures the current system time, which is `estimatedCurrentTime = Date.now() - startedTime`

5. 가장 마지막으로 처리된 데이터의 시간으로 부터 Slot의 크기만큼의 데이터를 요청합니다. 즉 `lastDataFetchedTime` 부터 `lastDataFetchedTime + TIME_PER_SLOT 만큼의 데이터입니다.

5. Request the data size of slot (`TIME_PER_SLOT`) from the `lastDataFetchedTime`. (`lastDataFetchedTime` ~ `lastDataFetchedTime + TIME_PER_SLOT`)

6. 데이터를 가져오는데 시간이 조금 걸렸을겁니다.

6. It might take some time to fetch the data. eg) Disk IO or Decoding

7.  가장 마지막으로 처리된 데이터의 시간이 추정된 현재 시간보다 크다면, 즉 `lastDataFetchedTime >= estimatedCurrentTime` 이라면, 시간 내에 데이터를 가져왔다는 뜻입니다. `lastDataFetchedTime = lastDataFetchedTime + TIME_PER_SLOT`으로 설정합니다. 

7. If the the time of the last data fetched is greater than esimated current time, (`lastDataFetchedTime >= estimatedCurrentTime`), it means the data is successfully fetched in time. `lastDataFetchedTime` is set to ` lastDataFetchedTime + TIME_PER_SLOT`.

8-a. 해당 데이터를 shared array buffer에 전송해야 합니다. 우선 기록할 slot index를 결정해야 합니다. 우리가 가지고 있는 정보는 현재 consumer의 현재 slot index, 그리고 현재 consumer의 현재 slot index와 producer의 현재 slot index의 차이인 PRODUCER_OFFSET 가 있습니다. 상황은 3가지로 나뉩니다.

8. Now we have to write the data to `SharedArrayBuffer`. First, we have to decide which *index of slot* sholuld we write on. The informations we have are current *slot index* of **Consumer** and `PRODUCER_OFFSET` which is the difference of *slot index*, which of **Consumer** and **Producer**. There are 3 cases.

8-1. `PRODUCER_OFFSET == MAX_SLOT` 인 경우. 이 경우는 Producer가 최대 개수의 데이터를 이미 생성하여, 데이터를 공급하기 위해선 Consumer가 데이터를 소비할 때 까지 기다려야 하는 상황입니다. `Atomics.wait(state, PRODUCER_OFFSET, MAX_SLOT)`을 호출하여 Consumer가 데이터를 소비할 때 까지 기다립니다. 그리고 8-2로 넘어가게 됩니다.

9. If `PRODUCER_OFFSET == MAX_SLOT`, it means *Ring Buffer* is full so **Producer** should wait until **Consumer** consumes a data. We calls `Atomics.wait(state, PRODUCER_OFFSET, MAX_SLOT)` and wait until a signal from the **Consumer**. On wake, go to next step.

8-2. `PRODUCER_OFFSET >= 0` 인 경우. 이 경우는 Producer는 glitching 없이 꾸준히 시간에 맞게 데이터를 공급하고 있는 상황입니다. `slotIndex = currentProducerSlotIndex + 1`이 됩니다.

10. If `PRODUCER_OFFSET >= 0`, it means **Producer** is producing data continuously without any glitching. We can just append the data next to the last produced slot. `slotIndex = currentProducerSlotIndex + 1`.

8-3. `PRODUCER_OFFSET < 0` 인 경우. 이 경우는 Producer가 데이터를 꾸준히 공급하지 못하고, Consumer는 계속해서 데이터를 소비하는 상황입니다. 소리가 재생되지 않는 상황이거나, glitching이 발생하는 상황입니다. 이 경우 Producer의 slot index를 현재 consumer의 slot index로 설정하여 즉시 데이터를 공급할 수 있도록 해줍니다. 즉 `slotIndex = currentProducerSlotIndex - PRODUCER_OFFSET`

11. If `PRODUCER_OFFSET < 0 `, it means **Producer** is currently not able to produce data continuously and glitch happens. In this case, set *slot index* as current *slot index* of **Consumer** so the produced data can be immediately consumed by **Consumer**, which is `slotIndex = currentProducerSlotIndex - PRODUCER_OFFSET`.

8-a. 이제 기록할 slot index를 찾았습니다. 해당 slot의 소유권을 가져와서, header에는 slot index를 기록하고, 데이터에는 해당 데이터를 기록합니다. 만약 소유권을 가져오는데 실패했다면, 즉 Consumer가 해당 slot을 읽고있는 상황이라면, 데이터를 버립니다.

12. Now we found a *slot index* to write on. We get the ownership of that slot, write the *slot index* at the header part of the slot and write the data at the data part of the slot. If getting ownership is failed, which means **Consumer** is reading the same slot, simply drop the data.

8-b. `lastDataFetchedTime < estimatedCurrentTime` 이라면, 시간 내에 데이터를 가져오지 못했고, glitch가 발생하게 됩니다. 해당 데이터는 버리고, `lastDataFetchedTime = estimatedCurrentTime + TIME_PER_SLOT`으로 설정합니다.

13. Lastly, if `lastDataFetchedTime < estimatedCurrentTime`, it means we failed to fetch the data in time so the glitch happens. Drop the data and set `lastDataFetchedTime` to `estimatedCurrentTime + TIME_PER_SLOT`.