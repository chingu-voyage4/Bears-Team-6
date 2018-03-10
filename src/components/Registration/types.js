// @flow

export type Props = {
  setFullName: string => void,
  setEmail: string => void,
  setPassword: string => void,
  submitRegistration: string => void,
  fullName: string,
  email: string,
  password: string,
  errorMessage: string,
}
