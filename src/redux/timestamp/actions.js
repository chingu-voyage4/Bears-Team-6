// @flow

export const Types = {
  SUBSCRIBE_TIMESTAMP: 'SUBSCRIBE_TIMESTAMP',
  SET_TIMESTAMP: 'SET_TIMESTAMP',
}

export type SUBSCRIBE_TIMESTAMP = { type: 'SUBSCRIBE_TIMESTAMP' }
const subscribeTimestamp = (): SUBSCRIBE_TIMESTAMP => ({
  type: Types.SUBSCRIBE_TIMESTAMP,
})

export type SET_TIMESTAMP = {
  type: 'SET_TIMESTAMP',
  ts: number,
}
const setTimestamp = (ts: number): SET_TIMESTAMP => ({
  type: Types.SET_TIMESTAMP,
  ts,
})

export const Creators = { setTimestamp, subscribeTimestamp }

export type Action = SUBSCRIBE_TIMESTAMP | SET_TIMESTAMP
