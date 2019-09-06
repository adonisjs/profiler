**[@adonisjs/profiler](../README.md)**

[Globals](../README.md) › ["src/Profiler/index"](../modules/_src_profiler_index_.md) › [Profiler](_src_profiler_index_.profiler.md)

# Class: Profiler

Profiler exposes the public interface to create new profiling
rows and actions. In case of blacklisted actions, dummy
implementations are returned, resulting in noop.

## Hierarchy

* [Profile](_src_profiler_profile_.profile.md)

  * **Profiler**

## Implements

* ProfileContract
* ProfilerContract

## Index

### Constructors

* [constructor](_src_profiler_index_.profiler.md#constructor)

### Properties

* [subscriber](_src_profiler_index_.profiler.md#subscriber)

### Methods

* [$getAction](_src_profiler_index_.profiler.md#protected-$getaction)
* [create](_src_profiler_index_.profiler.md#create)
* [isEnabled](_src_profiler_index_.profiler.md#isenabled)
* [profile](_src_profiler_index_.profiler.md#profile)
* [profileAsync](_src_profiler_index_.profiler.md#profileasync)
* [subscribe](_src_profiler_index_.profiler.md#subscribe)

## Constructors

###  constructor

\+ **new Profiler**(`config`: Partial‹ProfilerConfig›): *[Profiler](_src_profiler_index_.profiler.md)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | Partial‹ProfilerConfig› |

**Returns:** *[Profiler](_src_profiler_index_.profiler.md)*

## Properties

###  subscriber

• **subscriber**: *ProfilerSubscriber*

Subscribe to listen for events

## Methods

### `Protected` $getAction

▸ **$getAction**(`action`: string, `data?`: any): *ProfilerActionContract*

*Overrides [Profile](_src_profiler_profile_.profile.md).[$getAction](_src_profiler_profile_.profile.md#protected-abstract-$getaction)*

Returns the action to be used for timing functions

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |
`data?` | any |

**Returns:** *ProfilerActionContract*

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

___

###  subscribe

▸ **subscribe**(`fn`: ProfilerSubscriber): *void*

Define subscriber for the profiler. Only one subscriber can be defined
at max. Redifying the subscriber will override the existing subscriber

**Parameters:**

Name | Type |
------ | ------ |
`fn` | ProfilerSubscriber |

**Returns:** *void*