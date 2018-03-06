// @flow

import { Types } from './actions'
import type { Action } from './actions'

export type State = {
  +channelStatus: 'on' | 'off',
  +serverStatus: 'unknown' | 'on' | 'off',
}

const initialState: State = {
  channelStatus: 'off',
  serverStatus: 'unknown',
}

const channelOn = (state) => ({
  ...state,
  channelStatus: 'on',
})

const channelOff = (state) => ({
  ...state,
  channelStatus: 'off',
})

const serverOn = (state) => ({
  ...state,
  serverStatus: 'on',
})

const serverOff = (state) => ({
  ...state,
  serverStatus: 'off',
})

export const websocketProvider = (state?: State = initialState, action?: Action): State => {
  if (!action || !action.type) return initialState
  switch (action.type) {
    case Types.CHANNEL_ON:
      return channelOn(state)
    case Types.CHANNEL_OFF:
      return channelOff(state)
    case Types.SERVER_ON:
      return serverOn(state)
    case Types.SERVER_OFF:
      return serverOff(state)
    default:
      return state
  }
}
