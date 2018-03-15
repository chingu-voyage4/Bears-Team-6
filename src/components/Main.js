import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Login } from './Login'
import { Registration } from './Registration'
import { UserSettings } from './UserSettings'
import { Timestamp } from './Timestamp'
import { Logout } from './Logout'

// Switch will render the component based on the address
const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Registration} />
      <Route path="/login" component={Login} />
      <Route path="/usersettings" component={UserSettings} />
      <Route path="/timestamp" component={Timestamp} />
      <Route path="/logout" component={Logout} />
    </Switch>
  </main>
)

export default Main
