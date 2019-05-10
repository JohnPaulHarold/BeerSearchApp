import fetch from 'node-fetch';
export const BASE_URL = 'https://api.punkapi.com/v2';

const returnJson = res => res.json();
const returnBody = json => json;

export const searchBeersByName = term => {
  const fixedTerm = term.replace(/ /g, '_');
  const url = `${BASE_URL}/beers?beer_name=${fixedTerm}`;

  return fetch(url)
    .then(returnJson)
    .then(returnBody);
};
