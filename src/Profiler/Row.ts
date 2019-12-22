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

import cuid from 'cuid'
import { Exception } from '@poppinss/utils'

import { Profile } from './Profile'
import { ProfilerAction } from './Action'
import { dummyAction, dummyRow } from './Dummy'

import {
  ProfilerContract,
  ProfilerRowContract,
  ProfilerRowDataPacket,
  ProfilerActionContract,
} from '@ioc:Adonis/Core/Profiler'

/**
 * Profiler row class is used to group profiling actions together. Any
 * number of nested rows can be created.
 */
export class ProfilerRow extends Profile implements ProfilerRowContract {
  private id = cuid()
  private timestamp = Date.now()
  private start = process.hrtime()
  private ended = false

  constructor (
    private label: string,
    private manager: ProfilerContract,
    private data?: any,
    private parentId?: string,
  ) {
    super()
  }

  /**
   * Makes the log packet for the log row
   */
  private makeLogPacket (): ProfilerRowDataPacket {
    return {
      id: this.id,
      type: 'row',
      label: this.label,
      parent_id: this.parentId,
      timestamp: this.timestamp,
      data: this.data || {},
      duration: process.hrtime(this.start),
    }
  }

  /**
   * Returns the action instance to be used by the [[Profile]] class
   */
  protected $getAction (action: string, data?: any): ProfilerActionContract {
    if (this.ended) {
      throw new Exception('cannot profile after parent row has been ended')
    }

    return this.manager.isEnabled(action)
      ? new ProfilerAction(action, this.manager.processor!, this.id, data)
      : dummyAction
  }

  /**
   * Returns a boolean telling if a parent exists
   */
  public get hasParent () {
    return !!this.parentId
  }

  /**
   * End the profiler instance by emitting end packet. After
   * this all profiling calls will be considered overflows
   */
  public end (data?: any) {
    /**
     * Raise error when end has been called already
     */
    if (this.ended) {
      throw new Exception('attempt to end profiler row twice')
    }

    /**
     * Setting end to true to avoid multiple calls
     */
    this.ended = true

    /**
     * Merge data
     */
    if (data) {
      this.data = Object.assign({}, this.data, data)
    }

    /**
     * Invoke subscriber
     */
    this.manager.processor!(this.makeLogPacket())
  }

  /**
   * Get a new child logger. Child logger will emit a new row
   * in the events timeline
   */
  public create (label: string, data?: any): ProfilerRowContract {
    if (this.manager.isEnabled(label)) {
      return new ProfilerRow(label, this.manager, data, this.id)
    }

    return dummyRow
  }
}
