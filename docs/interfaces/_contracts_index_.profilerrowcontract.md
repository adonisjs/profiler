> **[@poppinss/profiler](../README.md)**

[Globals](../README.md) / ["Contracts/index"](../modules/_contracts_index_.md) / [ProfilerRowContract](_contracts_index_.profilerrowcontract.md) /

# Interface: ProfilerRowContract

Profiler row can spawn new actions or new rows

## Hierarchy

* **ProfilerRowContract**

## Implemented by

* [ProfilerRow](../classes/_profiler_row_.profilerrow.md)

## Index

### Properties

* [hasParent](_contracts_index_.profilerrowcontract.md#hasparent)

### Methods

* [child](_contracts_index_.profilerrowcontract.md#child)
* [end](_contracts_index_.profilerrowcontract.md#end)
* [profile](_contracts_index_.profilerrowcontract.md#profile)
* [profileAsync](_contracts_index_.profilerrowcontract.md#profileasync)

## Properties

###  hasParent

• **hasParent**: *boolean*

## Methods

###  child

▸ **child**(`label`: string, `data?`: any): *[ProfilerRowContract](_contracts_index_.profilerrowcontract.md)*

**Parameters:**

Name | Type |
------ | ------ |
`label` | string |
`data?` | any |

**Returns:** *[ProfilerRowContract](_contracts_index_.profilerrowcontract.md)*

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

▸ **profile**<**T**>(`action`: string, `data`: any, `cb`: function): *`T`*

**Type parameters:**

▪ **T**: *any*

**Parameters:**

▪ **action**: *string*

▪ **data**: *any*

▪ **cb**: *function*

▸ (): *`T`*

**Returns:** *`T`*

▸ **profile**(`action`: string, `data?`: any): *[ProfilerActionContract](_contracts_index_.profileractioncontract.md)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |
`data?` | any |

**Returns:** *[ProfilerActionContract](_contracts_index_.profileractioncontract.md)*

▸ **profile**<**T**>(`action`: string, `data?`: any, `cb?`: undefined | function): *[ProfilerActionContract](_contracts_index_.profileractioncontract.md) | `T`*

**Type parameters:**

▪ **T**: *any*

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |
`data?` | any |
`cb?` | undefined \| function |

**Returns:** *[ProfilerActionContract](_contracts_index_.profileractioncontract.md) | `T`*

___

###  profileAsync

▸ **profileAsync**<**T**>(`action`: string, `data`: any, `cb`: function): *`Promise<T>`*

**Type parameters:**

▪ **T**: *any*

**Parameters:**

▪ **action**: *string*

▪ **data**: *any*

▪ **cb**: *function*

▸ (): *`Promise<T>`*

**Returns:** *`Promise<T>`*

▸ **profileAsync**(`action`: string, `data?`: any): *`Promise<ProfilerActionContract>`*

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |
`data?` | any |

**Returns:** *`Promise<ProfilerActionContract>`*

▸ **profileAsync**<**T**>(`action`: string, `data?`: any, `cb?`: undefined | function): *`Promise<ProfilerActionContract | T>`*

**Type parameters:**

▪ **T**: *any*

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |
`data?` | any |
`cb?` | undefined \| function |

**Returns:** *`Promise<ProfilerActionContract | T>`*