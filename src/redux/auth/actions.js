// @flow

export const Types = {
  SET_FULL_NAME: 'SET_FULL_NAME',
  SET_EMAIL: 'SET_EMAIL',
  SET_PASSWORD: 'SET_PASSWORD',
  SUBMIT_REGISTRATION: 'SUBMIT_REGISTRATION',
  REGISTRATION_REJECTED: 'REGISTRATION_REJECTED',
  REGISTRATION_APPROVED: 'REGISTRATION_APPROVED',
  SUBMIT_LOGIN: 'SUBMIT_LOGIN',
  LOGIN_REJECTED: 'LOGIN_REJECTED',
  LOGIN_APPROVED: 'LOGIN_APPROVED',
  LOAD_TOKEN: 'LOAD_TOKEN',
  VERIFY_TOKEN: 'VERIFY_TOKEN',
  INVALID_TOKEN: 'INVALID_TOKEN',
}

const setFullName = (fullName: string) => ({
  type: Types.SET_FULL_NAME,
  fullName,
})

const setEmail = (email: string) => ({
  type: Types.SET_EMAIL,
  email,
})

const registrationRejected = (errorMessage: string) => ({
  type: Types.REGISTRATION_REJECTED,
  errorMessage,
})

const registrationApproved = (token: string) => ({
  type: Types.REGISTRATION_APPROVED,
  token,
})

const loginRejected = (errorMessage: string) => ({
  type: Types.LOGIN_REJECTED,
  errorMessage,
})

const loginApproved = (token: string) => ({
  type: Types.LOGIN_APPROVED,
  token,
})

const setPassword = (password: string) => ({
  type: Types.SET_PASSWORD,
  password,
})

const submitRegistration = () => ({
  type: Types.SUBMIT_REGISTRATION,
})

const submitLogin = () => ({
  type: Types.SUBMIT_LOGIN,
})

const loadToken = () => ({
  type: Types.LOAD_TOKEN,
})

const invalidToken = () => ({
  type: Types.INVALID_TOKEN,
})

export const Creators = {
  setFullName,
  setEmail,
  setPassword,
  submitRegistration,
  submitLogin,
  registrationRejected,
  registrationApproved,
  loginRejected,
  loginApproved,
  loadToken,
  invalidToken,
}
