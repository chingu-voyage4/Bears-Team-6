// @flow

import React from 'react'
import { shallow } from 'enzyme'
import { connected as Timestamp } from './Timestamp'

const wrapper = shallow(<Timestamp />)

describe('Timestamp', () => {
  it('renders as expected', () => {
    expect(wrapper.dive()).toMatchSnapshot()
  })
})
