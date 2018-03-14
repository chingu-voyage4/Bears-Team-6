// @flow

import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators } from '../../redux'
import styles from './styles.scss'
import type { Props } from './types'

export const Registration = ({
  setFullName,
  setEmail,
  setPassword,
  submitRegistration,
  fullName,
  email,
  password,
  errorMessage,
  isLoading,
}: Props) => (
  <div className={styles.registration}>
    <span className={styles.error}>{errorMessage}</span>
    <label>Full Name<input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} disabled={isLoading} /></label>
    <label>Email<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={isLoading} /></label>
    <label>Password<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} disabled={isLoading} /></label>
    <button onClick={submitRegistration} disabled={isLoading}>submit</button>
  </div>)

const mapStateToProps = ({
  auth: {
    fullName, email, password, errorMessage, isLoading,
  },
}) => ({
  fullName, email, password, errorMessage, isLoading,
})

const mapDispatchToProps = (dispatch) => {
  const {
    submitRegistration,
    setFullName,
    setEmail,
    setPassword,
  } = Creators
  return bindActionCreators(
    {
      submitRegistration,
      setFullName,
      setEmail,
      setPassword,
    },
    dispatch,
  )
}

export const connected = connect(mapStateToProps, mapDispatchToProps)(Registration)
