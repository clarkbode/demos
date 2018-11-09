import { createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import { state } from './Reducers';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(logger, reduxThunk)
)

export const store = createStore(
  state,
  enhancer
);