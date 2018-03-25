// @flow

import type { START_CHANNEL } from '../../redux/websocketProvider/actions'
import type { SUBSCRIBE_TIMESTAMP } from '../../redux/timestamp/actions'

export type Props = {
  startChannel: (void) => START_CHANNEL,
  subscribeTimestamp: (void) => SUBSCRIBE_TIMESTAMP,
  ts: number,
  serverStatus: string,
  channelStatus: string,
}
