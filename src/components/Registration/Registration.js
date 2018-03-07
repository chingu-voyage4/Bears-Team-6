// @flow

import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators } from '../../redux'
import type { Props } from './types'

export const Registration = ({
  setFullName,
  setEmail,
  setPassword,
  submitRegistration,
  fullName,
  email,
  password,
}: Props) => (
  <div>
    <label>Full Name<input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} /></label>
    <label>Email<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></label>
    <label>Password<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /></label>
    <button onClick={submitRegistration}>submit</button>
  </div>)

const mapStateToProps = ({ auth: { fullName, email, password } }) => ({ fullName, email, password })

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
