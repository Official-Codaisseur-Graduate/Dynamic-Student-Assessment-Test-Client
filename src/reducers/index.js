import { combineReducers } from 'redux';
import auth from '../reducers/auth';
import question from '../reducers/question';
import answer from '../reducers/answer';

export default combineReducers({
  auth,
  question,
  answer,
});
