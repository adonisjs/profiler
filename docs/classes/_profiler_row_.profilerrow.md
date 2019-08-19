**[@poppinss/profiler](../README.md)**

[Globals](../README.md) › ["Profiler/Row"](../modules/_profiler_row_.md) › [ProfilerRow](_profiler_row_.profilerrow.md)

# Class: ProfilerRow

Profiler row class is used to group profiling actions together. Any
number of nested rows can be created.

## Hierarchy

* [Profile](_profiler_profile_.profile.md)

  * **ProfilerRow**

## Implements

* [ProfileContract](../interfaces/_poppinss_profiler.profilecontract.md)
* [ProfilerRowContract](../interfaces/_poppinss_profiler.profilerrowcontract.md)

## Index

### Constructors

* [constructor](_profiler_row_.profilerrow.md#constructor)

### Accessors

* [hasParent](_profiler_row_.profilerrow.md#hasparent)

### Methods

* [$getAction](_profiler_row_.profilerrow.md#protected-$getaction)
* [child](_profiler_row_.profilerrow.md#child)
* [end](_profiler_row_.profilerrow.md#end)
* [profile](_profiler_row_.profilerrow.md#profile)
* [profileAsync](_profiler_row_.profilerrow.md#profileasync)

## Constructors

###  constructor

\+ **new ProfilerRow**(`_label`: string, `_manager`: [ProfilerContract](../interfaces/_poppinss_profiler.profilercontract.md), `_data?`: any, `_parentId?`: undefined | string): *[ProfilerRow](_profiler_row_.profilerrow.md)*

**Parameters:**

Name | Type |
------ | ------ |
`_label` | string |
`_manager` | [ProfilerContract](../interfaces/_poppinss_profiler.profilercontract.md) |
`_data?` | any |
`_parentId?` | undefined \| string |

**Returns:** *[ProfilerRow](_profiler_row_.profilerrow.md)*

## Accessors

###  hasParent

• **get hasParent**(): *boolean*

Returns a boolean telling if a parent exists

**Returns:** *boolean*

## Methods

### `Protected` $getAction

▸ **$getAction**(`action`: string, `data?`: any): *[ProfilerActionContract](../interfaces/_poppinss_profiler.profileractioncontract.md)*

*Overrides [Profile](_profiler_profile_.profile.md).[$getAction](_profiler_profile_.profile.md#protected-abstract-$getaction)*

Returns the action instance to be used by the [Profile](_profiler_profile_.profile.md) class

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |
`data?` | any |

**Returns:** *[ProfilerActionContract](../interfaces/_poppinss_profiler.profileractioncontract.md)*

___

###  child

▸ **child**(`label`: string, `data?`: any): *[ProfilerRowContract](../interfaces/_poppinss_profiler.profilerrowcontract.md)*

*Implementation of [ProfilerRowContract](../interfaces/_poppinss_profiler.profilerrowcontract.md)*

Get a new child logger. Child logger will emit a new row
in the events timeline

**Parameters:**

Name | Type |
------ | ------ |
`label` | string |
`data?` | any |

**Returns:** *[ProfilerRowContract](../interfaces/_poppinss_profiler.profilerrowcontract.md)*

___

###  end

▸ **end**(`data?`: any): *void*

*Implementation of [ProfilerRowContract](../interfaces/_poppinss_profiler.profilerrowcontract.md)*

End the profiler instance by emitting end packet. After
this all profiling calls will be considered overflows

**Parameters:**

Name | Type |
------ | ------ |
`data?` | any |

**Returns:** *void*

___

###  profile

▸ **profile**<**T**>(`action`: string, `data`: any, `cb`: function): *T*

*Inherited from [Profile](_profiler_profile_.profile.md).[profile](_profiler_profile_.profile.md#profile)*

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

▸ **profile**(`action`: string, `data?`: any): *[ProfilerActionContract](../interfaces/_poppinss_profiler.profileractioncontract.md)*

*Implementation of [ProfilerRowContract](../interfaces/_poppinss_profiler.profilerrowcontract.md)*

*Inherited from [Profile](_profiler_profile_.profile.md).[profile](_profiler_profile_.profile.md#profile)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |
`data?` | any |

**Returns:** *[ProfilerActionContract](../interfaces/_poppinss_profiler.profileractioncontract.md)*

___

###  profileAsync

▸ **profileAsync**<**T**>(`action`: string, `data`: any, `cb`: function): *Promise‹T›*

*Inherited from [Profile](_profiler_profile_.profile.md).[profileAsync](_profiler_profile_.profile.md#profileasync)*

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

▸ **profileAsync**(`action`: string, `data?`: any): *Promise‹[ProfilerActionContract](../interfaces/_poppinss_profiler.profileractioncontract.md)›*

*Implementation of [ProfilerRowContract](../interfaces/_poppinss_profiler.profilerrowcontract.md)*

*Inherited from [Profile](_profiler_profile_.profile.md).[profileAsync](_profiler_profile_.profile.md#profileasync)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |
`data?` | any |

**Returns:** *Promise‹[ProfilerActionContract](../interfaces/_poppinss_profiler.profileractioncontract.md)›*