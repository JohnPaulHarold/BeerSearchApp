import React from 'react';
import { Query } from 'react-apollo';
import { Text } from 'native-base';
import { SearchResults } from '../components/SearchResults/SearchResults';
import { GET_BEERS_BY_NAME } from '../queries/getBeersByName';

export const BeerResults = ({ term }) => {
  console.log('BeerResults: term %o', term);
  return (
    <Query query={GET_BEERS_BY_NAME} variables={{ name: term }}>
      {({ loading, error, data }) => {
        if (loading) return <Text>Loading...</Text>;
        if (error) {
          return <Text>{`Error! ${JSON.stringify(error, null, 2)}`}</Text>;
        }

        const { beers } = data;

        return <SearchResults results={beers} />;
      }}
    </Query>
  );
};
