// @flow

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import type { Props } from './types'
// $IgnoreStylesheets
import styles from './styles.scss'

const allPaths = {
  authorizedPaths: [
    <li key="/usersettings">
      <Link to="/usersettings">User Settings</Link>
    </li>,
    <li key="/timestamp">
      <Link to="/timestamp">Timestamp</Link>
    </li>,
  ],
  unauthorizedPaths: [
    <li key="/registration">
      <Link to="/registration">Registration</Link>
    </li>,
    <li key="/login">
      <Link to="/login">Login</Link>
    </li>,
  ],
}

export class MainMenu extends React.Component<Props> {
  render() {
    const { isAuthenticated, isLoading } = this.props
    const currentPath = allPaths[`${isAuthenticated ? 'authorizedPaths' : 'unauthorizedPaths'}`]
    return (
      <header className={styles.root}>
        <nav>
          <ul>{!isLoading && currentPath.map((li) => li)}</ul>
        </nav>
      </header>
    )
  }
}

const mapStateToProps = (state) => {
  const { isAuthenticated, isLoading } = state.auth
  return {
    isAuthenticated,
    isLoading,
  }
}

// $ItWorksFineButFlowIsAnIdiot
export const connected = connect(mapStateToProps)(MainMenu)
