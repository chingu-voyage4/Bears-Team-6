
// @flow

import * as R from 'ramda'
import { eventChannel } from 'redux-saga'
import { takeLatest, call, take, select, put } from 'redux-saga/effects'
import type { Saga, Channel } from '../../types'
import { ActionTypes, Creators } from '..'
import { quietLog, devLog } from '../../utils'

export const channelPositionChange = (): Channel =>
  eventChannel((emit) => {
    const handler = (data) => {
      emit(data)
    }
    const watchID = navigator.geolocation.watchPosition(handler)
    // navigator.geolocation.getCurrentPosition(handler)
    return () => {
      navigator.geolocation.clearWatch(watchID)
    }
  })

export function* watchPosition(): Saga<void> {
  const { isLocationSetManually } = yield select(R.prop('userSettings'))
  if (!isLocationSetManually && ('geolocation' in navigator)) {
    const channel = yield call(channelPositionChange)
    while (true) {
      devLog('before take')
      const pos = yield take(channel)
      devLog('after take')
      quietLog(pos.coords.latitude, pos.coords.longitude)
      yield put(Creators.setGeoposition(pos.coords.latitude, pos.coords.longitude))
    }
  } else {
    devLog('location is set manually or no geolocation is presented in browser')
  }
}

export const userSettings = [takeLatest(ActionTypes.WATCH_POSITION, watchPosition)]
