import React, { Fragment } from 'react';
import { AppRegistry, FlatList } from 'react-native';
import { Container, Text, View, ListItem } from 'native-base';
import { SearchResultsStyles as s } from './SearchResults.style';

export const SearchResults = props => {
  const { results } = props;

  const renderItem = listItem => {
    const { item } = listItem;
    const { name, image_url } = item;

    return (
      <ListItem>
        <Text>{name}</Text>
      </ListItem>
    );
  };

  return (
    <Container>
      {results.length > 0 ? (
        <Fragment>
          <FlatList
            style={s.resultsList}
            data={results}
            keyExtractor={item => `${item.id}`}
            renderItem={renderItem}
          />
        </Fragment>
      ) : null}
    </Container>
  );
};

AppRegistry.registerComponent('BeerSearchApp', () => SearchResults);