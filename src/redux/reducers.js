// @flow

import { combineReducers } from 'redux'
import { timestamp } from './timestamp/reducer'

export const reducers = combineReducers({
  timestamp,
})
