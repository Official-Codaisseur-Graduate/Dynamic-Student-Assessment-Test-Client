import request from 'superagent';
const baseUrl = 'http://localhost:4000';

// Fetch test questions
export const GET_QUESTIONS = 'GET_QUESTIONS';

const getQuestions = question => ({
  type: GET_QUESTIONS,
  payload: question,
});

export const loadQuestions = () => (dispatch, getState) => {
  // when the state already contains a question, we don't fetch it again
  const state = getState();
  request(`${baseUrl}/question`)
    .then(response => {
      console.log('response.body:', response.body);

      dispatch(getQuestions(response.body));
    })
    .catch(console.error);
};
