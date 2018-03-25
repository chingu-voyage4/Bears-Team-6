// @flow

import type { Socket } from '../../types'

export const Types = {
  START_CHANNEL: 'START_CHANNEL',
  STOP_CHANNEL: 'STOP_CHANNEL',
  CHANNEL_ON: 'CHANNEL_ON',
  CHANNEL_OFF: 'CHANNEL_OFF',
  SERVER_ON: 'SERVER_ON',
  SERVER_OFF: 'SERVER_OFF',
}

export type START_CHANNEL = { type: 'START_CHANNEL' }
const startChannel = (): START_CHANNEL => ({
  type: Types.START_CHANNEL,
})

export type STOP_CHANNEL = { type: 'STOP_CHANNEL' }
const stopChannel = (): STOP_CHANNEL => ({
  type: Types.STOP_CHANNEL,
})

export type CHANNEL_ON = { type: 'CHANNEL_ON' }
const channelOn = (): CHANNEL_ON => ({
  type: Types.CHANNEL_ON,
})

export type CHANNEL_OFF = { type: 'CHANNEL_OFF' }
const channelOff = (): CHANNEL_OFF => ({
  type: Types.CHANNEL_OFF,
})

export type SERVER_ON = { type: 'SERVER_ON', socket: Socket }
const serverOn = (socket: Socket): SERVER_ON => ({
  type: Types.SERVER_ON,
  socket,
})

export type SERVER_OFF = { type: 'SERVER_OFF' }
const serverOff = (): SERVER_OFF => ({
  type: Types.SERVER_OFF,
})

export const Creators = {
  startChannel,
  stopChannel,
  channelOn,
  channelOff,
  serverOn,
  serverOff,
}

export type Action =
  | START_CHANNEL
  | STOP_CHANNEL
  | CHANNEL_ON
  | CHANNEL_OFF
  | SERVER_ON
  | SERVER_OFF
