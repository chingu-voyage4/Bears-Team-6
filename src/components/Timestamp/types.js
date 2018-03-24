// @flow

import type { StartChannelAction } from '../../redux/websocketProvider/actions'
import type { SubscribeTimestampAction } from '../../redux/timestamp/actions'

export type Props = {
  startChannel: (void) => StartChannelAction,
  subscribeTimestamp: (void) => SubscribeTimestampAction,
  ts: number,
  serverStatus: string,
  channelStatus: string,
}
