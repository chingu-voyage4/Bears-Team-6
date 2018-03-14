// @flow

import React from 'react'
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
    <span className={styles.error}>{errorMessage}</span>
    <label>Email
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isLoading}
      />
    </label>
    <label>Password
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
      fullName, email, password, errorMessage, isLoading,
    },
}) => ({
  fullName, email, password, errorMessage, isLoading,
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
