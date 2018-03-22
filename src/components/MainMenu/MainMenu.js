// @flow

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from './styles.scss'
import type { Props } from './types'

const allPaths = {
authorizedPaths:
  [
    <li><Link to="/usersettings">User Settings</Link></li>,
    <li><Link to="/timestamp">Timestamp</Link></li>
  ],
unauthorizedPaths:
  [
    <li><Link to="/registration">Registration</Link></li>,
    <li><Link to="/login">Login</Link></li>
  ]
}

export class MainMenu extends React.Component<Props> {
  render() {
    const { isAuthenticated, isLoading } = this.props
    const currentPath = allPaths[`${isAuthenticated ? 'authorizedPaths' : 'unauthorizedPaths'}`]
    console.log(isAuthenticated)
    console.log(currentPath)
    return (
      <header className={styles.root}>
        <nav>
          <ul>
            {!isLoading && currentPath.map(li => li)}
          </ul>
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

export const connected = connect(mapStateToProps)(MainMenu)
