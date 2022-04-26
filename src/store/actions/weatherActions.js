import {GET_WEATHER, SET_ERROR} from '../types';
import WeatherRepository from '../../repositories/WeatherRepository';

const weatherRepository = new WeatherRepository();

export const getWeather = (city, onSuccess = () => {}, onError = () => {}) => {
  return async dispatch => {
    try {
      const resData = await weatherRepository
        .getWeatherDetails(city)
        .then(data => getGroupedWeatherData(data));
      dispatch({
        type: GET_WEATHER,
        payload: resData,
      });
      onSuccess();
    } catch (err) {
      dispatch(setError(err.message));
      onError();
    }
  };
};

const setError = err => {
  return {
    type: SET_ERROR,
    payload: err,
  };
};

/**
 The base class for model Repositories.
 Repository classes provide full access to creating, saving, updating, and deleting model objects.

 The Repository a database for long-term storage, and the API
 to make network requests to the backend.
 */
const getGroupedWeatherData = data => {
  const groupedData = data.list.reduce((days, row) => {
    const date = row.dt_txt.split(' ')[0];
    days[date] = [...(days[date] ? days[date] : []), row];
    return days;
  }, {});
  const weatherData = [];
  for (let date of Object.keys(groupedData)) {
    weatherData.push(groupedData[date][0]);
  }
  data.list = weatherData.slice(0, 4);
  return data;
};
