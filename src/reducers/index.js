import { combineReducers } from 'redux';
import user from '../reducers/user';
import question from '../reducers/question';

export default combineReducers({
  user,
  question,
});
