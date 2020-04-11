[@adonisjs/profiler](../README.md) › ["src/Action/index"](../modules/_src_action_index_.md) › [ProfilerAction](_src_action_index_.profileraction.md)

# Class: ProfilerAction

Profiler action is used to time the function. A connection can be
connected to a row or can be a global action.

## Hierarchy

* **ProfilerAction**

## Index

### Constructors

* [constructor](_src_action_index_.profileraction.md#constructor)

### Methods

* [end](_src_action_index_.profileraction.md#end)

## Constructors

###  constructor

\+ **new ProfilerAction**(`label`: string, `processor`: Exclude‹ProfilerProcessor, string›, `parentId?`: undefined | string, `data?`: any): *[ProfilerAction](_src_action_index_.profileraction.md)*

**Parameters:**

Name | Type |
------ | ------ |
`label` | string |
`processor` | Exclude‹ProfilerProcessor, string› |
`parentId?` | undefined &#124; string |
`data?` | any |

**Returns:** *[ProfilerAction](_src_action_index_.profileraction.md)*

## Methods

###  end

▸ **end**(`data?`: any): *void*

End profiling action.

**Parameters:**

Name | Type |
------ | ------ |
`data?` | any |

**Returns:** *void*
