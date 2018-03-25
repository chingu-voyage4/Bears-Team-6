// @flow

import * as R from 'ramda'
import axios from 'axios'
import { takeLatest, call, select, put } from 'redux-saga/effects'
import config from '../../../application.config'
import type { Saga } from '../../types'
import { ActionTypes, Creators } from '..'
import { quietLog } from '../../utils'
import type { SET_GEOPOSITION_MANUAL } from './actions'

/**
 * Will read geoposition from backend.
 * * If not set, will get current geoposition by IP address (universal approach),
 * * but will not save it to backend until user performs an action:
 * * (fix geoposition manually or use geoposition in some interests)
 */
export function* watchPosition(): Saga<void> {
  try {
    const { host } = config
    const token = yield select(R.path(['auth', 'token']))
    const authConfig = { headers: { Authorization: `Bearer ${token}` } }
    const userProfile = yield call(axios.get, `${host}/api/users/profile`, authConfig)
    const latitude = R.path(['data', 'geolocation', 'latitude'], userProfile)
    const longitude = R.path(['data', 'geolocation', 'longitude'], userProfile)
    if (latitude && longitude) {
      /**
       * Geoposition is already set
       */
      yield put(Creators.setGeopositionManual(latitude, longitude))
    } else {
      /**
       * Geoposition has not been set yet
       */
      const res = yield call(axios.get, 'http://freegeoip.net/json/')
      const { latitude, longitude } = res.data
      yield put(Creators.setGeoposition(latitude, longitude))
    }
  } catch (e) {
    quietLog(e)
  }
}

/**
 * Will look for manual changes in geoposition and save it to backend when user performs an action:
 * * (fix geoposition manually or use geoposition in some interests)
 */
export function* saveGeopositionOnBackend({ latitude, longitude }: SET_GEOPOSITION_MANUAL): Saga<void> {
  try {
    const { host } = config
    const token = yield select(R.path(['auth', 'token']))
    const authConfig = { headers: { Authorization: `Bearer ${token}` } }
    const reqBody = {
      geolocation: {
        latitude,
        longitude,
      },
    }
    yield call(axios.put, `${host}/api/users/profile`, reqBody, authConfig)
  } catch (e) {
    quietLog(e)
  }
}

export const userSettings = [
  takeLatest(ActionTypes.WATCH_POSITION, watchPosition),
  takeLatest(ActionTypes.SET_GEOPOSITION_MANUAL, saveGeopositionOnBackend),
]
