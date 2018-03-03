// @flow

import { Creators as timestamp } from './timestamp/actions'
import { Creators as websocketProvider } from './websocketProvider/actions'

export const Creators = {
  ...websocketProvider,
  ...timestamp,
}
