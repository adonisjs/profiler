**[@poppinss/profiler](../README.md)**

[Globals](../README.md) › [@poppinss/profiler](_poppinss_profiler.md)

# External module: @poppinss/profiler

## Index

### Interfaces

* [ProfileContract](../interfaces/_poppinss_profiler.profilecontract.md)
* [ProfilerActionContract](../interfaces/_poppinss_profiler.profileractioncontract.md)
* [ProfilerContract](../interfaces/_poppinss_profiler.profilercontract.md)
* [ProfilerRowContract](../interfaces/_poppinss_profiler.profilerrowcontract.md)

### Type aliases

* [ProfilerActionDataPacket](_poppinss_profiler.md#profileractiondatapacket)
* [ProfilerConfig](_poppinss_profiler.md#profilerconfig)
* [ProfilerRowDataPacket](_poppinss_profiler.md#profilerrowdatapacket)
* [ProfilerSubscriber](_poppinss_profiler.md#profilersubscriber)

## Type aliases

###  ProfilerActionDataPacket

Ƭ **ProfilerActionDataPacket**: *object*

Shape of data packet for a single action

#### Type declaration:

___

###  ProfilerConfig

Ƭ **ProfilerConfig**: *object*

Profiler config

#### Type declaration:

___

###  ProfilerRowDataPacket

Ƭ **ProfilerRowDataPacket**: *object*

Shape of data packet for a single row

#### Type declaration:

___

###  ProfilerSubscriber

Ƭ **ProfilerSubscriber**: *function*

The subscriber action that listens for logs

#### Type declaration:

▸ (`log`: [ProfilerActionDataPacket](_poppinss_profiler.md#profileractiondatapacket) | [ProfilerRowDataPacket](_poppinss_profiler.md#profilerrowdatapacket)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`log` | [ProfilerActionDataPacket](_poppinss_profiler.md#profileractiondatapacket) \| [ProfilerRowDataPacket](_poppinss_profiler.md#profilerrowdatapacket) |