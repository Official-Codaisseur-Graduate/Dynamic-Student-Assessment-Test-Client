import { combineReducers } from 'redux';
import user from '../reducers/user';
import question from '../reducers/question';
//import answers from '../reducers/answer';

export default combineReducers({
  user,
  question,
});
