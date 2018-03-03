// @flow

import { Types as timestamp } from './timestamp/actions'
import { Types as websocketProvider } from './websocketProvider/actions'

export const ActionTypes = {
  ...websocketProvider,
  ...timestamp,
}
