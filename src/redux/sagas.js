// @flow
import { all } from 'redux-saga/effects'
import type { Saga } from '../types'
import { timestamp } from './timestamp/saga'
import { websocketProvider } from './websocketProvider/saga'
import { auth } from './auth/saga'
import { userSettings } from './userSettings/saga'

const allSagas = [timestamp, websocketProvider, auth, userSettings]

export function* sagas(): Saga<void> {
  yield all(allSagas.reduce((xs, x) => xs.concat(x), []))
}
