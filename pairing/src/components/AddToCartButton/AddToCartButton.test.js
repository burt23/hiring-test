import React from 'react'
import { shallow } from 'enzyme'
import AddToCartButton from './AddToCartButton'

const mockProps = {
  setMattressCount: jest.fn(),
  mattressCount: 1
}
const wrapper = shallow(<AddToCartButton {...mockProps} />)

describe('AddToCartButton', () => {
  it('should render the AddToCartButton Component correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('call setMattressCount with mattressCount + 1', () => {
    wrapper.find('button').simulate('click')
    expect(mockProps.setMattressCount).toHaveBeenCalledWith(mockProps.mattressCount + 1)
  })
})
