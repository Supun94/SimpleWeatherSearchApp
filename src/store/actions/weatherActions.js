import {GET_WEATHER, SET_ERROR} from '../types';
import WeatherRepository from '../../repositories/WeatherRepository';
import {getGroupedWeatherData} from '../../utils/weatherUtil';

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
