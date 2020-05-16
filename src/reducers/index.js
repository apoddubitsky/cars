// libraries
import { combineReducers } from 'redux';
// reducers
import cars from './cars';
import pagination from './pagination';
import modifiedCars from './modifiedCars';

const rootReducer = combineReducers({
  cars,
  pagination,
  modifiedCars,
});

export default rootReducer;
