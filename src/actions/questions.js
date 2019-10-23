import request from 'superagent';
const baseUrl = 'http://localhost:4000';

// Fetch test questions
export const LOAD_QUESTIONS = 'LOAD_QUESTIONS';

const loadQuestions = question => ({
  type: LOAD_QUESTIONS,
  payload: question,
});

export const getQuestions = () => (dispatch, getState) => {
  // when the state already contains a question, we don't fetch it again
  const state = getState();
  request(`${baseUrl}/question`)
    .then(response => {
      console.log('response.body:', response.body);

      dispatch(loadQuestions(response.body));
    })
    .catch(console.error);
};
