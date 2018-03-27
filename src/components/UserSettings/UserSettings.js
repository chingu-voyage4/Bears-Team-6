import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LocationPicker from 'react-location-picker'
import { Creators } from '../../redux'

export class UserSettings extends React.Component<*> {
  isLocationSetManually
  render() {
    const { latitude, longitude, setGeopositionManual } = this.props
    return (
      <div>
        <Helmet>
          <title>Settings</title>
        </Helmet>
        <div>
          <h2>Your position on a map</h2>
          <p>Your position will not be shared directly.</p>
          <p>We use it to suggest a meeting place equally distant from every person.</p>
        </div>
        <LocationPicker
          zoom={12}
          containerElement={<div style={{ height: '100%' }} />}
          mapElement={<div style={{ height: '400px' }} />}
          defaultPosition={{ lat: latitude, lng: longitude }}
          onChange={({ position: { lat: latitude, lng: longitude } }) => setGeopositionManual(latitude, longitude)}
        />
        <div>
          <h2>Your interests</h2>
          <p>You can select up to 10 topics or hashtags</p>
          <p>Your #hashtag interests will not be visible for other users, even in search.</p>
        </div>
        <ul>
          <li>
            <h2>Rock music players</h2>
            <p>Meeting has been set: 14 April, at 9:00 PM. Hendrixville, Bowie avenue, 1.</p>
            <p>It is 24 miles from you.</p>
            <button>🗑</button>
          </li>
          <li>
            <h2>Jazz dancers</h2>
            <p>Need to choose a leader</p>
            <p>It is 4 miles from you</p>
            <button>🗑</button>
          </li>
        </ul>
        <p>I wish to be a leader in the meeting, I know how to choose a right time and place.</p>
        <p>I am ready to meet and potentially available for long-period collaboration this time.</p>
        <h4>3 miles (5 people here)</h4>
        <p>-------<button>O</button>------</p>
        <p>Maximum distance you are ready to go to take part in meeting about that</p>
        <p><button>Add</button> (7 remaining)</p>
      </div>
    )
  }
}

const mapStateToProps = ({ userSettings: { latitude, longitude } }) => ({
  latitude,
  longitude,
})

const mapDispatchToProps = (dispatch) => {
  const { setGeopositionManual, watchPosition } = Creators
  return bindActionCreators({ setGeopositionManual, watchPosition }, dispatch)
}

export const connected = connect(mapStateToProps, mapDispatchToProps)(UserSettings)
