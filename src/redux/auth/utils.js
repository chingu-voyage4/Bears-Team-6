// @flow

export const isValidEmail = (x: string) => true
export const isValidPassword = (x: string) => true
export const isValidName = (x: string) => true

export const isValidRegistrationData = (name: string, email: string, password: string) =>
  isValidEmail(email) && isValidPassword(password) && isValidName(name)
