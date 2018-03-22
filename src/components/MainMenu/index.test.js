// @flow

import React from 'react'
import { shallow } from 'enzyme'
import { MainMenu } from './index'

describe('Timestamp', () => {
  const wrapper = shallow(<MainMenu />)
  it('renders as expected', () => {
    expect(wrapper.dive()).toMatchSnapshot()
  })
})
