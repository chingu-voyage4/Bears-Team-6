// @flow

import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators } from '../../redux'

class Logout extends React.Component<Props> {
  componentWillMount() {
    this.props.logout()
  }

  render() {
    return null
  }
}

const mapDispatchToProps = (dispatch) => {
  const { logout } = Creators
  return bindActionCreators(
    { logout },
    dispatch,
  )
}

export const connected = connect(() => ({}), mapDispatchToProps)(Logout)
