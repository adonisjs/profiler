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

import { ProfilerRow } from './Row'
import { dummyRow, dummyAction } from './Dummy'
import { Profile } from './Profile'
import { ProfilerAction } from './Action'

import {
  ProfilerContract,
  ProfilerConfig,
  ProfilerSubscriber,
  ProfilerRowContract,
  ProfilerActionContract,
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
  public subscriber: ProfilerSubscriber

  /**
   * Profiler config
   */
  private _config: ProfilerConfig

  constructor (config: Partial<ProfilerConfig>) {
    super()

    this._config = Object.assign({
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
      ? new ProfilerAction(action, undefined, this.subscriber, data)
      : dummyAction
  }

  /**
   * Returns a boolean telling if profiler is enabled for
   * a given `action` or `label` or not?
   */
  public isEnabled (labelOrAction: string): boolean {
    if (!this._config.enabled || !this.subscriber) {
      return false
    }

    /**
     * If white list is empty, then check for blacklist
     */
    if (this._config.whitelist.length === 0) {
      return this._config.blacklist.indexOf(labelOrAction) === -1
    }

    /**
     * Otherwise check for whitelist only. We can check for `whitelist` and
     * `blacklist` both here, but not 100% sure.
     */
    return this._config.whitelist.indexOf(labelOrAction) > -1
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
  public subscribe (fn: ProfilerSubscriber): void {
    this.subscriber = fn
  }
}
