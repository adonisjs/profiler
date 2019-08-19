/**
 * @module @poppinss/profiler
 */

/*
 * @poppinss/profiler
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import * as cuid from 'cuid'
import { Exception } from '@poppinss/utils'

import { Profile } from './Profile'
import { ProfilerAction } from './Action'
import { dummyAction, dummyRow } from './Dummy'

import {
  ProfilerContract,
  ProfilerRowContract,
  ProfilerRowDataPacket,
  ProfilerActionContract,
} from '../Contracts'

/**
 * Profiler row class is used to group profiling actions together. Any
 * number of nested rows can be created.
 */
export class ProfilerRow extends Profile implements ProfilerRowContract {
  private _id = cuid()
  private _timestamp = Date.now()
  private _start = process.hrtime()
  private _ended = false

  constructor (
    private _label: string,
    private _manager: ProfilerContract,
    private _data?: any,
    private _parentId?: string,
  ) {
    super()
  }

  /**
   * Makes the log packet for the log row
   */
  private _makeLogPacket (): ProfilerRowDataPacket {
    return {
      id: this._id,
      type: 'row',
      label: this._label,
      parent_id: this._parentId,
      timestamp: this._timestamp,
      data: this._data || {},
      duration: process.hrtime(this._start),
    }
  }

  /**
   * Returns the action instance to be used by the [[Profile]] class
   */
  protected $getAction (action: string, data?: any): ProfilerActionContract {
    if (this._ended) {
      throw new Exception('cannot profile after parent row has been ended')
    }

    return this._manager.isEnabled(action)
      ? new ProfilerAction(action, this._id, this._manager.subscriber, data)
      : dummyAction
  }

  /**
   * Returns a boolean telling if a parent exists
   */
  public get hasParent () {
    return !!this._parentId
  }

  /**
   * End the profiler instance by emitting end packet. After
   * this all profiling calls will be considered overflows
   */
  public end (data?: any) {
    /**
     * Raise error when end has been called already
     */
    if (this._ended) {
      throw new Exception('attempt to end profiler row twice')
    }

    /**
     * Setting end to true to avoid multiple calls
     */
    this._ended = true

    /**
     * Merge data
     */
    if (data) {
      this._data = Object.assign({}, this._data, data)
    }

    /**
     * Invoke subscriber
     */
    this._manager.subscriber!(this._makeLogPacket())
  }

  /**
   * Get a new child logger. Child logger will emit a new row
   * in the events timeline
   */
  public child (label: string, data?: any): ProfilerRowContract {
    if (this._manager.isEnabled(label)) {
      return new ProfilerRow(label, this._manager, data, this._id)
    }

    return dummyRow
  }
}
