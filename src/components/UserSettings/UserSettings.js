import React from 'react'
import { Helmet } from 'react-helmet'
import LocationPicker from 'react-location-picker'

const defaultPosition = {
  lat: 35.652832,
  lng: 139.839478,
}

if ('geolocation' in navigator) {
  const putFromSagaToRedux = console.log
  navigator.geolocation.watchPosition(putFromSagaToRedux)
}

export const UserSettings = () => {
  return (
    <div>
      <Helmet>
        <title>Settings</title>
      </Helmet>
      <h3>location hidden if already set (button change location exists)</h3>
      <LocationPicker
        zoom={10}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '400px' }} />}
        defaultPosition={defaultPosition}
        onChange={({ position }) => console.log(position)}
      />
      <h3>interests here</h3>
    </div>
  )
}
