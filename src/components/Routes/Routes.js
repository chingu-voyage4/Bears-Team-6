// @flow

import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Login } from '../Login/index'
import { Registration } from '../Registration'
import { UserSettings } from '../UserSettings'
import { Timestamp } from '../Timestamp'
import { Logout } from '../Logout'
import { checkAuthentication } from '../../redux/auth/reducer'

// Components that checks if the user is authorized and returns a Route
// Used to make both the authorized and unauthorized check
const MakeRoutes = ({
  component: Component, authRoute, isAuthenticated, ...rest
}) => (
  <Route
    {...rest} render={(props) => {
    if (authRoute && !isAuthenticated) {
      return <Redirect to="/login" />
    }
    if (!authRoute && isAuthenticated) {
      return <Redirect to="/usersettings" />
    }
    return <Component {...props} />
  }
  }
  />
)

// todo: make a loading component

// Switch will render the component based on the address
const Routes = (props) => {
  const { isAuthenticated, isLoading } = props
  return (
    <main>
      {!isLoading &&
      <Switch>
        <MakeRoutes
          exact path="/"
          authRoute
          component={Timestamp}
          isAuthenticated={isAuthenticated}
        />
        <MakeRoutes
          path="/registration"
          authRoute={false}
          component={Registration}
          isAuthenticated={isAuthenticated}
        />
        <MakeRoutes
          path="/login"
          authRoute={false}
          component={Login}
          isAuthenticated={isAuthenticated}
        />
        <MakeRoutes
          path="/usersettings"
          authRoute
          component={UserSettings}
          isAuthenticated={isAuthenticated}
        />
        <MakeRoutes
          path="/timestamp"
          authRoute
          component={Timestamp}
          isAuthenticated={isAuthenticated}
        />
        <MakeRoutes
          path="/logout"
          authRoute
          component={Logout}
          isAuthenticated={isAuthenticated}
        />
      </Switch>
    }
    </main>
  )
}

const mapStateToProps = (state) => ({
  isAuthenticated: checkAuthentication(state),
  isLoading: state.auth.isLoading,
})

// $ItWorksFineButFlowIsAnIdiot
export const connected = connect(mapStateToProps, null, null, { pure: false })(Routes)
