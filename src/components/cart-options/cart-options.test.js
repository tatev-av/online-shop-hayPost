import React from 'react';
import {shallow, configure} from 'enzyme';
import CartOptions from './index';
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()})

test('Change "proceed to checkout" to "sending your request" ', async  () => {
  const cartOptions = shallow(<CartOptions />);
  expect( cartOptions.find('.checkout').text().trim()).toEqual('Proceed to Checkout');
  await  cartOptions.find('.checkout').simulate('click');
  expect(cartOptions.find('.checkout').text().trim()).toEqual('Sending Your Request...');
});
