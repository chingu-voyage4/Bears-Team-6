
// @flow

import axios from 'axios'
import config from '../../../application.config'
import { takeLatest, call, take, select, race, put } from 'redux-saga/effects'
import type { Saga, Socket, Channel } from '../../types'
import { ActionTypes, Creators } from '..'
import { quietLog, devLog } from '../../utils'
import { isValidRegistrationData } from './utils'

export function* submitRegistration(): Saga<void> {
  const { host } = config
  const { fullName, email, password } = yield select((state) => state.auth)
  try {
    // validate
    yield call(axios.post, `${host}/api/users`, { name: fullName, email, password })
    // put startChannel
  } catch (e) {
    quietLog(e)
    // redux put  warn user
  }
}


export const auth = [takeLatest(ActionTypes.SUBMIT_REGISTRATION, submitRegistration)]
