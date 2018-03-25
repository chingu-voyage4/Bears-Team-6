// @flow

import { isValidEmail, isValidPassword } from './utils'

describe('isValidEmail', () => {
  it('should reject non-strings', () => {
    // $ValidationTest
    expect(isValidEmail(2)).toBe(false)
    // $ValidationTest
    expect(isValidEmail(null)).toBe(false)
    // $ValidationTest
    expect(isValidEmail(undefined)).toBe(false)
  })

  it('should reject non-email strings', () => {
    expect(isValidEmail('adsgwsdfgsdf')).toBe(false)
    expect(isValidEmail('me@')).toBe(false)
    expect(isValidEmail('@example.com')).toBe(false)
    expect(isValidEmail('me.@example.com')).toBe(false)
    expect(isValidEmail('.me@example.com')).toBe(false)
    expect(isValidEmail('me@example..com')).toBe(false)
    expect(isValidEmail('me.example@com')).toBe(false)
    expect(isValidEmail('me\\@example.com')).toBe(false)
  })

  it('should accept email strings', () => {
    expect(isValidEmail('lalala@gmail.com')).toBe(true)
    expect(isValidEmail('yeah@outlook.com')).toBe(true)
  })
})

describe('isValidPassword', () => {
  it('should reject non-strings', () => {
    // $ValidationTest
    expect(isValidPassword(2)).toBe(false) //eslint-disable-line 
    // $ValidationTest
    expect(isValidPassword(null)).toBe(false)
    // $ValidationTest
    expect(isValidPassword(undefined)).toBe(false)
  })

  it('should reject short strings', () => {
    expect(isValidPassword('123456789')).toBe(false)
  })

  it('should accept password strings', () => {
    expect(isValidPassword('01234567890')).toBe(true)
    expect(isValidPassword('adsflkjsdhfvp;kosudfhvpkj')).toBe(true)
  })
})
