import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../reducers'

const middlewares = []

if (process.env.NODE_ENV === 'development') {
  middlewares.push(createLogger())
}

const enhancer = middlewares => {
  return process.env.NODE_ENV === 'development'
    ? composeWithDevTools({
        trace: true,
        traceLimit: 25,
      })(applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares)
}

const store = createStore(rootReducer, undefined, enhancer(middlewares))

export default store
