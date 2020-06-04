import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import Navbar from './navbar';

describe('<Navbar />', () => {
  it('testing account address in <Navbar /> component', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find(".account_address")).toBeDefined();
  });
});


