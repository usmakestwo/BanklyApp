/* eslint no-underscore-dangle: 0 */

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './App/reducers';
import createLogger from './App/logger/logger';

const initialState = {};
const middleware = [thunk];

let enhancer = applyMiddleware(...middleware);

// See https://github.com/rackt/redux/releases/tag/v3.1.0
const store = createStore(rootReducer, initialState, enhancer);

export default store;