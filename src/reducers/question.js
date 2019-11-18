import { QUESTION_LOADED } from "../actions/question";
export default function(state = null, action = {}) {
  switch (action.type) {
    case QUESTION_LOADED:
      return action.payload;

    default:
      return state;
  }
}
