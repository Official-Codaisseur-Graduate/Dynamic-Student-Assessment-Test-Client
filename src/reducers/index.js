import { combineReducers } from 'redux';
import user from '../reducers/user';
import question from '../reducers/question';
import answer from '../reducers/answer';

export default combineReducers({
  user,
  question,
  answer,
});
