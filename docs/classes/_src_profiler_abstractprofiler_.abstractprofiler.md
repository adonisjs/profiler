[@adonisjs/profiler](../README.md) › ["src/Profiler/AbstractProfiler"](../modules/_src_profiler_abstractprofiler_.md) › [AbstractProfiler](_src_profiler_abstractprofiler_.abstractprofiler.md)

# Class: AbstractProfiler

Abstract class to be extended to add support for timing functions.

## Hierarchy

* **AbstractProfiler**

  ↳ [ProfilerRow](_src_row_index_.profilerrow.md)

  ↳ [Profiler](_src_profiler_index_.profiler.md)

## Implements

* AbstractProfilerContract

## Index

### Methods

* [getAction](_src_profiler_abstractprofiler_.abstractprofiler.md#protected-abstract-getaction)
* [profile](_src_profiler_abstractprofiler_.abstractprofiler.md#profile)
* [profileAsync](_src_profiler_abstractprofiler_.abstractprofiler.md#profileasync)

## Methods

### `Protected` `Abstract` getAction

▸ **getAction**(`action`: string, `data`: any): *ProfilerActionContract*

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |
`data` | any |

**Returns:** *ProfilerActionContract*

___

###  profile

▸ **profile**<**T**>(`action`: string, `data`: any, `cb`: function): *T*

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

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |
`data?` | any |

**Returns:** *ProfilerActionContract*

___

###  profileAsync

▸ **profileAsync**<**T**>(`action`: string, `data`: any, `cb`: function): *Promise‹T›*

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

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |
`data?` | any |

**Returns:** *Promise‹ProfilerActionContract›*
