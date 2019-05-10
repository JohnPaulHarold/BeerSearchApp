/**
 * @format
 */
jest.useFakeTimers();

import 'react-native';
import React from 'react';
import { Input, Button } from 'native-base';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { render, fireEvent, act } from 'react-native-testing-library';
import { SearchForm } from './SearchForm';
import { searchBeersByName } from '../../api/beer';

jest.mock('../../api/beer');

describe('SearchForm', () => {
  it('renders correctly', () => {
    const render = renderer.create(<SearchForm />);
    expect(render).toBeTruthy();
    expect(render).toMatchSnapshot();
  });

  it('should call searchBeersByName', async () => {
    const { getByType, getByTestId } = render(<SearchForm />);
    const inputEl = getByTestId('text-input');
    const buttonEl = getByType(Button);
    const SEARCH_TERM = 'punk';

    // act(() => {
    fireEvent.changeText(inputEl, SEARCH_TERM);
    fireEvent.press(buttonEl);

    expect(await searchBeersByName).toHaveBeenCalledWith(SEARCH_TERM);
    // });
  });
});
