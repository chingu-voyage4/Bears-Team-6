// @flow

import React from 'react'
import io from 'socket.io-client'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators } from '../../redux/timestamp/actions'

export class App extends React.PureComponent<*> {
  componentWillMount() {
    // const host = '' // use this when deployed on heroku
    // const host = 'http://localhost:3000' // local dev server
    const host = 'http://dev-weareyourteam.herokuapp.com' // local dev situation variant

    const socket = io(`${host}/websockets`)
    socket.on('timestamp', this.props.setTimestamp) // eslint-disable-line no-console
  }

  render() {
    return (
      <div>
        <span>timestamp: {this.props.ts}</span>
      </div>)
  }
}

const mapStateToProps = ({ timestamp: { ts } }) => ({ ts })

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setTimestamp: Creators.setTimestamp,
    },
    dispatch,
  )

export const connected = connect(mapStateToProps, mapDispatchToProps)(App)
