**[@poppinss/profiler](../README.md)**

[Globals](../README.md) › ["Profiler/index"](../modules/_profiler_index_.md) › [Profiler](_profiler_index_.profiler.md)

# Class: Profiler

Profiler exposes the public interface to create new profiling
rows and actions. In case of blacklisted actions, dummy
implementations are returned, resulting in noop.

## Hierarchy

* [Profile](_profiler_profile_.profile.md)

  * **Profiler**

## Implements

* [ProfileContract](../interfaces/_poppinss_profiler.profilecontract.md)
* [ProfilerContract](../interfaces/_poppinss_profiler.profilercontract.md)

## Index

### Constructors

* [constructor](_profiler_index_.profiler.md#constructor)

### Properties

* [subscriber](_profiler_index_.profiler.md#subscriber)

### Methods

* [$getAction](_profiler_index_.profiler.md#protected-$getaction)
* [create](_profiler_index_.profiler.md#create)
* [isEnabled](_profiler_index_.profiler.md#isenabled)
* [profile](_profiler_index_.profiler.md#profile)
* [profileAsync](_profiler_index_.profiler.md#profileasync)
* [subscribe](_profiler_index_.profiler.md#subscribe)

## Constructors

###  constructor

\+ **new Profiler**(`config`: Partial‹[ProfilerConfig](../modules/_poppinss_profiler.md#profilerconfig)›): *[Profiler](_profiler_index_.profiler.md)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | Partial‹[ProfilerConfig](../modules/_poppinss_profiler.md#profilerconfig)› |

**Returns:** *[Profiler](_profiler_index_.profiler.md)*

## Properties

###  subscriber

• **subscriber**: *[ProfilerSubscriber](../modules/_poppinss_profiler.md#profilersubscriber)*

*Implementation of [ProfilerContract](../interfaces/_poppinss_profiler.profilercontract.md).[subscriber](../interfaces/_poppinss_profiler.profilercontract.md#optional-subscriber)*

Subscribe to listen for events

## Methods

### `Protected` $getAction

▸ **$getAction**(`action`: string, `data?`: any): *[ProfilerActionContract](../interfaces/_poppinss_profiler.profileractioncontract.md)*

*Overrides [Profile](_profiler_profile_.profile.md).[$getAction](_profiler_profile_.profile.md#protected-abstract-$getaction)*

Returns the action to be used for timing functions

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |
`data?` | any |

**Returns:** *[ProfilerActionContract](../interfaces/_poppinss_profiler.profileractioncontract.md)*

___

###  create

▸ **create**(`label`: string, `data?`: any): *[ProfilerRowContract](../interfaces/_poppinss_profiler.profilerrowcontract.md)*

*Implementation of [ProfilerContract](../interfaces/_poppinss_profiler.profilercontract.md)*

Creates a new profiler row for a given action. If action is not enabled
then a copy of [[this.dummyRow]] is returned, which has the same
public API with all actions to a noop.

**Parameters:**

Name | Type |
------ | ------ |
`label` | string |
`data?` | any |

**Returns:** *[ProfilerRowContract](../interfaces/_poppinss_profiler.profilerrowcontract.md)*

___

###  isEnabled

▸ **isEnabled**(`labelOrAction`: string): *boolean*

*Implementation of [ProfilerContract](../interfaces/_poppinss_profiler.profilercontract.md)*

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

*Implementation of [ProfilerContract](../interfaces/_poppinss_profiler.profilercontract.md)*

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

*Implementation of [ProfilerContract](../interfaces/_poppinss_profiler.profilercontract.md)*

*Inherited from [Profile](_profiler_profile_.profile.md).[profileAsync](_profiler_profile_.profile.md#profileasync)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |
`data?` | any |

**Returns:** *Promise‹[ProfilerActionContract](../interfaces/_poppinss_profiler.profileractioncontract.md)›*

___

###  subscribe

▸ **subscribe**(`fn`: [ProfilerSubscriber](../modules/_poppinss_profiler.md#profilersubscriber)): *void*

*Implementation of [ProfilerContract](../interfaces/_poppinss_profiler.profilercontract.md)*

Define subscriber for the profiler. Only one subscriber can be defined
at max. Redifying the subscriber will override the existing subscriber

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [ProfilerSubscriber](../modules/_poppinss_profiler.md#profilersubscriber) |

**Returns:** *void*