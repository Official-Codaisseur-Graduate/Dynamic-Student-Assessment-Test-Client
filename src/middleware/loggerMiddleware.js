import store from '../store';

// console.logs actions as they are being dispatched and next state for easier debugging
const loggerMiddleware = store => next => action => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
};

export default loggerMiddleware;
