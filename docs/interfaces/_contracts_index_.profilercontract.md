> **[@poppinss/profiler](../README.md)**

[Globals](../README.md) / ["Contracts/index"](../modules/_contracts_index_.md) / [ProfilerContract](_contracts_index_.profilercontract.md) /

# Interface: ProfilerContract

Main profiler

## Hierarchy

* **ProfilerContract**

## Implemented by

* [Profiler](../classes/_profiler_index_.profiler.md)

## Index

### Properties

* [subscriber](_contracts_index_.profilercontract.md#optional-subscriber)

### Methods

* [create](_contracts_index_.profilercontract.md#create)
* [isEnabled](_contracts_index_.profilercontract.md#isenabled)
* [subscribe](_contracts_index_.profilercontract.md#subscribe)

## Properties

### `Optional` subscriber

• **subscriber**? : *[ProfilerSubscriber](../modules/_contracts_index_.md#profilersubscriber)*

## Methods

###  create

▸ **create**(`label`: string, `data?`: any): *[ProfilerRowContract](_contracts_index_.profilerrowcontract.md)*

**Parameters:**

Name | Type |
------ | ------ |
`label` | string |
`data?` | any |

**Returns:** *[ProfilerRowContract](_contracts_index_.profilerrowcontract.md)*

___

###  isEnabled

▸ **isEnabled**(`labelOrAction`: string): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`labelOrAction` | string |

**Returns:** *boolean*

___

###  subscribe

▸ **subscribe**(`fn`: [ProfilerSubscriber](../modules/_contracts_index_.md#profilersubscriber)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [ProfilerSubscriber](../modules/_contracts_index_.md#profilersubscriber) |

**Returns:** *void*