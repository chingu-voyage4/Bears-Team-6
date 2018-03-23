// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Login } from '../Login/index'
import { Registration } from '../Registration/index'
import { UserSettings } from '../UserSettings/index'
import { Timestamp } from '../Timestamp/index'
import { checkAuthentication } from '../../redux/auth/reducer'

// Components that checks if the user is authorized and returns a Route
// Used to make both the authorized and unauthorized check
const MakeRoutes = ({ component: Component, authRoute, isAuthenticated, ...rest }) => {
  return(
    <Route {...rest} render={(props) =>
    {
      if (authRoute) {
        return isAuthenticated
          ? <Component {...props} />
          : <Redirect to='/login' />
      }
      return isAuthenticated
        ? <Redirect to='/usersettings' />
        : <Component {...props} />
    }
    }
    />
  )
}

// todo: make a loading component

// Switch will render the component based on the address
const Routes = (props) => {
  const { isAuthenticated, isLoading } = props
  return (
  <main>
    {!isLoading &&
    <Switch>
      <MakeRoutes exact path="/" authRoute component={UserSettings} isAuthenticated={isAuthenticated} />
      <MakeRoutes path="/registration" authRoute={false} component={Registration} isAuthenticated={isAuthenticated} />
      <MakeRoutes path="/login" authRoute={false} component={Login} isAuthenticated={isAuthenticated} />
      <MakeRoutes path="/usersettings" authRoute component={UserSettings} isAuthenticated={isAuthenticated} />
      <MakeRoutes path="/timestamp" authRoute component={Timestamp} isAuthenticated={isAuthenticated} />
    </Switch>
    }
  </main>
)}

const mapStateToProps = (state) => ({
  isAuthenticated: checkAuthentication(state),
  isLoading: state.auth.isLoading,
})

export default connect(mapStateToProps, null, null, {pure: false})(Routes)
