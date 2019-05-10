/**
 * @format
 */
jest.useFakeTimers();

import 'react-native';
import React from 'react';
import { App } from './App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('App', () => {
  it('renders correctly', () => {
    const render = renderer.create(<App />);
    expect(render).toBeTruthy();
    expect(render).toMatchSnapshot();
  });
});
