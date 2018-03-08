// @flow

import React from 'react'
import { shallow } from 'enzyme'
import { createMockStore } from 'redux-test-utils'
import { connected as Timestamp } from './Timestamp'
import { reducers, ActionTypes } from '../../redux'

const initialReduxState = reducers({}, {})
const store = createMockStore(initialReduxState)

describe('Timestamp', () => {
  expect(store.isActionTypeDispatched(ActionTypes.START_CHANNEL)).toBe(false)
  expect(store.isActionTypeDispatched(ActionTypes.SUBSCRIBE_TIMESTAMP)).toBe(false)

  const wrapper = shallow(<Timestamp />, { context: { store } })
  it('renders as expected', () => {
    expect(wrapper.dive()).toMatchSnapshot()
  })

  it('dispatches START_CHANNEL action in lifecycle methods', () => {
    expect(store.isActionTypeDispatched(ActionTypes.START_CHANNEL)).toBe(true)
  })

  it('dispatches SUBSCRIBE_TIMESTAMP action in lifecycle methods', () => {
    expect(store.isActionTypeDispatched(ActionTypes.SUBSCRIBE_TIMESTAMP)).toBe(true)
  })
})
