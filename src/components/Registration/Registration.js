// @flow

import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators } from '../../redux'
import type { Props } from './types'
// $IgnoreStylesheets
import styles from './styles.scss'

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
    <Helmet>
      <title>Registration</title>
    </Helmet>
    <h2>Registration</h2>
    <span className={styles.error}>{errorMessage}</span>
    <div className={styles.formgroup}>
      <p className={styles.label}>Full Name</p>
      <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} disabled={isLoading} />
      <p className={styles.hint}>At least 2 characters. May be visible for many people.</p>
    </div>
    <div className={styles.formgroup}>
      <p className={styles.label}>E-mail </p>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={isLoading} />
      <p className={styles.hint}>Will not be shown to anyone. Will be used only for registration and notifications.</p>
    </div>
    <div className={styles.formgroup}>
      <p className={styles.label}>Password</p>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
        disabled={isLoading}
      />
      <p className={styles.hint}>... at least 10 characters</p>
    </div>
    <button onClick={submitRegistration} disabled={isLoading}>
      Submit
    </button>
  </div>
)

const mapStateToProps = ({
  auth: {
    fullName, email, password, errorMessage, isLoading,
  },
}) => ({
  fullName,
  email,
  password,
  errorMessage,
  isLoading,
})

const mapDispatchToProps = (dispatch) => {
  const {
    submitRegistration, setFullName, setEmail, setPassword,
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
