[@adonisjs/profiler](../README.md) › ["src/Profiler/index"](../modules/_src_profiler_index_.md) › [Profiler](_src_profiler_index_.profiler.md)

# Class: Profiler

Profiler exposes the public interface to create new profiling
rows and actions. In case of blacklisted actions, dummy
implementations are returned, resulting in noop.

## Hierarchy

* [AbstractProfiler](_src_profiler_abstractprofiler_.abstractprofiler.md)

  ↳ **Profiler**

## Implements

* AbstractProfilerContract
* ProfilerContract

## Index

### Constructors

* [constructor](_src_profiler_index_.profiler.md#constructor)

### Properties

* [processor](_src_profiler_index_.profiler.md#optional-processor)

### Methods

* [cleanup](_src_profiler_index_.profiler.md#cleanup)
* [create](_src_profiler_index_.profiler.md#create)
* [getAction](_src_profiler_index_.profiler.md#protected-getaction)
* [isEnabled](_src_profiler_index_.profiler.md#isenabled)
* [process](_src_profiler_index_.profiler.md#process)
* [profile](_src_profiler_index_.profiler.md#profile)
* [profileAsync](_src_profiler_index_.profiler.md#profileasync)

## Constructors

###  constructor

\+ **new Profiler**(`appRoot`: string, `logger`: LoggerContract, `config`: Partial‹ProfilerConfig›): *[Profiler](_src_profiler_index_.profiler.md)*

**Parameters:**

Name | Type |
------ | ------ |
`appRoot` | string |
`logger` | LoggerContract |
`config` | Partial‹ProfilerConfig› |

**Returns:** *[Profiler](_src_profiler_index_.profiler.md)*

## Properties

### `Optional` processor

• **processor**? : *Exclude‹ProfilerProcessor, string›*

Subscribe to listen for events

## Methods

###  cleanup

▸ **cleanup**(): *void*

Close the worker and cleanup memory

**Returns:** *void*

___

###  create

▸ **create**(`label`: string, `data?`: any): *ProfilerRowContract*

Creates a new profiler row for a given action. If action is not enabled
then a copy of [[this.dummyRow]] is returned, which has the same
public API with all actions to a noop.

**Parameters:**

Name | Type |
------ | ------ |
`label` | string |
`data?` | any |

**Returns:** *ProfilerRowContract*

___

### `Protected` getAction

▸ **getAction**(`action`: string, `data?`: any): *ProfilerActionContract*

*Overrides [AbstractProfiler](_src_profiler_abstractprofiler_.abstractprofiler.md).[getAction](_src_profiler_abstractprofiler_.abstractprofiler.md#protected-abstract-getaction)*

Returns the action to be used for timing functions

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |
`data?` | any |

**Returns:** *ProfilerActionContract*

___

###  isEnabled

▸ **isEnabled**(`labelOrAction`: string): *boolean*

Returns a boolean telling if profiler is enabled for
a given `action` or `label` or not?

**Parameters:**

Name | Type |
------ | ------ |
`labelOrAction` | string |

**Returns:** *boolean*

___

###  process

▸ **process**(`fn`: ProfilerProcessor): *void*

Define subscriber for the profiler. Only one subscriber can be defined
at max. Redifying the subscriber will override the existing subscriber

**Parameters:**

Name | Type |
------ | ------ |
`fn` | ProfilerProcessor |

**Returns:** *void*

___

###  profile

▸ **profile**<**T**>(`action`: string, `data`: any, `cb`: function): *T*

*Inherited from [AbstractProfiler](_src_profiler_abstractprofiler_.abstractprofiler.md).[profile](_src_profiler_abstractprofiler_.abstractprofiler.md#profile)*

Get a new profiler action instance to time your code. Make sure
to call the `end` function, when manually managing the actions

**Type parameters:**

▪ **T**: *any*

**Parameters:**

▪ **action**: *string*

▪ **data**: *any*

▪ **cb**: *function*

▸ (): *T*

**Returns:** *T*

▸ **profile**(`action`: string, `data?`: any): *ProfilerActionContract*

*Inherited from [AbstractProfiler](_src_profiler_abstractprofiler_.abstractprofiler.md).[profile](_src_profiler_abstractprofiler_.abstractprofiler.md#profile)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |
`data?` | any |

**Returns:** *ProfilerActionContract*

___

###  profileAsync

▸ **profileAsync**<**T**>(`action`: string, `data`: any, `cb`: function): *Promise‹T›*

*Inherited from [AbstractProfiler](_src_profiler_abstractprofiler_.abstractprofiler.md).[profileAsync](_src_profiler_abstractprofiler_.abstractprofiler.md#profileasync)*

Profile asyncronously. If you are are not passing a callback to this method,
then consider using [[this.profile]].

**Type parameters:**

▪ **T**: *any*

**Parameters:**

▪ **action**: *string*

▪ **data**: *any*

▪ **cb**: *function*

▸ (): *Promise‹T›*

**Returns:** *Promise‹T›*

▸ **profileAsync**(`action`: string, `data?`: any): *Promise‹ProfilerActionContract›*

*Inherited from [AbstractProfiler](_src_profiler_abstractprofiler_.abstractprofiler.md).[profileAsync](_src_profiler_abstractprofiler_.abstractprofiler.md#profileasync)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |
`data?` | any |

**Returns:** *Promise‹ProfilerActionContract›*
