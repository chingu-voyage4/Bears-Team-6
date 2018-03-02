
// @flow
import { takeLatest, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import type { Saga } from '../../types'
import { Types } from './actions'

function* subscribeTimestamp(route): Saga<void> {
  yield call(delay, 777)
}

export const timestamp = [
  takeLatest(Types.SUBSCRIBE_TIMESTAMP, subscribeTimestamp),
]
