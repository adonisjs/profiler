/*
 * @adonisjs/events
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import test from 'japa'
import { join } from 'path'
import { Registrar, Ioc } from '@adonisjs/fold'
import { Config } from '@adonisjs/config/build/standalone'
import { Logger } from '@adonisjs/logger/build/standalone'
import { Application } from '@adonisjs/application/build/standalone'

import { Profiler } from '../src/Profiler'

test.group('Profiler Provider', () => {
	test('register profiler provider', async (assert) => {
		const ioc = new Ioc()

		ioc.bind('Adonis/Core/Config', () => {
			return new Config({})
		})

		ioc.bind('Adonis/Core/Logger', () => {
			return new Logger({ enabled: true, level: 'info', name: 'adonisjs' })
		})

		ioc.bind('Adonis/Core/Application', () => {
			return new Application(__dirname, ioc, {}, {})
		})

		const registrar = new Registrar(ioc, join(__dirname, '..'))
		await registrar.useProviders(['./providers/ProfilerProvider']).registerAndBoot()

		assert.instanceOf(ioc.use('Adonis/Core/Profiler'), Profiler)
		assert.deepEqual(ioc.use('Adonis/Core/Profiler'), ioc.use('Adonis/Core/Profiler'))
	})
})
