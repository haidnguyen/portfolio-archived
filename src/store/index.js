import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

const middlewares = [];

const enhancer = middlewares => {
  return process.env.NODE_ENV === 'development'
    ? composeWithDevTools({
        trace: true,
        traceLimit: 25,
      })(applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares);
};

const store = createStore(rootReducer, undefined, enhancer(middlewares));

export default store;
