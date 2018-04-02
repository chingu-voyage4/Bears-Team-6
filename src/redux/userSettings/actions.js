// @flow

export const Types = {
  SET_GEOPOSITION: 'SET_GEOPOSITION',
  SET_GEOPOSITION_MANUAL: 'SET_GEOPOSITION_MANUAL',
  WATCH_POSITION: 'WATCH_POSITION',
  SET_USER_SETTINGS: 'SET_USER_SETTINGS',
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

export type SET_USER_SETTINGS = {
  type: 'SET_USER_SETTINGS',
  name: string,
  email: string,
  interests: Array<Object>,
  meetings: Array<Object>
}

const setUserSettings = (
  name: string,
  email: string,
  interests: Array<Object>,
  meetings: Array<Object>,
): SET_USER_SETTINGS => ({
  type: Types.SET_USER_SETTINGS,
  name,
  email,
  interests,
  meetings,
})

export const Creators = {
  setGeoposition, watchPosition, setGeopositionManual, setUserSettings,
}

export type Action = SET_GEOPOSITION | WATCH_POSITION | SET_GEOPOSITION_MANUAL | SET_USER_SETTINGS
