[@adonisjs/profiler](../README.md) › ["src/Row/index"](../modules/_src_row_index_.md) › [ProfilerRow](_src_row_index_.profilerrow.md)

# Class: ProfilerRow

Profiler row class is used to group profiling actions together. Any
number of nested rows can be created.

## Hierarchy

* [AbstractProfiler](_src_profiler_abstractprofiler_.abstractprofiler.md)

  ↳ **ProfilerRow**

## Implements

* AbstractProfilerContract
* ProfilerRowContract

## Index

### Constructors

* [constructor](_src_row_index_.profilerrow.md#constructor)

### Accessors

* [hasParent](_src_row_index_.profilerrow.md#hasparent)

### Methods

* [create](_src_row_index_.profilerrow.md#create)
* [end](_src_row_index_.profilerrow.md#end)
* [getAction](_src_row_index_.profilerrow.md#protected-getaction)
* [profile](_src_row_index_.profilerrow.md#profile)
* [profileAsync](_src_row_index_.profilerrow.md#profileasync)

## Constructors

###  constructor

\+ **new ProfilerRow**(`label`: string, `manager`: ProfilerContract, `data?`: any, `parentId?`: undefined | string): *[ProfilerRow](_src_row_index_.profilerrow.md)*

**Parameters:**

Name | Type |
------ | ------ |
`label` | string |
`manager` | ProfilerContract |
`data?` | any |
`parentId?` | undefined &#124; string |

**Returns:** *[ProfilerRow](_src_row_index_.profilerrow.md)*

## Accessors

###  hasParent

• **get hasParent**(): *boolean*

Returns a boolean telling if a parent exists

**Returns:** *boolean*

## Methods

###  create

▸ **create**(`label`: string, `data?`: any): *ProfilerRowContract*

Get a new child logger. Child logger will emit a new row
in the events timeline

**Parameters:**

Name | Type |
------ | ------ |
`label` | string |
`data?` | any |

**Returns:** *ProfilerRowContract*

___

###  end

▸ **end**(`data?`: any): *void*

End the profiler instance by emitting end packet. After
this all profiling calls will be considered overflows

**Parameters:**

Name | Type |
------ | ------ |
`data?` | any |

**Returns:** *void*

___

### `Protected` getAction

▸ **getAction**(`action`: string, `data?`: any): *ProfilerActionContract*

*Overrides [AbstractProfiler](_src_profiler_abstractprofiler_.abstractprofiler.md).[getAction](_src_profiler_abstractprofiler_.abstractprofiler.md#protected-abstract-getaction)*

Returns the action instance to be used by the [AbstractProfiler](_src_profiler_abstractprofiler_.abstractprofiler.md) class

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |
`data?` | any |

**Returns:** *ProfilerActionContract*

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
