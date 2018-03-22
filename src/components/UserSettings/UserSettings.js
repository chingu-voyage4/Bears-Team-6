import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LocationPicker from 'react-location-picker'
import { Creators } from '../../redux'

export class UserSettings extends React.PureComponent<*> {
  constructor(props) {
    super(props)
    console.log('constructor')
    this.props.setGeoposition(10, 20)
  }

  render() {
    const { lat, lng, setGeoposition } = this.props
    return (
      <div>
        <Helmet>
          <title>Settings</title>
        </Helmet>
        <button onClick={() => navigator.geolocation.getCurrentPosition(() => {console.log('did it!');setGeoposition(10, 20)})} >Watch my position</button>
        <h3>location hidden if already set (button change location exists)</h3>
        <LocationPicker
          zoom={10}
          containerElement={<div style={{ height: '100%' }} />}
          mapElement={<div style={{ height: '400px' }} />}
          defaultPosition={{ lat, lng }}
          onChange={({ position: { lat, lng } }) => setGeoposition(lat, lng)}
        />
        <h3>interests here</h3>
      </div>
    )
  }
}

const mapStateToProps = ({
  userSettings: { lat, lng },
}) => ({ lat, lng })

const mapDispatchToProps = (dispatch) => {
  const { setGeoposition } = Creators
  return bindActionCreators(
    { setGeoposition },
    dispatch,
  )
}

export const connected = connect(mapStateToProps, mapDispatchToProps)(UserSettings)
