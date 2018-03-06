// @flow

import { Creators as timestamp } from './timestamp/actions'
import { Creators as websocketProvider } from './websocketProvider/actions'
import { Creators as auth } from './auth/actions'

export const Creators = {
  ...websocketProvider,
  ...timestamp,
  ...auth,
}
