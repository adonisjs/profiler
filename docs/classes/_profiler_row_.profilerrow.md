> **[@poppinss/profiler](../README.md)**

[Globals](../README.md) / ["Profiler/Row"](../modules/_profiler_row_.md) / [ProfilerRow](_profiler_row_.profilerrow.md) /

# Class: ProfilerRow

Profiler row class is used to group profiling actions together. Any
number of nested rows can be created.

## Hierarchy

* **ProfilerRow**

## Implements

* [ProfilerRowContract](../interfaces/_contracts_index_.profilerrowcontract.md)

## Index

### Constructors

* [constructor](_profiler_row_.profilerrow.md#constructor)

### Accessors

* [hasParent](_profiler_row_.profilerrow.md#hasparent)

### Methods

* [child](_profiler_row_.profilerrow.md#child)
* [end](_profiler_row_.profilerrow.md#end)
* [profile](_profiler_row_.profilerrow.md#profile)
* [profileAsync](_profiler_row_.profilerrow.md#profileasync)

## Constructors

###  constructor

\+ **new ProfilerRow**(`_label`: string, `_manager`: [ProfilerContract](../interfaces/_contracts_index_.profilercontract.md), `_data?`: any, `_parentId?`: undefined | string): *[ProfilerRow](_profiler_row_.profilerrow.md)*

**Parameters:**

Name | Type |
------ | ------ |
`_label` | string |
`_manager` | [ProfilerContract](../interfaces/_contracts_index_.profilercontract.md) |
`_data?` | any |
`_parentId?` | undefined \| string |

**Returns:** *[ProfilerRow](_profiler_row_.profilerrow.md)*

## Accessors

###  hasParent

• **get hasParent**(): *boolean*

Returns a boolean telling if a parent exists

**Returns:** *boolean*

## Methods

###  child

▸ **child**(`label`: string, `data?`: any): *[ProfilerRowContract](../interfaces/_contracts_index_.profilerrowcontract.md)*

*Implementation of [ProfilerRowContract](../interfaces/_contracts_index_.profilerrowcontract.md)*

Get a new child logger. Child logger will emit a new row
in the events timeline

**Parameters:**

Name | Type |
------ | ------ |
`label` | string |
`data?` | any |

**Returns:** *[ProfilerRowContract](../interfaces/_contracts_index_.profilerrowcontract.md)*

___

###  end

▸ **end**(`data?`: any): *void*

*Implementation of [ProfilerRowContract](../interfaces/_contracts_index_.profilerrowcontract.md)*

End the profiler instance by emitting end packet. After
this all profiling calls will be considered overflows

**Parameters:**

Name | Type |
------ | ------ |
`data?` | any |

**Returns:** *void*

___

###  profile

▸ **profile**<**T**>(`action`: string, `data`: any, `cb`: function): *`T`*

Get a new profiler action instance to time your code. Make sure
to call the `end` function, when manually managing the actions

**Type parameters:**

▪ **T**: *any*

**Parameters:**

▪ **action**: *string*

▪ **data**: *any*

▪ **cb**: *function*

▸ (): *`T`*

**Returns:** *`T`*

▸ **profile**(`action`: string, `data?`: any): *[ProfilerActionContract](../interfaces/_contracts_index_.profileractioncontract.md)*

*Implementation of [ProfilerRowContract](../interfaces/_contracts_index_.profilerrowcontract.md)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |
`data?` | any |

**Returns:** *[ProfilerActionContract](../interfaces/_contracts_index_.profileractioncontract.md)*

___

###  profileAsync

▸ **profileAsync**<**T**>(`action`: string, `data`: any, `cb`: function): *`Promise<T>`*

Same as [[this.profile]] but async

**Type parameters:**

▪ **T**: *any*

**Parameters:**

▪ **action**: *string*

▪ **data**: *any*

▪ **cb**: *function*

▸ (): *`Promise<T>`*

**Returns:** *`Promise<T>`*

▸ **profileAsync**(`action`: string, `data?`: any): *`Promise<ProfilerActionContract>`*

*Implementation of [ProfilerRowContract](../interfaces/_contracts_index_.profilerrowcontract.md)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |
`data?` | any |

**Returns:** *`Promise<ProfilerActionContract>`*