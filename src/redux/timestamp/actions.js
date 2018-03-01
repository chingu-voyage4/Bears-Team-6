// @flow

export const Types = {
  SUBSCRIBE_TIMESTAMP: 'SUBSCRIBE_TIMESTAMP',
  SET_TIMESTAMP: 'SET_TIMESTAMP',
}

const subscribeTimestamp = () => ({
  type: Types.SUBSCRIBE_TIMESTAMP,
})

const setTimestamp = (ts) => ({
  type: Types.SET_TIMESTAMP,
  ts,
})

export const Creators = { setTimestamp, subscribeTimestamp }
