import { combineReducers } from 'redux';
import auth from '../reducers/auth';
import question from '../reducers/question';
import questions from '../reducers/questions';
import answer from '../reducers/answer';

export default combineReducers({
  auth,
  question,
  answer,
  questions
});
