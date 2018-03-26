// @flow

import React from 'react'
import { shallow } from 'enzyme'
import { createMockStore } from 'redux-test-utils'
import { MainMenu } from '.'
import { reducers } from '../../redux'

const initialReduxState = reducers({}, {})
const store = createMockStore(initialReduxState)

describe('MainMenu', () => {
  const wrapper = shallow(<MainMenu />, { context: { store } })
  it('renders as expected', () => {
    expect(wrapper.dive()).toMatchSnapshot()
  })
})
