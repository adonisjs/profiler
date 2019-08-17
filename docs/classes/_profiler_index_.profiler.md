> **[@poppinss/profiler](../README.md)**

[Globals](../README.md) / ["Profiler/index"](../modules/_profiler_index_.md) / [Profiler](_profiler_index_.profiler.md) /

# Class: Profiler

Profiler exposes the public interface to create new profiling
rows and actions. In case of blacklisted actions, dummy
implementations are returned, resulting in noop.

## Hierarchy

* **Profiler**

## Implements

* [ProfilerContract](../interfaces/_contracts_index_.profilercontract.md)

## Index

### Constructors

* [constructor](_profiler_index_.profiler.md#constructor)

### Properties

* [subscriber](_profiler_index_.profiler.md#subscriber)

### Methods

* [create](_profiler_index_.profiler.md#create)
* [isEnabled](_profiler_index_.profiler.md#isenabled)
* [subscribe](_profiler_index_.profiler.md#subscribe)

## Constructors

###  constructor

\+ **new Profiler**(`config`: `Partial<ProfilerConfig>`): *[Profiler](_profiler_index_.profiler.md)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | `Partial<ProfilerConfig>` |

**Returns:** *[Profiler](_profiler_index_.profiler.md)*

## Properties

###  subscriber

• **subscriber**: *[ProfilerSubscriber](../modules/_contracts_index_.md#profilersubscriber)*

*Implementation of [ProfilerContract](../interfaces/_contracts_index_.profilercontract.md).[subscriber](../interfaces/_contracts_index_.profilercontract.md#optional-subscriber)*

Subscribe to listen for events

## Methods

###  create

▸ **create**(`label`: string, `data?`: any): *[ProfilerRowContract](../interfaces/_contracts_index_.profilerrowcontract.md)*

*Implementation of [ProfilerContract](../interfaces/_contracts_index_.profilercontract.md)*

Creates a new profiler row for a given action. If action is not enabled
then a copy of [[this.dummyRow]] is returned, which has the same
public API with all actions to a noop.

**Parameters:**

Name | Type |
------ | ------ |
`label` | string |
`data?` | any |

**Returns:** *[ProfilerRowContract](../interfaces/_contracts_index_.profilerrowcontract.md)*

___

###  isEnabled

▸ **isEnabled**(`labelOrAction`: string): *boolean*

*Implementation of [ProfilerContract](../interfaces/_contracts_index_.profilercontract.md)*

Returns a boolean telling if profiler is enabled for
a given `action` or `label` or not?

**Parameters:**

Name | Type |
------ | ------ |
`labelOrAction` | string |

**Returns:** *boolean*

___

###  subscribe

▸ **subscribe**(`fn`: [ProfilerSubscriber](../modules/_contracts_index_.md#profilersubscriber)): *void*

*Implementation of [ProfilerContract](../interfaces/_contracts_index_.profilercontract.md)*

Define subscriber for the profiler. Only one subscriber can be defined
at max. Redifying the subscriber will override the existing subscriber

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [ProfilerSubscriber](../modules/_contracts_index_.md#profilersubscriber) |

**Returns:** *void*