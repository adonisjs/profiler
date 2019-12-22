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

declare module '@ioc:Adonis/Core/Profiler' {
  /**
   * Shape of data packet for a single action
   */
  export type ProfilerActionDataPacket = {
    type: 'action',
    label: string,
    timestamp: number,
    duration: [number, number],
    data: any,
    parent_id?: string,
  }

  /**
   * Shape of data packet for a single row
   */
  export type ProfilerRowDataPacket = {
    id: string,
    type: 'row',
    label: string,
    timestamp: number,
    duration: [number, number],
    data: any,
    parent_id?: string,
  }

  /**
   * The processor action or worker node that listens for the logs
   */
  export type ProfilerProcessor = string | ((log: ProfilerActionDataPacket | ProfilerRowDataPacket) => void)

  /**
   * Profiler action just has one method to mark
   * the action as `done`.
   */
  export interface ProfilerActionContract {
    end (data?: any): void
  }

  /**
   * Exposes the API to time functions
   */
  export interface ProfileContract {
    profile<T extends any> (action: string, data: any, cb: (() => T)): T,
    profile (action: string, data?: any): ProfilerActionContract,
    profile<T extends any> (action: string, data?: any, cb?: (() => T)): ProfilerActionContract | T,

    profileAsync<T extends any> (action: string, data: any, cb: (() => Promise<T>)): Promise<T>,
    profileAsync (action: string, data?: any): Promise<ProfilerActionContract>,
    profileAsync<T extends any> (
      action: string,
      data?: any,
      cb?: (() => Promise<T>),
    ): Promise<ProfilerActionContract | T>,
  }

  /**
   * Profiler row can spawn new actions or new rows
   */
  export interface ProfilerRowContract extends ProfileContract {
    hasParent: boolean,
    child (label: string, data?: any): ProfilerRowContract,

    end (data?: any): void,
  }

  /**
   * Main profiler
   */
  export interface ProfilerContract extends ProfileContract {
    processor?: Exclude<ProfilerProcessor, string>,
    isEnabled (labelOrAction: string): boolean,
    create (label: string, data?: any): ProfilerRowContract,
    process (fn: ProfilerProcessor): void
  }

  /**
   * Profiler config
   */
  export type ProfilerConfigContract = {
    enabled: boolean,
    whitelist: string[],
    blacklist: string[],
  }

  const Profiler: ProfilerContract
  export default Profiler
}
