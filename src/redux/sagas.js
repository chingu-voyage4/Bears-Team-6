// @flow

import { all } from 'redux-saga/effects'
import type { Saga } from '../types'
import { timestamp } from './timestamp/saga'

const allSagas = [
  timestamp,
]

export function* sagas(): Saga<void> {
  yield all(allSagas.reduce((xs, x) => xs.concat(x), []))
}
