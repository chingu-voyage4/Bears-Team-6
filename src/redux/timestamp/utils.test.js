// @flow

import { isValidTimestamp } from './utils'

describe('isValidTimestamp', () => {
  it('should reject wrong values', () => {
    expect(isValidTimestamp()).toEqual(false)
    expect(isValidTimestamp(undefined)).toEqual(false)
    expect(isValidTimestamp(false)).toEqual(false)
    expect(isValidTimestamp('12345')).toEqual(false)
  })

  it('should reject wrong numbers', () => {
    expect(isValidTimestamp(Infinity)).toEqual(false)
    expect(isValidTimestamp(-1)).toEqual(false)
    expect(isValidTimestamp(0)).toEqual(false)
  })

  it('should accept right numbers', () => {
    expect(isValidTimestamp(50)).toEqual(true)
    expect(isValidTimestamp(12345678)).toEqual(true)
    expect(isValidTimestamp(23452345626)).toEqual(true)
  })
})