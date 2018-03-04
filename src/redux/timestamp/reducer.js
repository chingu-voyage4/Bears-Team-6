// @flow

import { ActionTypes } from '..'
import type { Action } from './actions'

type State = {
  +ts: number,
  +isSubscribed: boolean,
};

const initialState: State = {
  ts: 0,
  isSubscribed: false,
}

const setTimestamp = (state, { ts }) => ({ ...state, ts })

const subscribeTimestamp = (state) => ({ ...state, isSubscribed: true })

export const timestamp = (state: State = initialState, action: Action = {}): State => {
  switch (action.type) {
    case ActionTypes.SET_TIMESTAMP:
      return setTimestamp(state, action)
    case ActionTypes.SUBSCRIBE_TIMESTAMP:
      return subscribeTimestamp(state)
    default:
      return state
  }
}
