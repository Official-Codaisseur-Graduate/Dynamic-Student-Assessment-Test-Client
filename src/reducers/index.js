import { combineReducers } from "redux";
import question from "./question";
import auth from "./auth";
import history from "./history";

export default combineReducers({
  question,
  auth,
  history
});
