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
      if (answerId !== null) {
        dispatch(getHistory({ testId }));
      }
    })

    .catch(console.error);
};
// export const response = async ({ testId, answerId }) => async (
//   dispatch,
//   getState
// ) => {
//   try {
//     const result = await request.post(
//       `${baseUrl}/response?testId=${testId}&answerId=${answerId}`
//     );
//     await dispatch(questionloaded(result.body));
//     if (answerId !== null) {
//       await dispatch(getHistory(testId));
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

export const HISTORY_LOADED = "HISTORY_LOADED";
const historyLoaded = history => ({
  type: HISTORY_LOADED,
  payload: history
});

export const getHistory = ({ testId }) => (dispatch, getState) => {
  request
    .get(`${baseUrl}/history/${testId}`)
    .then(response => {
      dispatch(historyLoaded(response.body));
    })
    .catch(console.error);
};

export const loadPrevQuestion = answerId => (dispatch, getState) => {
  request
    .get(`${baseUrl}/load-prev/${answerId}`)
    .then(response => {
      dispatch(questionloaded(response.body));
    })
    .catch(console.error);
};
