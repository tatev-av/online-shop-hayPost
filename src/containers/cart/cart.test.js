import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import Cart from './index'

configure({adapter: new Adapter()})

test('The Cart page have title', () => {
    const cartOptions = shallow(<Cart />);
    expect(cartOptions.find('h1'))
});
      