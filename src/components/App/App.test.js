// @flow

import React from 'react'
import { shallow } from 'enzyme'
import { App } from './App'

const wrapper = shallow(<App />)

describe('App', () => {
  it('renders as expected', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
