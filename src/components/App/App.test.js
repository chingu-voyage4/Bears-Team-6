import React from 'react'
import App from './App'
import {shallow} from 'enzyme'

const wrapper = shallow(<App/>);

describe('App', () => {
  it('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('has "We are." inside', () => {
    expect(wrapper.prop('children')).toEqual('We are.');
  });
});
