
// @flow

import axios from 'axios'
import { takeLatest, call, select, put } from 'redux-saga/effects'
import config from '../../../application.config'
import type { Saga } from '../../types'
import { ActionTypes, Creators } from '..'
import { quietLog, devLog } from '../../utils'
import { isValidRegistrationData, isValidLoginData } from './utils'

export function* submitRegistration(): Saga<void> {
  const { host } = config
  const { fullName, email, password } = yield select((state) => state.auth)
  devLog('trying to register')
  try {
    if (isValidRegistrationData(fullName, email, password)) {
      const res = yield call(axios.post, `${host}/api/auth/register`, { name: fullName, email, password })
      devLog(res)
      yield put(Creators.registrationApproved('Success!')) // instead should navigate to timestamp
      yield put(Creators.startChannel())
    } else {
      yield put(Creators.registrationRejected('You\'ve entered invalid registration data.'))
    }
  } catch (e) {
    yield put(Creators.registrationRejected('Server rejected your registration, sorry.'))
    quietLog(e)
  }
}

export function* submitLogin(): Saga<void> {
  const { host } = config
  const { email, password } = yield select((state) => state.auth)
  try {
    if (isValidLoginData(email, password)) {
      const res = yield call(axios.post, `${host}/api/auth/login`, { email, password })
      devLog(res)
      yield put(Creators.loginApproved('Success!')) // instead should navigate to timestamp
      yield put(Creators.startChannel())
    } else {
      yield put(Creators.loginRejected('You\'ve entered invalid login data.'))
    }
  } catch (e) {
    yield put(Creators.loginRejected('Server rejected your login, sorry.'))
    quietLog(e)
  }
}

// todo: validate email server on the fly when changing email

export const auth = [
  takeLatest(ActionTypes.SUBMIT_REGISTRATION, submitRegistration),
  takeLatest(ActionTypes.SUBMIT_LOGIN, submitLogin),
]
