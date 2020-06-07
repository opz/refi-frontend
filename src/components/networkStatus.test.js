import React from 'react';
import Enzyme from 'enzyme';
import {cleanup, fireEvent, render} from '@testing-library/react';
import NetworkStatus from './networkStatus';
import renderer from 'react-test-renderer';


afterEach(cleanup);
it('Test that the disconnect button displays when the user authenticates', () => {
  const {getByText} = render(
    <NetworkStatus auth={true} />,
  );
  expect(getByText(/disconnect/i)).toBeTruthy();
});

it('est that the connect button displays when the user de-authenticates', () => {
  const {getByText} = render(
    <NetworkStatus auth={false} />,
  );
  expect(getByText(/connect/i)).toBeTruthy();
});
