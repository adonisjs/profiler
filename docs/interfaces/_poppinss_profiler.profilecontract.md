**[@poppinss/profiler](../README.md)**

[Globals](../README.md) › [@poppinss/profiler](../modules/_poppinss_profiler.md) › [ProfileContract](_poppinss_profiler.profilecontract.md)

# Interface: ProfileContract

Exposes the API to time functions

## Hierarchy

* **ProfileContract**

  * [ProfilerRowContract](_poppinss_profiler.profilerrowcontract.md)

  * [ProfilerContract](_poppinss_profiler.profilercontract.md)

## Implemented by

* [Profile](../classes/_profiler_profile_.profile.md)
* [Profiler](../classes/_profiler_index_.profiler.md)
* [ProfilerRow](../classes/_profiler_row_.profilerrow.md)

## Index

### Methods

* [profile](_poppinss_profiler.profilecontract.md#profile)
* [profileAsync](_poppinss_profiler.profilecontract.md#profileasync)

## Methods

###  profile

▸ **profile**<**T**>(`action`: string, `data`: any, `cb`: function): *T*

**Type parameters:**

▪ **T**: *any*

**Parameters:**

▪ **action**: *string*

▪ **data**: *any*

▪ **cb**: *function*

▸ (): *T*

**Returns:** *T*

▸ **profile**(`action`: string, `data?`: any): *[ProfilerActionContract](_poppinss_profiler.profileractioncontract.md)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |
`data?` | any |

**Returns:** *[ProfilerActionContract](_poppinss_profiler.profileractioncontract.md)*

▸ **profile**<**T**>(`action`: string, `data?`: any, `cb?`: undefined | function): *[ProfilerActionContract](_poppinss_profiler.profileractioncontract.md) | T*

**Type parameters:**

▪ **T**: *any*

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |
`data?` | any |
`cb?` | undefined \| function |

**Returns:** *[ProfilerActionContract](_poppinss_profiler.profileractioncontract.md) | T*

___

###  profileAsync

▸ **profileAsync**<**T**>(`action`: string, `data`: any, `cb`: function): *Promise‹T›*

**Type parameters:**

▪ **T**: *any*

**Parameters:**

▪ **action**: *string*

▪ **data**: *any*

▪ **cb**: *function*

▸ (): *Promise‹T›*

**Returns:** *Promise‹T›*

▸ **profileAsync**(`action`: string, `data?`: any): *Promise‹[ProfilerActionContract](_poppinss_profiler.profileractioncontract.md)›*

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |
`data?` | any |

**Returns:** *Promise‹[ProfilerActionContract](_poppinss_profiler.profileractioncontract.md)›*

▸ **profileAsync**<**T**>(`action`: string, `data?`: any, `cb?`: undefined | function): *Promise‹[ProfilerActionContract](_poppinss_profiler.profileractioncontract.md) | T›*

**Type parameters:**

▪ **T**: *any*

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |
`data?` | any |
`cb?` | undefined \| function |

**Returns:** *Promise‹[ProfilerActionContract](_poppinss_profiler.profileractioncontract.md) | T›*