// @flow

import { ActionTypes } from '..'
import type { Action } from './actions'

type State = {
  latitude: number,
  longitude: number,
  isLocationSetManually: boolean,
}

const initialState: State = {
  latitude: 35.652832,
  longitude: 139.839478,
  isLocationSetManually: false,
}

const setGeoposition = (state, { latitude, longitude }) => ({ ...state, latitude, longitude })

const setGeopositionManual = (state, { latitude, longitude }) => ({
  ...state,
  latitude,
  longitude,
  setGeopositionManual: true,
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
