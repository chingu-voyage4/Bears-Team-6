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
      const res = yield call(axios.post, `${host}/api/auth/register`, {
        name: fullName,
        email,
        password,
      })
      devLog(res)
      if (res.status === 201 && res.data.message === 'Register Successful') {
        const { token } = res.data
        localStorage.setItem('token', token)
        yield put(Creators.registrationApproved(token))
        yield put(Creators.watchPosition())
        yield put(push('/timestamp'))
        yield put(Creators.startChannel())
      }
    } else {
      yield put(Creators.registrationRejected("You've entered invalid registration data."))
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
      const res = yield call(axios.post, `${host}/api/auth/login`, {
        email,
        password,
      })
      devLog(res)
      localStorage.setItem('token', res.data.token)
      yield put(Creators.loginApproved(res.data.token))
      yield put(Creators.watchPosition())
      yield put(push('/timestamp'))
      yield put(Creators.startChannel())
    } else {
      yield put(Creators.loginRejected("You've entered invalid login data."))
    }
  } catch (e) {
    const res = e.response
    const message = (res && res.data.message) || e.message || 'Server rejected your registration, sorry.'
    yield put(Creators.loginRejected(message))
    quietLog(e)
  }
}

export function* loadToken(): Saga<void> {
  const { host } = config
  const token = localStorage.getItem('token')
  if (!token) {
    yield put(Creators.invalidToken())
    return
  }
  try {
    const config = { headers: { Authorization: `Bearer ${token}` } }
    // fetches all users
    // should be a different route in the future
    const res = yield call(axios.get, `${host}/api/users/`, config)
    devLog(res)
    if (res.status === 200) {
      yield put(Creators.loginApproved(token))
      yield put(Creators.watchPosition())
      return
    } else if (res.status === 401) {
      // The token is invalid/expired
      localStorage.removeItem('token')
      yield put(Creators.invalidToken())
    }
    // todo: Notify there is a server error (the token isn't deleted)
    yield put(Creators.invalidToken())
  } catch (e) {
    devLog(e)
    // The token is invalid/expired
    yield put(Creators.invalidToken())
  }
}

export function* logout(): Saga<void> {
  console.log('hey')
  localStorage.removeItem('token')
  yield put(push('/login'))
}

// todo: validate email server on the fly when changing email

export const auth = [
  takeLatest(ActionTypes.SUBMIT_REGISTRATION, submitRegistration),
  takeLatest(ActionTypes.SUBMIT_LOGIN, submitLogin),
  takeLatest(ActionTypes.LOAD_TOKEN, loadToken),
  takeLatest(ActionTypes.LOGOUT, logout),
]
