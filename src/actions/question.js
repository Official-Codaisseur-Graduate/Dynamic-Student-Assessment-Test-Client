import request from "superagent";
import { baseUrl } from "../constants";

export const QUESTION_LOADED = "QUESTION_LOADED";
const questionloaded = question => ({
  type: QUESTION_LOADED,
  payload: question
});

export const response = ({ testId, answerId }) => (dispatch, getState) => {
  request
    .post(`${baseUrl}/response?testId=${testId}&answerId=${answerId}`)
    .then(response => {
      dispatch(questionloaded(response.body));
    })
    .catch(console.error);
};
