/*
 * @adonisjs/profiler
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

import { ProfilerActionDataPacket, ProfilerRowDataPacket, ProfilerProcessor } from '@ioc:Adonis/Core/Profiler'

function createWorker (_filename: string) {
  return function (_: ProfilerActionDataPacket | ProfilerRowDataPacket) {
  }
}

export function processor (userFn: ProfilerProcessor) {
  if (typeof (userFn) === 'function') {
    return userFn
  }

  return createWorker(userFn)
}
