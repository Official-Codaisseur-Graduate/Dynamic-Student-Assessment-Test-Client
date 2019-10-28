import store from '../store';

// This middleware console.logs the actions that are being dispatched and your next state for easier debugging
const loggerMiddleware = store => next => action => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
};

export default loggerMiddleware;
