
// @flow

import axios from 'axios'
import { takeLatest, call, select, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
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
      if (res.status === 201 && res.data.message === 'Register Successful') {
        localStorage.setItem('token', res.data.token)
        yield put(Creators.registrationApproved())
        yield put(push('/timestamp'))
        yield put(Creators.startChannel())
      }
    } else {
      yield put(Creators.registrationRejected('You\'ve entered invalid registration data.'))
    }
  } catch (e) {
    const res = e.response
    const message = (res && res.data.message) || e.message || 'Server rejected your registration, sorry.'
    yield put(Creators.registrationRejected(message))
    quietLog(e)
  }
}

export function* submitLogin(): Saga<void> {
  const { host } = config
  const { email, password } = yield select((state) => state.auth)
  try {
    if (isValidLoginData(email, password)) {
      const res = yield call(axios.post, `${host}/api/auth/local-login`, { email, password })
      devLog(res)
      yield put(Creators.loginApproved())
      yield put(push('/timestamp'))
      yield put(Creators.startChannel())
    } else {
      yield put(Creators.loginRejected('You\'ve entered invalid login data.'))
    }
  } catch (e) {
    const res = e.response
    const message = (res && res.data.message) || e.message || 'Server rejected your registration, sorry.'
    yield put(Creators.loginRejected(message))
    quietLog(e)
  }
}

export function* logout(): Saga<void> {
  const { host } = config
  const res = yield call(axios.post, `${host}/api/auth/logout`)
  devLog(res)
  yield put(push('/login'))
}

// todo: validate email server on the fly when changing email

export const auth = [
  takeLatest(ActionTypes.SUBMIT_REGISTRATION, submitRegistration),
  takeLatest(ActionTypes.SUBMIT_LOGIN, submitLogin),
]
