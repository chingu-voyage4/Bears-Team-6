// @flow

import io from 'socket.io-client'
import { take, call, put, fork, race, cancelled, takeLatest } from 'redux-saga/effects'
import { quietLog } from '../../utils'
import config from '../../../application.config'
import { ActionTypes, Creators } from '..'

import type { Saga, Socket } from '../../types'

/**
 * Subscribes for Connect event on channel
 */
const subscribeConnect = () => {
  const { host } = config
  const socket = io(`${host}/websockets`)
  return new Promise((resolve, reject) => {
    socket.on('connect', () => {
      resolve(socket)
    })
    socket.on('error', (e) => {
      reject(e)
    })
  })
}

/**
 * Subscribes for Disconnect event on channel
 */
const subscribeDisconnect = (socket: Socket) =>
  new Promise((resolve) => {
    socket.on('disconnect', () => {
      resolve(socket)
    })
  })

/**
 * Dispatches an action when Disconnect happens
 */
function* listenDisconnectSaga(socket: Socket): Saga<void> {
  while (true) {
    yield call(subscribeDisconnect, socket)
    yield put(Creators.serverOff())
  }
}

/**
 * Subscribes for Reconnect event on channel
 */
const subscribeReconnect = (socket: Socket) =>
  new Promise((resolve) => {
    socket.on('reconnect', () => {
      resolve(socket)
    })
  })

/**
 * Dispatches an action when Reconnect happens
 */
function* listenConnectSaga(socket: Socket): Saga<void> {
  while (true) {
    yield call(subscribeReconnect, socket)
    yield put(Creators.serverOn(socket))
  }
}

/**
 * Creates several "loops", that listen to channel events
 * Last one is working only if channel and server are working
 */
export function* listenServerSaga(): Saga<void> {
  try {
    yield put(Creators.channelOn())
    yield put(Creators.serverOff())
    const socket = yield call(subscribeConnect)
    yield fork(listenDisconnectSaga, socket)
    yield fork(listenConnectSaga, socket)
    yield put(Creators.serverOn(socket)) // let every saga use same socket. important
  } catch (e) {
    quietLog(e)
  } finally {
    if (yield cancelled()) {
      yield put(Creators.channelOff())
    }
  }
}

export function* startChannel(): Saga<void> {
  yield race({
    task: call(listenServerSaga),
    cancel: take(ActionTypes.STOP_CHANNEL),
  })
}

export const websocketProvider = [takeLatest(ActionTypes.START_CHANNEL, startChannel)]
