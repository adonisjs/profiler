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

import { Exception } from '@poppinss/utils'
import {
  ProfilerActionDataPacket,
  ProfilerSubscriber,
} from '@ioc:Adonis/Core/Profiler'

/**
 * Profiler action is used to profile the timing of a given action. An
 * action is always connected to a row, so it is recommended to
 * get the instance of action using [[ProfilerRow]].
 */
export class ProfilerAction {
  private _start = process.hrtime()
  private _timestamp = Date.now()
  private _ended = false

  constructor (
    private _label: string,
    private _parentId?: string,
    private _subscriber?: ProfilerSubscriber,
    private _data?: any,
  ) {}

  /**
   * Make packet for the action
   */
  private _makePacket (): ProfilerActionDataPacket {
    return {
      parent_id: this._parentId,
      type: 'action',
      label: this._label,
      timestamp: this._timestamp,
      duration: process.hrtime(this._start),
      data: this._data || {},
    }
  }

  /**
   * End profiling action.
   */
  public end (data?: any) {
    /**
     * Raise error when end is called twice. Their are high probabilities of
     * end getting called twice
     */
    if (this._ended) {
      throw new Exception('attempt to end profiler action twice')
    }

    /**
     * Set the flag
     */
    this._ended = true

    /**
     * Merge inline data if defined
     */
    if (data) {
      this._data = Object.assign({}, this._data, data)
    }

    this._subscriber!(this._makePacket())
  }
}
