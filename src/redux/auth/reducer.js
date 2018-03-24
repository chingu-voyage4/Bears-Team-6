// @flow
import * as R from 'ramda'
import { ActionTypes } from '..'
import type { Action } from './actions'

type State = {
  fullName: string,
  email: string,
  password: string,
  isLoading: boolean,
  isAuthenticated: boolean,
  errorMessage: string,
  token: string,
}

// Reducer functions

const initialState: State = {
  fullName: '', // lock if in progress
  email: '', // lock if in progress
  password: '', // lock if in progress
  isLoading: false,
  isAuthenticated: false,
  errorMessage: '', // cleanup on every state change
  token: '',
}

const submitRegistration = R.evolve({ isLoading: R.T })

const submitLogin = R.pipe(R.evolve({ isLoading: R.T }))

const registrationRejected = (state, { errorMessage }) =>
  R.evolve({
    isLoading: R.F,
    errorMessage: R.always(errorMessage),
  })(state)

const registrationApproved = (state, { token }: { token: string }) =>
  R.evolve({
    fullName: R.always(''),
    email: R.always(''),
    password: R.always(''),
    isLoading: R.F,
    isAuthenticated: R.T,
    token: R.always(token),
  })(state)

const loginRejected = (state, { errorMessage }) =>
  R.evolve({
    isLoading: R.F,
    errorMessage: R.always(errorMessage),
  })(state)

const loginApproved = (state, { token }: { token: string }) =>
  R.evolve({
    email: R.always(''),
    password: R.always(''),
    isLoading: R.F,
    isAuthenticated: R.T,
    token: R.always(token),
  })(state)

const setFullName = (state, { fullName }: { fullName: string }) => ({ ...state, fullName, errorMessage: '' })

const setEmail = (state, { email }: { email: string }) => ({ ...state, email, errorMessage: '' })

const setPassword = (state, { password }: { password: string }) => ({ ...state, password, errorMessage: '' })

const loadToken = R.evolve({ isLoading: R.T })

const invalidToken = R.evolve({ isLoading: R.F })

const logout = (state) => R.evolve({
  isAuthenticated: R.F,
  token: R.always(''),
})(state)

// Selectors

export const checkAuthentication = R.path(['auth', 'isAuthenticated'])

export const auth = (state: State = initialState, action: Action): State => {
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
    case ActionTypes.LOAD_TOKEN:
      return loadToken(state)
    case ActionTypes.INVALID_TOKEN:
      return invalidToken(state)
    case ActionTypes.LOGOUT:
      return logout(state)
    default:
      return state
  }
}
