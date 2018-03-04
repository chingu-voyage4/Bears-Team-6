// @flow

import { Creators } from '..'
import { websocketProvider } from './reducer'

describe('timestamp', () => {
  const initialState = {
    channelStatus: 'off',
    serverStatus: 'unknown',
  }
  
  it('should have initial state', () => {
    expect(websocketProvider()).toEqual(initialState)
  })

  it('channelOn() should set "channelStatus" on', () => {
    const expectedState = { ...initialState, channelStatus: 'on' }
    expect(websocketProvider(initialState, Creators.channelOn())).toEqual(expectedState)
  })

  it('channelOff() should set "channelStatus" off', () => {
    const expectedState = { ...initialState, channelStatus: 'off' }
    expect(websocketProvider(initialState, Creators.channelOff())).toEqual(expectedState)
  })

  it('serverOn() should set "serverStatus" on', () => {
    const expectedState = { ...initialState, serverStatus: 'on' }
    expect(websocketProvider(initialState, Creators.serverOn())).toEqual(expectedState)
  })
  
  it('serverOff() should set "serverStatus" off', () => {
    const expectedState = { ...initialState, serverStatus: 'off' }
    expect(websocketProvider(initialState, Creators.serverOff())).toEqual(expectedState)
  })
})