// @flow

export const Types = {
  SET_GEOPOSITION: 'SET_GEOPOSITION',
  WATCH_POSITION: 'WATCH_POSITION',
}
export type SET_GEOPOSITION = {
  type: 'SET_GEOPOSITION',
  lat: number,
  lng: number,
}
export type WATCH_POSITION = {
  type: 'WATCH_POSITION',
}

const setGeoposition = (lat: number, lng: number): SET_GEOPOSITION => ({
  type: Types.SET_GEOPOSITION,
  lat,
  lng,
})

const watchPosition = (): WATCH_POSITION => ({
  type: Types.WATCH_POSITION,
})

export const Creators = { setGeoposition, watchPosition }

export type Action = SET_GEOPOSITION | WATCH_POSITION
