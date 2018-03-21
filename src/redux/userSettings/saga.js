
// @flow

import * as R from 'ramda'
import { eventChannel } from 'redux-saga'
import { takeLatest, call, take, select, put } from 'redux-saga/effects'
import type { Saga, Channel } from '../../types'
import { ActionTypes, Creators } from '..'
import { quietLog } from '../../utils'

export const channelPositionChange = (): Channel =>
  eventChannel((emit) => {
    const handler = (data) => {
      emit(data)
    }
    const watchID = navigator.geolocation.watchPosition(handler)
    return () => {
      navigator.geolocation.clearWatch(watchID)
    }
  })

export function* watchPosition(): Saga<void> {
  const { isLocationSetManually } = yield select(R.prop('userSettings'))
  if (!isLocationSetManually && ('geolocation' in navigator)) {
    const channel = yield call(channelPositionChange)
    while (true) {
      const pos = yield take(channel)
      quietLog(pos.coords.latitude, pos.coords.longitude)
      yield put(Creators.setGeoposition(pos.coords.latitude, pos.coords.longitude))
    }
  } else {
    yield put(Creators.setGeoposition(35.652832, 139.839478))
  }
}

export const userSettings = [takeLatest(ActionTypes.WATCH_POSITION, watchPosition)]
