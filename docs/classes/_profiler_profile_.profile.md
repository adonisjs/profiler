**[@poppinss/profiler](../README.md)**

[Globals](../README.md) › ["Profiler/Profile"](../modules/_profiler_profile_.md) › [Profile](_profiler_profile_.profile.md)

# Class: Profile

Abstract class to be extended to add support for timing functions.

## Hierarchy

* **Profile**

  * [ProfilerRow](_profiler_row_.profilerrow.md)

  * [Profiler](_profiler_index_.profiler.md)

## Implements

* [ProfileContract](../interfaces/_poppinss_profiler.profilecontract.md)

## Index

### Methods

* [$getAction](_profiler_profile_.profile.md#protected-abstract-$getaction)
* [profile](_profiler_profile_.profile.md#profile)
* [profileAsync](_profiler_profile_.profile.md#profileasync)

## Methods

### `Protected` `Abstract` $getAction

▸ **$getAction**(`action`: string, `data`: any): *[ProfilerActionContract](../interfaces/_poppinss_profiler.profileractioncontract.md)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |
`data` | any |

**Returns:** *[ProfilerActionContract](../interfaces/_poppinss_profiler.profileractioncontract.md)*

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

▸ **profile**(`action`: string, `data?`: any): *[ProfilerActionContract](../interfaces/_poppinss_profiler.profileractioncontract.md)*

*Implementation of [ProfileContract](../interfaces/_poppinss_profiler.profilecontract.md)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |
`data?` | any |

**Returns:** *[ProfilerActionContract](../interfaces/_poppinss_profiler.profileractioncontract.md)*

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

▸ **profileAsync**(`action`: string, `data?`: any): *Promise‹[ProfilerActionContract](../interfaces/_poppinss_profiler.profileractioncontract.md)›*

*Implementation of [ProfileContract](../interfaces/_poppinss_profiler.profilecontract.md)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |
`data?` | any |

**Returns:** *Promise‹[ProfilerActionContract](../interfaces/_poppinss_profiler.profileractioncontract.md)›*