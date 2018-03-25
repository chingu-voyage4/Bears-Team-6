// @flow

export const Types = {
  SET_GEOPOSITION: 'SET_GEOPOSITION',
  SET_GEOPOSITION_MANUAL: 'SET_GEOPOSITION_MANUAL',
  WATCH_POSITION: 'WATCH_POSITION',
}
export type SET_GEOPOSITION = {
  type: 'SET_GEOPOSITION',
  lat: number,
  lng: number,
}

const setGeoposition = (lat: number, lng: number): SET_GEOPOSITION => ({
  type: Types.SET_GEOPOSITION,
  lat,
  lng,
})
export type SET_GEOPOSITION_MANUAL = {
  type: 'SET_GEOPOSITION_MANUAL',
  lat: number,
  lng: number,
}

const setGeopositionManual = (lat: number, lng: number): SET_GEOPOSITION_MANUAL => ({
  type: Types.SET_GEOPOSITION_MANUAL,
  lat,
  lng,
})
export type WATCH_POSITION = {
  type: 'WATCH_POSITION',
}

const watchPosition = (): WATCH_POSITION => ({
  type: Types.WATCH_POSITION,
})

export const Creators = { setGeoposition, watchPosition, setGeopositionManual }

export type Action = SET_GEOPOSITION | WATCH_POSITION | SET_GEOPOSITION_MANUAL
