// @flow

import * as R from 'ramda'
import axios from 'axios'
import { takeLatest, call, select, put } from 'redux-saga/effects'
import type { Saga } from '../../types'
import { ActionTypes, Creators } from '..'
import { devLog } from '../../utils'

export function* watchPosition(): Saga<void> {
  devLog('STARTED WATCH')
  const { isLocationSetManually } = yield select(R.prop('userSettings'))
  if (!isLocationSetManually) {
    const res = yield call(axios.get, 'http://freegeoip.net/json/')
    yield put(Creators.setGeoposition(res.data.latitude, res.data.longitude))
  } else {
    devLog('location is set manually or no geolocation is presented in browser')
  }
}

// todo when pos changes, post request.
// localstorage: only after backend accepted (after post req)

export const userSettings = [takeLatest(ActionTypes.WATCH_POSITION, watchPosition)]
