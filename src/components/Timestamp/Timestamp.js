// @flow

import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators } from '../../redux'
import type { Props } from './types'

export class Timestamp extends React.PureComponent<Props> {
  componentWillMount() {
    this.props.startChannel()
    this.props.subscribeTimestamp()
  }

  render() {
    const { serverStatus, channelStatus } = this.props
    return (
      <div>
        <p>Server status: {serverStatus} (should be off until authorized)</p>
        <p>Channel status: {channelStatus} (should be on)</p>
        <p>timestamp: {this.props.ts}</p>
      </div>)
  }
}

const mapStateToProps = ({
  timestamp: { ts },
  websocketProvider: {
    serverStatus, channelStatus,
  },
}) => ({ ts, serverStatus, channelStatus })

const mapDispatchToProps = (dispatch) => {
  const { startChannel, subscribeTimestamp } = Creators
  return bindActionCreators(
    { startChannel, subscribeTimestamp },
    dispatch,
  )
}

export const connected = connect(mapStateToProps, mapDispatchToProps)(Timestamp)
