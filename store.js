/* eslint-disable no-underscore-dangle */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import user from './App/reducers/user';
import chores from './App/reducers/chores';

/**
 * Defining all reducers
 */
const reducers = {
  user,
  chores,
};

/**
 * Create store with reducers, routing, logger and thunk
 */
const store = createStore(
  combineReducers({ ...reducers, }),
  applyMiddleware(
    thunk,
    logger,
  )
);

export default store;
/* eslint-enable */