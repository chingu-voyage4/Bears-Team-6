// @flow

import { ActionTypes } from '..'

type State = {
  fullName: string,
  email: string,
  password: string,
  isRegistering: boolean,
  errorMessage: string,
};

const initialState: State = {
  fullName: '',
  email: '',
  password: '',
  isRegistering: false,
  errorMessage: '', // cleanup on every state change
}

const submitRegistration = (state) => ({ ...state, isLoading: true })

const submitLogin = (state) => ({ ...state, isLoading: true })

const registrationRejected = (state, { errorMessage }) => ({ ...state, errorMessage, isLoading: false })

const registrationApproved = (state, { errorMessage }) => ({ ...state, errorMessage, isLoading: false })

const loginRejected = (state, { errorMessage }) => ({ ...state, errorMessage, isLoading: false })

const loginApproved = (state, { errorMessage }) => ({ ...state, errorMessage, isLoading: false })

const setFullName = (state, { fullName }: {fullName: string}) => ({ ...state, fullName, errorMessage: '' })

const setEmail = (state, { email }: {email: string}) => ({ ...state, email, errorMessage: '' })

const setPassword = (state, { password }: {password: string}) => ({ ...state, password, errorMessage: '' })

export const auth = (state: State = initialState, action): State => {
  if (!action || !action.type) return initialState
  switch (action.type) {
    case ActionTypes.SET_FULL_NAME:
      return setFullName(state, action)
    case ActionTypes.SET_EMAIL:
      return setEmail(state, action)
    case ActionTypes.SET_PASSWORD:
      return setPassword(state, action)
    case ActionTypes.SUBMIT_REGISTRATION:
      return submitRegistration(state)
    case ActionTypes.SUBMIT_LOGIN:
      return submitLogin(state)
    case ActionTypes.REGISTRATION_REJECTED:
      return registrationRejected(state, action)
    case ActionTypes.REGISTRATION_APPROVED:
      return registrationApproved(state, action)
    case ActionTypes.LOGIN_REJECTED:
      return loginRejected(state, action)
    case ActionTypes.LOGIN_APPROVED:
      return loginApproved(state, action)
    default:
      return state
  }
}
