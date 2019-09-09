**[@adonisjs/profiler](../README.md)**

[Globals](../README.md) › [&quot;src/Profiler/Profile&quot;](../modules/_src_profiler_profile_.md) › [Profile](_src_profiler_profile_.profile.md)

# Class: Profile

Abstract class to be extended to add support for timing functions.

## Hierarchy

* **Profile**

  * [ProfilerRow](_src_profiler_row_.profilerrow.md)

  * [Profiler](_src_profiler_index_.profiler.md)

## Implements

* ProfileContract

## Index

### Methods

* [$getAction](_src_profiler_profile_.profile.md#protected-abstract-$getaction)
* [profile](_src_profiler_profile_.profile.md#profile)
* [profileAsync](_src_profiler_profile_.profile.md#profileasync)

## Methods

### `Protected` `Abstract` $getAction

▸ **$getAction**(`action`: string, `data`: any): *ProfilerActionContract*

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