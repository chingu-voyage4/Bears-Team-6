// @flow

import { Types as timestamp } from './timestamp/actions'
import { Types as websocketProvider } from './websocketProvider/actions'
import { Types as auth } from './auth/actions'

export const ActionTypes = {
  ...websocketProvider,
  ...timestamp,
  ...auth,
}
