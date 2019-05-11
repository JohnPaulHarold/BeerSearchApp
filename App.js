/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import fetch from 'node-fetch';
import { createHttpLink } from 'apollo-link-http';

import { RootComponent } from './components/RootComponent/RootComponent';

console.log('GRAPHQL_ADDRESS %o', process.env.GRAPHQL_ADDRESS);
const uri = 'http://10.0.2.2:5000/graphql';

const link = createHttpLink({
  uri,
  fetch
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache
});

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <RootComponent />
    </ApolloProvider>
  );
};
