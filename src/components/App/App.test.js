import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

const wrapper = shallow(<App />)

describe('App', () => {
  it('renders as expected', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('has "We are." inside', () => {
    expect(wrapper.prop('children')).toEqual('We are.')
  })
})
