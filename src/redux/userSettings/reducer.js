// @flow

import { ActionTypes } from '..'
import type { Action } from './actions'

type State = {
  lat: number,
  lng: number,
  isLocationSetManually: boolean,
}

const initialState: State = {
  lat: 35.652832,
  lng: 139.839478,
  isLocationSetManually: false,
}

const setGeoposition = (state, { lat, lng }) => ({ ...state, lat, lng })

const setGeopositionManual = (state, { lat, lng }) => ({
  ...state,
  lat,
  lng,
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
