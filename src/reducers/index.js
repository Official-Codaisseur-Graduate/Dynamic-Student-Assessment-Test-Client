import { combineReducers } from 'redux';

import auth from './auth';
import questions from "./questions"
import question from './question';
import answer from './answer';
import test from './test'


export default combineReducers({
  auth,
  question,
  answer,
  questions,
  test
});
