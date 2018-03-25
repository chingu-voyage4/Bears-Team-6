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
  INVALID_TOKEN: 'INVALID_TOKEN',
  LOGOUT: 'LOGOUT',
}

export type SET_FULL_NAME = {
  type: 'SET_FULL_NAME',
  fullName: string,
}
const setFullName = (fullName: string): SET_FULL_NAME => ({
  type: Types.SET_FULL_NAME,
  fullName,
})

export type SET_EMAIL = {
  type: 'SET_EMAIL',
  email: string,
}
const setEmail = (email: string): SET_EMAIL => ({
  type: Types.SET_EMAIL,
  email,
})

export type REGISTRATION_REJECTED = {
  type: 'REGISTRATION_REJECTED',
  errorMessage: string,
}
const registrationRejected = (errorMessage: string): REGISTRATION_REJECTED => ({
  type: Types.REGISTRATION_REJECTED,
  errorMessage,
})

export type REGISTRATION_APPROVED = {
  type: 'REGISTRATION_APPROVED',
  token: string,
}
const registrationApproved = (token: string): REGISTRATION_APPROVED => ({
  type: Types.REGISTRATION_APPROVED,
  token,
})

export type LOGIN_REJECTED = {
  type: 'LOGIN_REJECTED',
  errorMessage: string,
}
const loginRejected = (errorMessage: string): LOGIN_REJECTED => ({
  type: Types.LOGIN_REJECTED,
  errorMessage,
})

export type LOGIN_APPROVED = {
  type: 'LOGIN_APPROVED',
  token: string,
}
const loginApproved = (token: string): LOGIN_APPROVED => ({
  type: Types.LOGIN_APPROVED,
  token,
})

export type SET_PASSWORD = {
  type: 'SET_PASSWORD',
  password: string,
}
const setPassword = (password: string): SET_PASSWORD => ({
  type: Types.SET_PASSWORD,
  password,
})

export type SUBMIT_REGISTRATION = {
  type: 'SUBMIT_REGISTRATION',
}
const submitRegistration = (): SUBMIT_REGISTRATION => ({
  type: Types.SUBMIT_REGISTRATION,
})

export type SUBMIT_LOGIN = {
  type: 'SUBMIT_LOGIN',
}
const submitLogin = (): SUBMIT_LOGIN => ({
  type: Types.SUBMIT_LOGIN,
})

export type LOAD_TOKEN = {
  type: 'LOAD_TOKEN',
}
const loadToken = (): LOAD_TOKEN => ({
  type: Types.LOAD_TOKEN,
})

export type INVALID_TOKEN = {
  type: 'INVALID_TOKEN',
}
const invalidToken = (): INVALID_TOKEN => ({
  type: Types.INVALID_TOKEN,
})

const logout = () => ({
  type: Types.LOGOUT,
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
  logout,
}

export type Action =
  | SET_FULL_NAME
  | SET_EMAIL
  | SET_PASSWORD
  | SUBMIT_REGISTRATION
  | REGISTRATION_REJECTED
  | REGISTRATION_APPROVED
  | SUBMIT_LOGIN
  | LOGIN_REJECTED
  | LOGIN_APPROVED
  | LOAD_TOKEN
  | INVALID_TOKEN
