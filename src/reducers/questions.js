import { QUESTION_LOADED } from "../actions/questions";
export default function(state = [], action = {}) {
  switch (action.type) {
    case QUESTION_LOADED:
      return [...state,action.payload];

    default:
      return state;
  }
}
