import WeatherRepository from '../WeatherRepository';

const weatherRepository = new WeatherRepository();
const mockedApi = jest.spyOn(weatherRepository.api, 'get');
const city = 'sydney';

describe('WeatherRepository tests', () => {
  it('should return the respective Weather data when getWeatherDetails called', async () => {
    const successResponse = {cod: '200'};
    mockedApi.mockImplementationOnce(() => Promise.resolve(successResponse));
    const response = await weatherRepository.getWeatherDetails(city);
    expect(response).not.toBeNull();
  });
  it('failure scenario, internal server error ', async () => {
    const error = new Error('Error');
    mockedApi.mockImplementationOnce(() => {
      throw error;
    });
    try {
      await await weatherRepository.getWeatherDetails(city);
    } catch (e) {
      expect(e).toEqual(new Error('Error'));
    }
  });
});
