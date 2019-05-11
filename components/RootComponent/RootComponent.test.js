/**
 * @format
 */
jest.useFakeTimers();

import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { RootComponent } from './RootComponent';

describe('RootComponent', () => {
  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    const render = renderer.render(<RootComponent />);
    expect(render).toBeTruthy();
    expect(render).toMatchSnapshot();
  });
});
