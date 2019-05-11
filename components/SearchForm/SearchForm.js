/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { AppRegistry } from 'react-native';
import { Form, Item, Label, Input, Button, Text, Container } from 'native-base';
import { SearchResults } from '../SearchResults/SearchResults';
import { ApolloConsumer } from 'react-apollo';
import { GET_BEERS_BY_NAME } from '../../queries/getBeersByName';

export const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState(null);

  return (
    <ApolloConsumer>
      {client => (
        <Container>
          <Form>
            <Item floatingLabel>
              <Label>Search for beers</Label>
              <Input testID="text-input" onChangeText={setSearchTerm} />
            </Item>
            <Button
              testID="search-btn"
              disabled={searchTerm === ''}
              onPress={async () => {
                try {
                  const { data } = await client.query({
                    query: GET_BEERS_BY_NAME,
                    variables: { name: searchTerm }
                  });

                  setResults(data.beers);
                } catch (e) {
                  console.error(e.message);
                }
              }}
            >
              <Text>Search</Text>
            </Button>
          </Form>
          <SearchResults results={results} />
        </Container>
      )}
    </ApolloConsumer>
  );
};

AppRegistry.registerComponent('BeerSearchApp', () => SearchForm);
