import { combineReducers } from 'redux';
import user from '../reducers/user';
import questions from '../reducers/question';

export default combineReducers({
  user,
  questions,
});
