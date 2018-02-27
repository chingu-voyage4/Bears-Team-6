// @flow

import { Types } from './actions'

const initialState = {
  ts: '',
}

const setTimestamp = (state = initialState, { ts }) => ({ ts })

export const timestamp = (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_TIMESTAMP:
      return setTimestamp(state, action)
    default:
      return state
  }
}
