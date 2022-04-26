import weatherReducer from '../../reducers/weatherReducer';
import thunk from 'redux-thunk';
import {GET_WEATHER} from '../../types';
import {cloneDeep} from 'lodash';
import configureMockStore from 'redux-mock-store';
import {getWeather} from '../../actions/weatherActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('getWeather action test', () => {
  it('should reduce GET_WEATHER to get the weather details', () => {
    const initialState = {
      data: null,
      error: '',
    };
    const expectedAction = [
      {
        type: GET_WEATHER,
        payload: {res: '20'},
      },
    ];
    const modifiedInitialMockedState = cloneDeep(initialState);
    const action = weatherReducer(initialState, expectedAction);
    expect(action).toBeDefined();

    const store = mockStore(modifiedInitialMockedState);
    // TODO: Needs to update with mock store.
    // return store.dispatch(getWeather('sydney')).then(() => {
    //   expect(store.getActions()).toEqual(expectedAction);
    // });
  });
});
