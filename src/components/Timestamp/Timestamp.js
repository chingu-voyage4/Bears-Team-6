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
    return (
      <div>
        <span>timestamp: {this.props.ts}</span>
      </div>)
  }
}

const mapStateToProps = ({ timestamp: { ts } }) => ({ ts })

const mapDispatchToProps = (dispatch) => {
  const { startChannel, subscribeTimestamp } = Creators
  return bindActionCreators(
    { startChannel, subscribeTimestamp },
    dispatch,
  )
}

export const connected = connect(mapStateToProps, mapDispatchToProps)(Timestamp)
