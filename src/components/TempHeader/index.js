import React from 'react'
import { Link } from 'react-router-dom'

// Temp header created to navigate through the screens

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Registration</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/usersettings'>User Settings</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
