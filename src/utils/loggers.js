// @flow

/**
 * Should be used instead of console.log statements
 * * can be deleted anytime when found
 */
export const devLog = (...args: any[]) => console.log(...args) // eslint-disable-line no-console

/**
 * Should be used to log errors, but visible only for the team
 * * should be logged remotely
 * * should never be deleted!
 */
export const quietLog = (...args: any[]) => console.log(...args) // eslint-disable-line no-console

/**
 * Display user-readable notification (+ notify the team)
 * * should be logged remotely
 * * should never be deleted!
 */
export const errorWarning = (title: string, text?: string = '') =>
  console.log(title, text) // eslint-disable-line no-console
