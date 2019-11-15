import { combineReducers } from 'redux';
import auth from './auth';
import question from './question';
import answer from './answer';
import test from './test'

export default combineReducers({
  auth,
  question,
  answer,
  test
});
