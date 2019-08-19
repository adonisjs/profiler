**[@poppinss/profiler](../README.md)**

[Globals](../README.md) › [@poppinss/profiler](../modules/_poppinss_profiler.md) › [ProfilerRowContract](_poppinss_profiler.profilerrowcontract.md)

# Interface: ProfilerRowContract

Profiler row can spawn new actions or new rows

## Hierarchy

* [ProfileContract](_poppinss_profiler.profilecontract.md)

  * **ProfilerRowContract**

## Implemented by

* [ProfilerRow](../classes/_profiler_row_.profilerrow.md)

## Index

### Properties

* [hasParent](_poppinss_profiler.profilerrowcontract.md#hasparent)

### Methods

* [child](_poppinss_profiler.profilerrowcontract.md#child)
* [end](_poppinss_profiler.profilerrowcontract.md#end)
* [profile](_poppinss_profiler.profilerrowcontract.md#profile)
* [profileAsync](_poppinss_profiler.profilerrowcontract.md#profileasync)

## Properties

###  hasParent

• **hasParent**: *boolean*

## Methods

###  child

▸ **child**(`label`: string, `data?`: any): *[ProfilerRowContract](_poppinss_profiler.profilerrowcontract.md)*

**Parameters:**

Name | Type |
------ | ------ |
`label` | string |
`data?` | any |

**Returns:** *[ProfilerRowContract](_poppinss_profiler.profilerrowcontract.md)*

___

###  end

▸ **end**(`data?`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`data?` | any |

**Returns:** *void*

___

###  profile

▸ **profile**<**T**>(`action`: string, `data`: any, `cb`: function): *T*

*Inherited from [ProfileContract](_poppinss_profiler.profilecontract.md).[profile](_poppinss_profiler.profilecontract.md#profile)*

**Type parameters:**

▪ **T**: *any*

**Parameters:**

▪ **action**: *string*

▪ **data**: *any*

▪ **cb**: *function*

▸ (): *T*

**Returns:** *T*

▸ **profile**(`action`: string, `data?`: any): *[ProfilerActionContract](_poppinss_profiler.profileractioncontract.md)*

*Inherited from [ProfileContract](_poppinss_profiler.profilecontract.md).[profile](_poppinss_profiler.profilecontract.md#profile)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |
`data?` | any |

**Returns:** *[ProfilerActionContract](_poppinss_profiler.profileractioncontract.md)*

▸ **profile**<**T**>(`action`: string, `data?`: any, `cb?`: undefined | function): *[ProfilerActionContract](_poppinss_profiler.profileractioncontract.md) | T*

*Inherited from [ProfileContract](_poppinss_profiler.profilecontract.md).[profile](_poppinss_profiler.profilecontract.md#profile)*

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

*Inherited from [ProfileContract](_poppinss_profiler.profilecontract.md).[profileAsync](_poppinss_profiler.profilecontract.md#profileasync)*

**Type parameters:**

▪ **T**: *any*

**Parameters:**

▪ **action**: *string*

▪ **data**: *any*

▪ **cb**: *function*

▸ (): *Promise‹T›*

**Returns:** *Promise‹T›*

▸ **profileAsync**(`action`: string, `data?`: any): *Promise‹[ProfilerActionContract](_poppinss_profiler.profileractioncontract.md)›*

*Inherited from [ProfileContract](_poppinss_profiler.profilecontract.md).[profileAsync](_poppinss_profiler.profilecontract.md#profileasync)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |
`data?` | any |

**Returns:** *Promise‹[ProfilerActionContract](_poppinss_profiler.profileractioncontract.md)›*

▸ **profileAsync**<**T**>(`action`: string, `data?`: any, `cb?`: undefined | function): *Promise‹[ProfilerActionContract](_poppinss_profiler.profileractioncontract.md) | T›*

*Inherited from [ProfileContract](_poppinss_profiler.profilecontract.md).[profileAsync](_poppinss_profiler.profilecontract.md#profileasync)*

**Type parameters:**

▪ **T**: *any*

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |
`data?` | any |
`cb?` | undefined \| function |

**Returns:** *Promise‹[ProfilerActionContract](_poppinss_profiler.profileractioncontract.md) | T›*