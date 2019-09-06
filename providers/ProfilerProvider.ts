/**
 * @module @adonisjs/profiler
 */

/*
* @adonisjs/profiler
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import { IocContract } from '@adonisjs/fold'
import { Profiler } from '../src/Profiler'

export default class ProfilerProvider {
  constructor (protected $container: IocContract) {}

  protected $registerProfiler () {
    this.$container.singleton('Adonis/Core/Profiler', () => {
      const Config = this.$container.use('Adonis/Core/Config')
      return new Profiler(Config.get('app.profiler', {}))
    })
  }
}
