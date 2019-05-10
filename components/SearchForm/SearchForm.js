/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { AppRegistry } from 'react-native';
import {
  Content,
  Form,
  Item,
  Label,
  Input,
  Button,
  Text,
  Container
} from 'native-base';
import { searchBeersByName } from '../../api/beer';
import { SearchResults } from '../SearchResults/SearchResults';

export const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const getResults = async () => {
    try {
      const results = await searchBeersByName(searchTerm);
      setResults(results);
    } catch (e) {
      console.error(e.message);
    }
  };

  const buttonProps = {
    disabled: searchTerm === '',
    onPress: getResults
  };

  return (
    <Container>
      <Form>
        <Item floatingLabel>
          <Label>Search for beers</Label>
          <Input
            testID="text-input"
            onChangeText={text => setSearchTerm(text)}
          />
        </Item>
        <Button {...buttonProps}>
          <Text>Search</Text>
        </Button>
      </Form>
      <SearchResults results={results} />
    </Container>
  );
};

AppRegistry.registerComponent('BeerSearchApp', () => SearchForm);
