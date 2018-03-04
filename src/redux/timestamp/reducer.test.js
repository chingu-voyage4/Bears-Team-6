// @flow

import { Creators } from '..'
import { timestamp } from './reducer'

describe('timestamp', () => {
  const initialState = {
    ts: 0,
    isSubscribed: false,
  }

  it('should have initial state', () => {
    expect(timestamp()).toEqual(initialState)
  })

  it('subscribeTimestamp() should set "isSubscribed" true', () => {
    const expectedState = { ...initialState, isSubscribed: true }
    expect(timestamp(initialState, Creators.subscribeTimestamp())).toEqual(expectedState)
  })
  
  it('setTimestamp() should set "ts"', () => {
    const expectedState = { ...initialState, ts: 12345 }
    expect(timestamp(initialState, Creators.setTimestamp(12345))).toEqual(expectedState)
  })
})