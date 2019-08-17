> **[@poppinss/profiler](../README.md)**

[Globals](../README.md) / ["Contracts/index"](_contracts_index_.md) /

# External module: "Contracts/index"

## Index

### Interfaces

* [ProfilerActionContract](../interfaces/_contracts_index_.profileractioncontract.md)
* [ProfilerContract](../interfaces/_contracts_index_.profilercontract.md)
* [ProfilerRowContract](../interfaces/_contracts_index_.profilerrowcontract.md)

### Type aliases

* [ProfilerActionDataPacket](_contracts_index_.md#profileractiondatapacket)
* [ProfilerConfig](_contracts_index_.md#profilerconfig)
* [ProfilerRowDataPacket](_contracts_index_.md#profilerrowdatapacket)
* [ProfilerSubscriber](_contracts_index_.md#profilersubscriber)

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

▸ (`log`: [ProfilerActionDataPacket](_contracts_index_.md#profileractiondatapacket) | [ProfilerRowDataPacket](_contracts_index_.md#profilerrowdatapacket)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`log` | [ProfilerActionDataPacket](_contracts_index_.md#profileractiondatapacket) \| [ProfilerRowDataPacket](_contracts_index_.md#profilerrowdatapacket) |