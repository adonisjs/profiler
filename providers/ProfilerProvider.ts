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
import { LoggerContract } from '@ioc:Adonis/Core/Logger'

import { Profiler } from '../src/Profiler'

export default class ProfilerProvider {
  constructor (protected $container: IocContract) {}

  public register () {
    this.$container.singleton('Adonis/Core/Profiler', () => {
      const config = this.$container.use('Adonis/Core/Config').get('app.profiler', {})
      const logger = this.$container.use<LoggerContract>('Adonis/Core/Logger')
      const appRoot = this.$container.use('Adonis/Core/Application').appRoot as string
      return new Profiler(appRoot, logger, config)
    })
  }
}
