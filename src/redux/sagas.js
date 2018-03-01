// @flow

import { all } from 'redux-saga/effects'

import { timestamp } from './timestamp/saga'

const allSagas = [
  timestamp,
]

const sagas = () => {}
