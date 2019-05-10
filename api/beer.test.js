import nock from 'nock';
import { BASE_URL, searchBeersByName } from './beer';
import { mockApiResponse } from '../mocks/api/data';

describe('API', () => {
  describe('searchBeersByName', () => {
    it('should fetch successfully', async () => {
      nock(BASE_URL)
        .get(`/beers`)
        .query({
          beer_name: 'punk'
        })
        .reply(200, mockApiResponse);

      const res = await searchBeersByName('punk');

      expect(res).toEqual(mockApiResponse);
    });
  });
});
