[@adonisjs/profiler](../README.md) › ["src/Profiler/Action"](../modules/_src_profiler_action_.md) › [ProfilerAction](_src_profiler_action_.profileraction.md)

# Class: ProfilerAction

Profiler action is used to profile the timing of a given action. An
action is always connected to a row, so it is recommended to
get the instance of action using [ProfilerRow](_src_profiler_row_.profilerrow.md).

## Hierarchy

* **ProfilerAction**

## Index

### Constructors

* [constructor](_src_profiler_action_.profileraction.md#constructor)

### Methods

* [end](_src_profiler_action_.profileraction.md#end)

## Constructors

###  constructor

\+ **new ProfilerAction**(`label`: string, `processor`: Exclude‹ProfilerProcessor, string›, `parentId?`: undefined | string, `data?`: any): *[ProfilerAction](_src_profiler_action_.profileraction.md)*

**Parameters:**

Name | Type |
------ | ------ |
`label` | string |
`processor` | Exclude‹ProfilerProcessor, string› |
`parentId?` | undefined &#124; string |
`data?` | any |

**Returns:** *[ProfilerAction](_src_profiler_action_.profileraction.md)*

## Methods

###  end

▸ **end**(`data?`: any): *void*

End profiling action.

**Parameters:**

Name | Type |
------ | ------ |
`data?` | any |

**Returns:** *void*
