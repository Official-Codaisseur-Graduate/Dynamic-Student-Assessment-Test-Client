import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';
import ReduxThunk from 'redux-thunk';
import loggerMiddleware from './middleware/loggerMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(ReduxThunk),
  applyMiddleware(loggerMiddleware)
);

const store = createStore(reducer, enhancer);

export default store;
