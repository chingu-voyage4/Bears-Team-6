// @flow

import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators } from '../../redux'
import styles from './styles.scss'
import type { Props } from './types'

export const Login = ({
  setEmail,
  setPassword,
  submitLogin,
  email,
  password,
  errorMessage,
  isLoading,
}: Props) => (
  <div className={styles.login}>
    <Helmet>
      <title>Login</title>
    </Helmet>
    <span className={styles.error}>{errorMessage}</span>
    <label>Email
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isLoading}
      />
    </label>
    <label>Password (10 or longer)
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={isLoading}
      />
    </label>
    <button onClick={submitLogin} disabled={isLoading}>submit</button>
  </div>)

const mapStateToProps = ({
  auth:
    {
      email, password, errorMessage, isLoading,
    },
}) => ({
  email, password, errorMessage, isLoading,
})

const mapDispatchToProps = (dispatch) => {
  const {
    submitLogin,
    setEmail,
    setPassword,
  } = Creators
  return bindActionCreators(
    {
      submitLogin,
      setEmail,
      setPassword,
    },
    dispatch,
  )
}

export const connected = connect(mapStateToProps, mapDispatchToProps)(Login)
