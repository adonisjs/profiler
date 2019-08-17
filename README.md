<div align="center">
  <img src="https://res.cloudinary.com/adonisjs/image/upload/q_100/v1557762307/poppinss_iftxlt.jpg" width="600px">
</div>

# Profiler
> Profiler to time actions in your code with context.

[![circleci-image]][circleci-url] [![npm-image]][npm-url] ![][typescript-image] [![license-image]][license-url]

Profiler is a tiny library to time functions in your Node.js code with context, so that you can present related actions after they have been completed.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of contents

- [Usage](#usage)
- [Subscriber](#subscriber)
- [White/blacklisting](#whiteblacklisting)
- [Maintainers](#maintainers)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Usage
Install the package from the npm registry as follows:

```sh
npm i @poppinss/profiler

# yarn
yarn add @poppinss/profiler
```

and then use it as follows

```ts
import { Profiler } from '@poppinss/profiler'

const profiler = new Profiler({
  enabled: true,
  whitelist: [],
  blacklist: [],
})
```

You will need only one instance of the profiler in your entire application and then you will work with `rows` and `actions` to time function calls.

## Subscriber
The profiling data is delivered to a subscriber function and then subscriber can decide the storage or representation of data.

```ts
profiler.subscribe((packet) => {
  // write somewhere
})
```

You can only have one subscriber listening for profiler packets at a given time. This is done for the simplicitiy and performance, since we want the profiler to have minimum overhead to your applications.

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

## Maintainers
[Harminder virk](https://github.com/thetutlage)

[circleci-image]: https://img.shields.io/circleci/project/github/poppinss/profiler/master.svg?style=for-the-badge&logo=circleci
[circleci-url]: https://circleci.com/gh/poppinss/profiler "circleci"

[npm-image]: https://img.shields.io/npm/v/@poppinss/profiler.svg?style=for-the-badge&logo=npm
[npm-url]: https://npmjs.org/package/@poppinss/profiler "npm"

[typescript-image]: https://img.shields.io/badge/Typescript-294E80.svg?style=for-the-badge&logo=typescript

[license-url]: LICENSE.md
[license-image]: https://img.shields.io/aur/license/pac.svg?style=for-the-badge
