// @flow

export type Props = {
  setFullName: string => void,
  setEmail: string => void,
  setPassword: string => void,
  submitLogin: string => void,
  fullName: string,
  email: string,
  password: string,
  errorMessage: string,
  isLoading: boolean,
}
