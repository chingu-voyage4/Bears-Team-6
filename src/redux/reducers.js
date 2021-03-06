// @flow

import { combineReducers } from 'redux'
import { timestamp } from './timestamp/reducer'
import { websocketProvider } from './websocketProvider/reducer'
import { auth } from './auth/reducer'

export const reducers = combineReducers({
  timestamp,
  websocketProvider,
  auth,
})
