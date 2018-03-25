import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LocationPicker from 'react-location-picker'
import { Creators } from '../../redux'

export class UserSettings extends React.Component<*> {
  render() {
    const { lat, lng, setGeopositionManual } = this.props
    return (
      <div>
        <Helmet>
          <title>Settings</title>
        </Helmet>
        <h3>location hidden if already set (button change location exists)</h3>
        <LocationPicker
          zoom={12}
          containerElement={<div style={{ height: '100%' }} />}
          mapElement={<div style={{ height: '400px' }} />}
          defaultPosition={{ lat, lng }}
          onChange={({ position: { lat, lng } }) => setGeopositionManual(lat, lng)}
        />
        <h3>interests here</h3>
      </div>
    )
  }
}

const mapStateToProps = ({ userSettings: { lat, lng } }) => ({ lat, lng })

const mapDispatchToProps = (dispatch) => {
  const { setGeopositionManual, watchPosition } = Creators
  return bindActionCreators({ setGeopositionManual, watchPosition }, dispatch)
}

export const connected = connect(mapStateToProps, mapDispatchToProps)(UserSettings)
