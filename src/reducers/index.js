import { combineReducers } from 'redux';
import question from './question';
import answer from './answer';
import auth from './auth'


export default combineReducers({
  question,
  answer,
  auth
});
