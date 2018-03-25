// @flow

import { Types as timestamp } from './timestamp/actions'
import { Types as websocketProvider } from './websocketProvider/actions'
import { Types as auth } from './auth/actions'
import { Types as userSettings } from './userSettings/actions'

export const ActionTypes = {
  ...websocketProvider,
  ...timestamp,
  ...auth,
  ...userSettings,
}
