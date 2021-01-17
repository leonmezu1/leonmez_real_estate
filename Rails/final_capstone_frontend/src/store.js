/* eslint-disable no-underscore-dangle */

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const middleware = [thunk];
const enhancers = [applyMiddleware(...middleware)];

if (process.env.NODE_ENV === 'development') {
  enhancers.push(
    window.__REDUX_DEVTOOLS_EXTENSION__
      && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
}

const store = createStore(reducer, compose(...enhancers));

export default store;
