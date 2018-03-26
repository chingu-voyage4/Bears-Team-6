// @flow

import type { SET_FULL_NAME, SET_EMAIL, SET_PASSWORD, SUBMIT_REGISTRATION } from '../../redux/auth/actions'

export type Props = {
  setFullName: (string) => SET_FULL_NAME,
  setEmail: (string) => SET_EMAIL,
  setPassword: (string) => SET_PASSWORD,
  submitRegistration: (string) => SUBMIT_REGISTRATION,
  fullName: string,
  email: string,
  password: string,
  errorMessage: string,
  isLoading: boolean,
}
