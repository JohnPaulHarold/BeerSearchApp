import gql from 'graphql-tag';

export const GET_BEERS_BY_NAME = gql`
  query GetBeersByName($name: String!) {
    beers(name: $name) {
      id
      name
      image_url
    }
  }
`;
