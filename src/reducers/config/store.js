// libraries
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
// reducers
import rootReducer from '../index';

function middleware({ dispatch, getState }) {
  return (next) => (action) => {
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }
    return next(action);
  };
}

const store = createStore(rootReducer, applyMiddleware(middleware, logger));

export default store;
