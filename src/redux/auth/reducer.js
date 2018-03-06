// @flow

import { ActionTypes } from '..'

type State = {
  +ts: number,
  +isSubscribed: boolean,
};

const initialState: State = {
  fullName: '',
  email: '',
  password: '',
}

const setFullName = (state, { fullName }: {fullName: string}) => ({ ...state, fullName })

const setEmail = (state, { email }: {email: string}) => ({ ...state, email })

const setPassword = (state, { password }: {password: string}) => ({ ...state, password })

export const auth = (state: State = initialState, action): State => {
  if (!action || !action.type) return initialState
  switch (action.type) {
    case ActionTypes.SET_FULL_NAME:
      return setFullName(state, action)
    case ActionTypes.SET_EMAIL:
      return setEmail(state, action)
    case ActionTypes.SET_PASSWORD:
      return setPassword(state, action)
    default:
      return state
  }
}
