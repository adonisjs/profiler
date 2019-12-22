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

/// <reference path="../../adonis-typings/profiler.ts" />

import { Profile } from './Profile'
import { ProfilerRow } from './Row'
import { processor } from './Processor'
import { ProfilerAction } from './Action'
import { dummyRow, dummyAction } from './Dummy'

import {
  ProfilerContract,
  ProfilerProcessor,
  ProfilerRowContract,
  ProfilerActionContract,
  ProfilerConfigContract,
} from '@ioc:Adonis/Core/Profiler'

/**
 * Profiler exposes the public interface to create new profiling
 * rows and actions. In case of blacklisted actions, dummy
 * implementations are returned, resulting in noop.
 */
export class Profiler extends Profile implements ProfilerContract {
  /**
   * Subscribe to listen for events
   */
  public processor: Exclude<ProfilerProcessor, string>

  /**
   * Profiler config
   */
  private config: ProfilerConfigContract

  constructor (config: Partial<ProfilerConfigContract>) {
    super()

    this.config = Object.assign({
      enabled: true,
      whitelist: [],
      blacklist: [],
    }, config)
  }

  /**
   * Returns the action to be used for timing functions
   */
  protected $getAction (action: string, data?: any): ProfilerActionContract {
    return this.isEnabled(action)
      ? new ProfilerAction(action, this.processor!, undefined, data)
      : dummyAction
  }

  /**
   * Returns a boolean telling if profiler is enabled for
   * a given `action` or `label` or not?
   */
  public isEnabled (labelOrAction: string): boolean {
    if (!this.config.enabled || !this.processor) {
      return false
    }

    /**
     * If white list is empty, then check for blacklist
     */
    if (this.config.whitelist.length === 0) {
      return this.config.blacklist.indexOf(labelOrAction) === -1
    }

    /**
     * Otherwise check for whitelist only. We can check for `whitelist` and
     * `blacklist` both here, but not 100% sure.
     */
    return this.config.whitelist.indexOf(labelOrAction) > -1
  }

  /**
   * Creates a new profiler row for a given action. If action is not enabled
   * then a copy of [[this.dummyRow]] is returned, which has the same
   * public API with all actions to a noop.
   */
  public create (label: string, data?: any): ProfilerRowContract {
    if (this.isEnabled(label)) {
      return new ProfilerRow(label, this, data)
    }

    return dummyRow
  }

  /**
   * Define subscriber for the profiler. Only one subscriber can be defined
   * at max. Redifying the subscriber will override the existing subscriber
   */
  public process (fn: ProfilerProcessor): void {
    this.processor = processor(fn)
  }
}
