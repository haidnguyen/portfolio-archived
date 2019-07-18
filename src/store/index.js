import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(createLogger());
};

const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(...middlewares)
);

export default store;