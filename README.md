<div align="center">
  <img src="https://res.cloudinary.com/adonisjs/image/upload/q_100/v1564392111/adonis-banner_o9lunk.png" width="600px">
</div>

# Profiler
> Profiler to time actions in your code with context.

[![circleci-image]][circleci-url] [![npm-image]][npm-url] ![][typescript-image] [![license-image]][license-url]

Small and performant module to time functions in your Node.js code. The profilers comes in many shapes and have different scopes. For example: The [v8 profiler](https://nodejs.org/es/docs/guides/simple-profiling/) provides low level data around the event loop and ticks. However, this module is focused on providing high level insights for your application code such as:

- Time spent on executing SQL Queries.
- Time spent during a given Http request.
- and so on.

The main focus of this module is to tie all the profiling actions to a parent, so that you can visualize code performance in reference to a high level task. For example: AdonisJS can tie SQL queries, Redis calls to a given HTTP request

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of contents

- [Goals](#goals)
- [Data structure](#data-structure)
- [Rules](#rules)
- [Installation](#installation)
- [Processor](#processor)
- [White/blacklisting](#whiteblacklisting)
- [API Docs](#api-docs)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Goals
The goal of the module is to have negligible impact on the application performance and following decisions have been made for the same.

- Keep profiler data structures simple and flat in nature.
- Do not process data within the same process of the application and instead use worker nodes for that.

## Data structure

There are two different types of data nodes.

- **Rows**: A single row can contain one or more actions. Whenever you want to group multiple actions together, you must store them inside a row. Rows can also be nested.

    ```
    {
      id: string,
      type: 'row',
      label: string,
      timestamp: number,
      duration: [number, number],
      data: any,
      parent_id?: string,
    }
    ```

- **Actions**: As the name suggests, actions are individual profiler actions.  An action doesn't have an `id`, as they are never referenced by the other nodes.

    ```ts
    {
      type: 'action',
      label: string,
      timestamp: number,
      duration: [number, number],
      data: any,
      parent_id?: string,
    }
    ```

If you look at the data structures carefully, you will notice that each `action` and `row` has it's own single object and are not nested inside each other. We avoid nesting for performance reasons. Instead, we recommend data processing layer to build the nested tree using the `parent_id` attribute.

## Rules

- A `row` or `action` without `parent_id` is a top level **row/action**.
- A `row` or `action` whose parent data packet is missing is considered orphan. Orphan row/actions should eventually get a parent, unless there are bugs in the code.
- The `label` is super important and used for grouping actions of similar nature. So do not add dynamic data to the labels and instead use `data` object for that.

## Installation
Install the package from the npm registry as follows:

```sh
npm i @adonisjs/profiler

# yarn
yarn add @adonisjs/profiler
```

and then use it as follows

```ts
import { Profiler } from '@adonisjs/profiler/build/standalone'

const profiler = new Profiler({
  enabled: true,
  whitelist: [],
  blacklist: [],
})
```

Profile an action

```ts
const action = profiler.profile('find:route', { url: '/users/1' })
findRouteFunction()
action.end()
```

Once an action is finished, the profiler will notify the processor worker or function about the action and the time it took to complete the action.

## Processor
The profiling data is delivered to a processor function and then processor can decide the storage or representation of data.

```ts
profiler.process((packet) => {
  // write somewhere
})
```

or define path to a seperate file. In this case, a worker node will be created.

```ts
profiler.process('./profiler-processor-node')
```

You can only have one processor listening for profiler packets at a given time. This is done for the simplicitiy and performance, since we want the profiler to have minimum overhead to your applications.

## White/blacklisting
The scope of profiling should always trim down as your application get mature, in that scanerio, instead of removing profiler calls, you can blacklist or whitelist actions and they will result in noop. For example:

```ts
const profiler = new Profiler({
  enabled: true,
  whitelist: [],
  blacklist: ['find:route'],
})

const row = profile.create('http:request', { url: '/' })
row.profile('find:route', {}, () => {
  // Code to find route
})
```

Without changing anything in your code, the `find:route` action will have no impact. If you will blacklist a row label, then all of it's actions will be disabled as well.

## API Docs
Following are the autogenerated files via Typedoc

[circleci-image]: https://img.shields.io/circleci/project/github/adonisjs/profiler/master.svg?style=for-the-badge&logo=circleci
[circleci-url]: https://circleci.com/gh/adonisjs/profiler "circleci"

[typescript-image]: https://img.shields.io/badge/Typescript-294E80.svg?style=for-the-badge&logo=typescript
[typescript-url]:  "typescript"

[npm-image]: https://img.shields.io/npm/v/@adonisjs/profiler.svg?style=for-the-badge&logo=npm
[npm-url]: https://npmjs.org/package/@adonisjs/profiler "npm"

[license-image]: https://img.shields.io/npm/l/@adonisjs/profiler?color=blueviolet&style=for-the-badge
[license-url]: LICENSE.md "license"
