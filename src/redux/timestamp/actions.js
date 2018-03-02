// @flow

export const Types = {
  SUBSCRIBE_TIMESTAMP: 'SUBSCRIBE_TIMESTAMP',
  SET_TIMESTAMP: 'SET_TIMESTAMP',
}

type SubscribeTimestampAction = {
  type: 'SUBSCRIBE_TIMESTAMP',
}

const subscribeTimestamp = (): SubscribeTimestampAction => ({
  type: Types.SUBSCRIBE_TIMESTAMP,
})

type SetTimestampAction = {
  type: 'SET_TIMESTAMP',
  ts: number,
}

const setTimestamp = (ts: number): SetTimestampAction => ({
  type: Types.SET_TIMESTAMP,
  ts,
})

export const Creators = { setTimestamp, subscribeTimestamp }

export type Action = SubscribeTimestampAction | SetTimestampAction
