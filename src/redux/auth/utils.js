// @flow

import R from 'ramda'

export const isValidEmail: string => boolean = R.allPass([
  R.is(String),
  R.test(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i),
])

export const isValidPassword = R.allPass([
  R.is(String),
  R.pipe(R.length, R.lte(10)),
])

export const isValidName = (x: string) => typeof x === 'string' && x.length > 1

export const isValidRegistrationData = (name: string, email: string, password: string) =>
  isValidEmail(email) && isValidPassword(password) && isValidName(name)

export const isValidLoginData = (email: string, password: string) =>
  isValidEmail(email) && isValidPassword(password)
