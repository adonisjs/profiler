/*
 * @adonisjs/profiler
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

import {
  ProfilerProcessor,
  ProfilerRowDataPacket,
  ProfilerActionDataPacket,
} from '@ioc:Adonis/Core/Profiler'

function createWorker (userFn: any) {
  return async function (packet: ProfilerActionDataPacket | ProfilerRowDataPacket) {
    try {
      await userFn(packet)
    } catch (error) {}
  }
}

export function processor (userFn: ProfilerProcessor) {
  // if (typeof (userFn) === 'function') {
  //   return userFn
  // }

  return createWorker(userFn)
}
