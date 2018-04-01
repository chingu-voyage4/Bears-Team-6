// @flow

import { ActionTypes } from '..'
import type { Action } from './actions'

type State = {
  latitude: number,
  longitude: number,
  isLocationSetManually: boolean,
  name: string,
  email: string,
  interests: Array<Object>,
  meetings: Array<Object>,
}

const initialState: State = {
  latitude: 0,
  longitude: 0,
  isLocationSetManually: false,
  name: '',
  email: '',
  interests: [],
  meetings: [],
}

const setGeoposition = (state, { latitude, longitude }) => ({ ...state, latitude, longitude })

const setGeopositionManual = (state, { latitude, longitude }) => ({
  ...state,
  latitude,
  longitude,
  setGeopositionManual: true,
})

const setUserSettings = (state, {
  name, email, interests, meetings,
}) => ({
  ...state,
  name,
  email,
  interests,
  meetings,
})

export const userSettings = (state: State = initialState, action?: Action): State => {
  if (!action || !action.type) return initialState
  switch (action.type) {
    case ActionTypes.SET_GEOPOSITION:
      return setGeoposition(state, action)
    case ActionTypes.SET_GEOPOSITION_MANUAL:
      return setGeopositionManual(state, action)
    case ActionTypes.SET_USER_SETTINGS:
      return setUserSettings(state, action)
    default:
      return state
  }
}
