import { combineReducers } from "redux";
import question from "./question";
import answer from "./answer";
import auth from "./auth";
import history from "./history";

export default combineReducers({
  question,
  answer,
  auth,
  history
});
