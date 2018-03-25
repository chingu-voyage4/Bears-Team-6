// @flow

import * as R from 'ramda'
import axios from 'axios'
import { takeLatest, call, select, put } from 'redux-saga/effects'
import config from '../../../application.config'
import type { Saga } from '../../types'
import { ActionTypes, Creators } from '..'
import { devLog } from '../../utils'

export function* watchPosition(): Saga<void> {
  try {
    const { host } = config
    const token = yield select(R.path(['auth', 'token']))
    const authConfig = { headers: { Authorization: `Bearer ${token}` } }

    const userSettings = yield call(axios.get, `${host}/api/users/profile`, authConfig)
    const latitude = R.path(['data', 'geolocation', 'latitute'], userSettings)
    const longitude = R.path(['data', 'geolocation', 'longtitude'], userSettings)
    devLog('userSettings', { latitude, longitude })
    if (latitude && longitude) {
      /**
       * Geoposition is already set
       */
      devLog('Pos is already set')
      yield put(Creators.setGeopositionManual(latitude, longitude))
    } else {
      /**
       * Geoposition has not been set yet
       */
      devLog('Pos has not been set yet')
      const res = yield call(axios.get, 'http://freegeoip.net/json/')
      const { latitude, longitude } = res.data
      devLog('free geo ip', { latitude, longitude })
      const reqBody = {
        geolocation: {
          latitute: latitude,
          longtitude: longitude,
        },
      }
      yield call(axios.put, `${host}/api/users/profile`, reqBody, authConfig)
      yield put(Creators.setGeoposition(latitude, longitude))
    }
  } catch (e) {
    devLog(e)
  }
}

// TODO: when pos changes, post request.

export const userSettings = [takeLatest(ActionTypes.WATCH_POSITION, watchPosition)]
