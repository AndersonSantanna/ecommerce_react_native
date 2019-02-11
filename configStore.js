import rootReducer from './src/reducers/index';

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const middleware = [thunk];

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);
