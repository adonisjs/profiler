[@adonisjs/profiler](../README.md) › ["src/Profiler/Row"](../modules/_src_profiler_row_.md) › [ProfilerRow](_src_profiler_row_.profilerrow.md)

# Class: ProfilerRow

Profiler row class is used to group profiling actions together. Any
number of nested rows can be created.

## Hierarchy

* [Profile](_src_profiler_profile_.profile.md)

  ↳ **ProfilerRow**

## Implements

* ProfileContract
* ProfilerRowContract

## Index

### Constructors

* [constructor](_src_profiler_row_.profilerrow.md#constructor)

### Accessors

* [hasParent](_src_profiler_row_.profilerrow.md#hasparent)

### Methods

* [$getAction](_src_profiler_row_.profilerrow.md#protected-getaction)
* [create](_src_profiler_row_.profilerrow.md#create)
* [end](_src_profiler_row_.profilerrow.md#end)
* [profile](_src_profiler_row_.profilerrow.md#profile)
* [profileAsync](_src_profiler_row_.profilerrow.md#profileasync)

## Constructors

###  constructor

\+ **new ProfilerRow**(`label`: string, `manager`: ProfilerContract, `data?`: any, `parentId?`: undefined | string): *[ProfilerRow](_src_profiler_row_.profilerrow.md)*

**Parameters:**

Name | Type |
------ | ------ |
`label` | string |
`manager` | ProfilerContract |
`data?` | any |
`parentId?` | undefined &#124; string |

**Returns:** *[ProfilerRow](_src_profiler_row_.profilerrow.md)*

## Accessors

###  hasParent

• **get hasParent**(): *boolean*

Returns a boolean telling if a parent exists

**Returns:** *boolean*

## Methods

### `Protected` $getAction

▸ **$getAction**(`action`: string, `data?`: any): *ProfilerActionContract*

*Overrides [Profile](_src_profiler_profile_.profile.md).[$getAction](_src_profiler_profile_.profile.md#protected-abstract-getaction)*

Returns the action instance to be used by the [Profile](_src_profiler_profile_.profile.md) class

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |
`data?` | any |

**Returns:** *ProfilerActionContract*

___

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

###  profile

▸ **profile**<**T**>(`action`: string, `data`: any, `cb`: function): *T*

*Inherited from [Profile](_src_profiler_profile_.profile.md).[profile](_src_profiler_profile_.profile.md#profile)*

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

*Inherited from [Profile](_src_profiler_profile_.profile.md).[profile](_src_profiler_profile_.profile.md#profile)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |
`data?` | any |

**Returns:** *ProfilerActionContract*

___

###  profileAsync

▸ **profileAsync**<**T**>(`action`: string, `data`: any, `cb`: function): *Promise‹T›*

*Inherited from [Profile](_src_profiler_profile_.profile.md).[profileAsync](_src_profiler_profile_.profile.md#profileasync)*

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

*Inherited from [Profile](_src_profiler_profile_.profile.md).[profileAsync](_src_profiler_profile_.profile.md#profileasync)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |
`data?` | any |

**Returns:** *Promise‹ProfilerActionContract›*
