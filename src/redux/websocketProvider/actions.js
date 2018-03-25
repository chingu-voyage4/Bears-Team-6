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

export type StartChannelAction = { type: 'START_CHANNEL' }

const startChannel = (): StartChannelAction => ({
  type: Types.START_CHANNEL,
})

export type StopChannelAction = { type: 'STOP_CHANNEL' }

const stopChannel = (): StopChannelAction => ({
  type: Types.STOP_CHANNEL,
})

export type ChannelOnAction = { type: 'CHANNEL_ON' }

const channelOn = (): ChannelOnAction => ({
  type: Types.CHANNEL_ON,
})

export type ChannelOffAction = { type: 'CHANNEL_OFF' }

const channelOff = (): ChannelOffAction => ({
  type: Types.CHANNEL_OFF,
})

export type ServerOnAction = { type: 'SERVER_ON' }

const serverOn = (socket: Socket): ServerOnAction => ({
  type: Types.SERVER_ON,
  socket,
})

export type ServerOffAction = { type: 'SERVER_OFF' }

const serverOff = (): ServerOffAction => ({
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
  | StartChannelAction
  | StopChannelAction
  | ChannelOnAction
  | ChannelOffAction
  | ServerOnAction
  | ServerOffAction
