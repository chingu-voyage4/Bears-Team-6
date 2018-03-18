import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.scss'

export const MainMenu = () => (
  <header className={styles.root}>
    <nav>
      <ul>
        <li><Link to="/registration">Registration</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/usersettings">User Settings</Link></li>
        <li><Link to="/timestamp">Timestamp</Link></li>
      </ul>
    </nav>
  </header>
)
