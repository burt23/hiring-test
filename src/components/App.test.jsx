import React from 'react'

import App from './App'

import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { configure, mount } from 'enzyme'


describe('App component', () => {
  let wrapper
  configure({ adapter: new Adapter() })
  beforeEach(() => wrapper = mount(
    <App />
  ))

  it('should have counter at 0', () => {
    expect(wrapper.find('span.counter').text()).toBe("0")
  })

  it('should increment counter by 1', () => {
    wrapper.find('.buy_button').simulate('click')
    expect(wrapper.find('span.counter').text()).toBe("1")
  })
})