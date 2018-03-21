// @flow

import { ActionTypes } from '..'
import type { Action } from './actions'

type State = {
  lat: number,
  lng: number,
  isLocationSetManually: boolean,
};

const initialState: State = {
  lat: 0,
  lng: 0,
  isLocationSetManually: false,
}

const setGeoposition = (state, { lat, lng }) => ({ ...state, lat, lng })

export const userSettings = (state: State = initialState, action?: Action): State => {
  if (!action || !action.type) return initialState
  switch (action.type) {
    case ActionTypes.SET_GEOPOSITION:
      return setGeoposition(state, action)
    default:
      return state
  }
}
