/**
 * @format
 */
jest.useFakeTimers();

import 'react-native';
import React from 'react';
import { MockedProvider } from 'react-apollo/test-utils';
import { Button } from 'native-base';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { render, fireEvent, act } from 'react-native-testing-library';
import { SearchForm } from './SearchForm';
import { searchBeersByName } from '../../api/beer';
import { GET_BEERS_BY_NAME } from '../../queries/getBeersByName';
import { get } from 'https';

jest.mock('../../api/beer');

const request = {
  query: GET_BEERS_BY_NAME,
  variables: {
    name: 'peace'
  }
};

const mockSuccess = [
  {
    request,
    result: {
      data: {
        beers: [
          {
            id: '73',
            name: 'Black Eyed King Imp - Vietnamese Coffee Edition',
            image_url: 'https://images.punkapi.com/v2/73.png',
            __typename: 'Beer'
          },
          {
            id: '82',
            name: 'Hopped-Up Brown Ale - Prototype Challenge',
            image_url: 'https://images.punkapi.com/v2/82.png',
            __typename: 'Beer'
          },
          {
            id: '102',
            name: 'Peach Therapy',
            image_url: 'https://images.punkapi.com/v2/keg.png',
            __typename: 'Beer'
          },
          {
            id: '166',
            name: 'Vagabond Pale ALe - Prototype Challenge',
            image_url: 'https://images.punkapi.com/v2/166.png',
            __typename: 'Beer'
          },
          {
            id: '179',
            name: 'How To Disappear Completely',
            image_url: 'https://images.punkapi.com/v2/179.png',
            __typename: 'Beer'
          },
          {
            id: '274',
            name: 'Prototype Black Rye IPA',
            image_url: null,
            __typename: 'Beer'
          }
        ]
      }
    }
  }
];

const mockError = [
  {
    request,
    error: new Error('Something went wrong')
  }
];

const mockSearchTerm = 'peace';

describe('SearchForm', () => {
  it('renders correctly', () => {
    const render = renderer.create(
      <MockedProvider mocks={mockSuccess} addTypename={false}>
        <SearchForm />
      </MockedProvider>
    );
    expect(render).toBeTruthy();
    expect(render).toMatchSnapshot();
  });

  it('handles search', () => {
    const { getByTestId } = render(
      <MockedProvider mocks={mockSuccess} addTypename={false}>
        <SearchForm />
      </MockedProvider>
    );

    const textEl = getByTestId('text-input');
    const btnEl = getByTestId('search-btn');

    fireEvent.changeText(textEl, mockSearchTerm);
    fireEvent.press(btnEl);
  });

  it('handles error', () => {
    const { getByTestId } = render(
      <MockedProvider mocks={mockError} addTypename={false}>
        <SearchForm />
      </MockedProvider>
    );

    const textEl = getByTestId('text-input');
    const btnEl = getByTestId('search-btn');

    fireEvent.changeText(textEl, mockSearchTerm);
    fireEvent.press(btnEl);
  });
});
