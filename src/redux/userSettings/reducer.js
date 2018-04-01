// @flow

import { ActionTypes } from '..'
import type { Action } from './actions'

type State = {
  latitude: number,
  longitude: number,
  isLocationSetManually: boolean,
  interests: Array<Object>,
  meetings: Array<Object>,
}

const initialState: State = {
  latitude: 0,
  longitude: 0,
  isLocationSetManually: false,
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

const setUserSettings = (state, { name, email, interests }) => ({
  ...state,
  name,
  email,
  interests,
})

export const userSettings = (state: State = initialState, action?: Action): State => {
  if (!action || !action.type) return initialState
  switch (action.type) {
    case ActionTypes.SET_GEOPOSITION:
      return setGeoposition(state, action)
    case ActionTypes.SET_GEOPOSITION_MANUAL:
      return setGeopositionManual(state, action)
    default:
      return state
  }
}
