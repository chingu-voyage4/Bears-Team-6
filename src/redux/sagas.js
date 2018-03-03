// @flow
import { all } from 'redux-saga/effects'
import type { Saga } from '../types'
import { timestamp } from './timestamp/saga'
import { websocketProvider } from './websocketProvider/saga'

const allSagas = [
  timestamp,
  websocketProvider,
]

export function* sagas(): Saga<void> {
  yield all(allSagas.reduce((xs, x) => xs.concat(x), []))
}
