// @flow

export const isValidTimestamp = (x?: any) => !!x && Number.isInteger(x) && x > 0 && x < Infinity
