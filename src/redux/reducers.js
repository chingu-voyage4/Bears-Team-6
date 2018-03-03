// @flow

import { combineReducers } from 'redux'
import { timestamp } from './timestamp/reducer'
import { websocketProvider } from './websocketProvider/reducer'

export const reducers = combineReducers({
  timestamp,
  websocketProvider,
})
