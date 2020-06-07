import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {cleanup, fireEvent, render} from '@testing-library/react';
import renderer from 'react-test-renderer';
Enzyme.configure({adapter: new Adapter()});

import Navbar from './navbar';

describe('<Navbar />', () => {
  it('testing account address in <Navbar /> component', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find(".account_address")).toBeDefined();
  });
});

afterEach(cleanup);
it('Test that the correct user address is displayed when it an account is supplied to the components props'
, () => {
  const {getByText} = render(
    <Navbar account={'hui'} />,
  );
  expect(getByText(/hui/i)).toBeTruthy();
});
