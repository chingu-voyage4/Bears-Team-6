// @flow

import { Types } from './actions'
import type { Action } from './actions'

type State = {
  ts: number,
};

const initialState: State = {
  ts: 0,
}

const setTimestamp = (state = initialState, { ts }) => ({ ...state, ts })

export const timestamp = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case Types.SET_TIMESTAMP:
      return setTimestamp(state, action)
    case Types.SUBSCRIBE_TIMESTAMP:
      break
    default:
      return state
  }
}
