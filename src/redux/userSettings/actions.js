// @flow

export const Types = {
  SET_GEOPOSITION: 'SET_GEOPOSITION',
  SET_GEOPOSITION_MANUAL: 'SET_GEOPOSITION_MANUAL',
  WATCH_POSITION: 'WATCH_POSITION',
}
export type SET_GEOPOSITION = {
  type: 'SET_GEOPOSITION',
  latitude: number,
  longitude: number,
}
const setGeoposition = (latitude: number, longitude: number): SET_GEOPOSITION => ({
  type: Types.SET_GEOPOSITION,
  latitude,
  longitude,
})

export type SET_GEOPOSITION_MANUAL = {
  type: 'SET_GEOPOSITION_MANUAL',
  latitude: number,
  longitude: number,
}
const setGeopositionManual = (latitude: number, longitude: number): SET_GEOPOSITION_MANUAL => ({
  type: Types.SET_GEOPOSITION_MANUAL,
  latitude,
  longitude,
})

export type WATCH_POSITION = {
  type: 'WATCH_POSITION',
}
const watchPosition = (): WATCH_POSITION => ({
  type: Types.WATCH_POSITION,
})

export const Creators = { setGeoposition, watchPosition, setGeopositionManual }

export type Action = SET_GEOPOSITION | WATCH_POSITION | SET_GEOPOSITION_MANUAL
