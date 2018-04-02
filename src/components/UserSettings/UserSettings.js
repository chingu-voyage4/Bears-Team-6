// @flow

import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LocationPicker from 'react-location-picker'
import { Creators } from '../../redux'

// will improve when interests actually exist
const makeInterests = (interests: Array<Object>) => (
  <ul>
    {interests.map((interest) => (
      <li key={interest.id}>
        {interest.name}
      </li>
      ))}
  </ul>
)

// will improve when meetings actually exist
const makeMeetings = (meetings: Array<Object>) => (
  <ul>
    {meetings.map((meeting) => (
      <li key={meeting.id}>
        {meeting.name}
      </li>
      ))}
  </ul>
)

export class UserSettings extends React.Component<*> {
  render() {
    const {
      latitude, longitude, name, email, interests, meetings, setGeopositionManual,
    } = this.props
    return (
      <div>
        <Helmet>
          <title>Settings</title>
        </Helmet>
        <h2>{`Welcome back ${name}`}</h2>
        <h3>{`email: ${email}`}</h3>
        <h3>location hidden if already set (button change location exists)</h3>
        <LocationPicker
          zoom={12}
          containerElement={<div style={{ height: '100%' }} />}
          mapElement={<div style={{ height: '400px' }} />}
          defaultPosition={{ lat: latitude, lng: longitude }}
          onChange={({ position: { lat: latitude, lng: longitude } }) => setGeopositionManual(latitude, longitude)}
        />
        <h3>Interests Here</h3>
        {makeInterests(interests)}
        <h3>Meetings Here</h3>
        {makeMeetings(meetings)}
      </div>
    )
  }
}

const mapStateToProps = ({
  userSettings: {
    latitude,
    longitude,
    name,
    email,
    interests,
    meetings,
  },
}) => ({
  latitude,
  longitude,
  name,
  email,
  interests,
  meetings,
})

const mapDispatchToProps = (dispatch) => {
  const { setGeopositionManual, watchPosition } = Creators
  return bindActionCreators({ setGeopositionManual, watchPosition }, dispatch)
}

export const connected = connect(mapStateToProps, mapDispatchToProps)(UserSettings)
