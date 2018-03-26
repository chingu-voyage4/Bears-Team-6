// @flow

import type { SET_EMAIL, SET_PASSWORD, SUBMIT_LOGIN } from '../../redux/auth/actions'

export type Props = {
  setEmail: (string) => SET_EMAIL,
  setPassword: (string) => SET_PASSWORD,
  submitLogin: (string) => SUBMIT_LOGIN,
  fullName: string,
  email: string,
  password: string,
  errorMessage: string,
  isLoading: boolean,
}
