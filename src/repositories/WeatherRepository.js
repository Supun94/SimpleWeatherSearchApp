import Api from './api/Api';
import configData from '../../config.json';

/**
 The base class for model Repositories.
 Repository classes provide full access to creating, saving, updating, and deleting model objects.

 The API to make network requests to the backend.
 */
export default class WeatherRepository {
  constructor() {
    this.api = new Api();
  }

  async getWeatherDetails(city) {
    const response = await this.api.get(
      `/data/2.5/forecast?q=${city}&appid=${configData.openweathermap_api_key}&units=metric`,
    );
    return response;
  }
}
