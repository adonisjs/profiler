/*
 * @adonisjs/profiler
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Exception } from '@poppinss/utils'

export class InvalidProcessorException extends Exception {
	/**
	 * Raised when the profiler worker doesn't exports the process
	 * function
	 */
	public static missingWorkerMethod(workerPath: string) {
		const error = new this(
			`Profiler worker file "${workerPath}" must export a "process" function`,
			500,
			'E_INVALID_PROFILER_PROCESSOR'
		)

		error.description = `
			Here's an example of how the profiler worker code should look like

			\`\`\`
			import { ProfilerAction, ProfilerRow } from '@ioc:Adonis/Core/Profiler'
			export function process (log: ProfilerAction | ProfilerRow) {
			}
			\`\`\`
		`

		return error
	}
}
