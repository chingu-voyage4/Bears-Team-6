// @flow

export const Types = {
  SET_FULL_NAME: 'SET_FULL_NAME',
  SET_EMAIL: 'SET_EMAIL',
  SET_PASSWORD: 'SET_PASSWORD',
  SUBMIT_REGISTRATION: 'SUBMIT_REGISTRATION',
}

const setFullName = (fullName: string) => ({
  type: Types.SET_FULL_NAME,
  fullName,
})

const setEmail = (email: string) => ({
  type: Types.SET_EMAIL,
  email,
})

const setPassword = (password: string) => ({
  type: Types.SET_PASSWORD,
  password,
})

const submitRegistration = () => ({
  type: Types.SUBMIT_REGISTRATION,
})

export const Creators = {
  setFullName,
  setEmail,
  setPassword,
  submitRegistration,
}

// export type Action = SubscribeTimestampAction | SetTimestampAction
