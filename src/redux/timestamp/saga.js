// @flow

import { eventChannel } from 'redux-saga'
import { takeLatest, call, take, select, race, put } from 'redux-saga/effects'
import type { Saga, Socket, Channel } from '../../types'
import { ActionTypes, Creators } from '..'
import { quietLog } from '../../utils'
import { isValidTimestamp } from './utils'

/**
 * Subscribe for socket.io event
 */
export const updateChannel = (socket: Socket): Channel =>
  eventChannel((emit) => {
    const handler = (data) => {
      emit(data)
    }
    socket.on('timestamp', handler)
    return () => {
      socket.off('timestamp', handler)
    }
  })

/**
 * Use eventChannel subscription to convert callbacks into redux interactions
 */
export function* listenTimestampUpdate(socket: Socket): Saga<void> {
  const channel = yield call(updateChannel, socket)
  while (true) {
    const ts = yield take(channel)
    if (isValidTimestamp(ts)) {
      yield put(Creators.setTimestamp(ts))
    }
  }
}

/**
 * Race between infinite loops and stoping conditions
 */
export function* workWithTimestamps({ socket }: { socket: Socket }): Saga<void> {
  try {
    while (true) {
      const isSubscribed = yield select((state) => state.timestamp.isSubscribed)
      if (!isSubscribed) yield take(ActionTypes.SUBSCRIBE_TIMESTAMP)
      yield race([
        call(listenTimestampUpdate, socket),
        take(ActionTypes.SERVER_OFF),
        // take(ActionTypes.UNSUBSCRIBE_TIMESTAMP),
        // when user leaves Timestamp subsystem, it will receive no stamps.
        // in that case also need to explicitly unsubscribe from namespace on backend (easy)
      ])
    }
  } catch (e) {
    quietLog(e)
  }
}

export const timestamp = [takeLatest(ActionTypes.SERVER_ON, workWithTimestamps)]
