import axios from 'axios';
import Config from 'react-native-config';
import {getImages} from '../app/services/getImage';

jest.mock('axios');
jest.mock('react-native-config', () => ({
  BASE_URL: 'http://mock-base-url.com',
  API_KEY: 'mock-api-key',
}));

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('getImages', () => {
  beforeEach(() => {
    mockedAxios.get.mockClear();
  });

  it('fetches images with correct URL', async () => {
    const searchTerm = 'test';
    const expectedURL = `${Config.BASE_URL}/?key=${Config.API_KEY}&q=${searchTerm}&image_type=photo&per_page=20`;
    mockedAxios.get.mockResolvedValueOnce({data: {}});
    await getImages(searchTerm);
    expect(mockedAxios.get).toHaveBeenCalledWith(expectedURL);
  });
});
