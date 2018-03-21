// @flow

import { Creators as timestamp } from './timestamp/actions'
import { Creators as websocketProvider } from './websocketProvider/actions'
import { Creators as auth } from './auth/actions'
import { Creators as userSettings } from './userSettings/actions'

export const Creators = {
  ...websocketProvider,
  ...timestamp,
  ...auth,
  ...userSettings,
}
