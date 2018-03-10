// @flow

export const isValidEmail = (x: string) => typeof x === 'string' && x.length > 1
export const isValidPassword = (x: string) => typeof x === 'string' && x.length > 1
export const isValidName = (x: string) => typeof x === 'string' && x.length > 1

export const isValidRegistrationData = (name: string, email: string, password: string) =>
  isValidEmail(email) && isValidPassword(password) && isValidName(name)

export const isValidLoginData = (email: string, password: string) =>
  isValidEmail(email) && isValidPassword(password)
