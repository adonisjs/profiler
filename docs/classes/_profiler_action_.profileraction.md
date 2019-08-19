**[@poppinss/profiler](../README.md)**

[Globals](../README.md) › ["Profiler/Action"](../modules/_profiler_action_.md) › [ProfilerAction](_profiler_action_.profileraction.md)

# Class: ProfilerAction

Profiler action is used to profile the timing of a given action. An
action is always connected to a row, so it is recommended to
get the instance of action using [ProfilerRow](_profiler_row_.profilerrow.md).

## Hierarchy

* **ProfilerAction**

## Index

### Constructors

* [constructor](_profiler_action_.profileraction.md#constructor)

### Methods

* [end](_profiler_action_.profileraction.md#end)

## Constructors

###  constructor

\+ **new ProfilerAction**(`_label`: string, `_parentId?`: undefined | string, `_subscriber?`: [ProfilerSubscriber](../modules/_poppinss_profiler.md#profilersubscriber), `_data?`: any): *[ProfilerAction](_profiler_action_.profileraction.md)*

**Parameters:**

Name | Type |
------ | ------ |
`_label` | string |
`_parentId?` | undefined \| string |
`_subscriber?` | [ProfilerSubscriber](../modules/_poppinss_profiler.md#profilersubscriber) |
`_data?` | any |

**Returns:** *[ProfilerAction](_profiler_action_.profileraction.md)*

## Methods

###  end

▸ **end**(`data?`: any): *void*

End profiling action.

**Parameters:**

Name | Type |
------ | ------ |
`data?` | any |

**Returns:** *void*