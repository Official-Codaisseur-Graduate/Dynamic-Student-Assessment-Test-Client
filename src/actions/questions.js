// Import Superagent and set server URL (in this case, server runs locally)
import request from 'superagent';
const baseUrl = 'http://localhost:4000';

// Dispatch action that fetches a question object and the matching answers array
export const LOAD_QUESTIONS = 'LOAD_QUESTIONS';

const loadQuestions = question => ({
  type: LOAD_QUESTIONS,
  payload: question,
});

// Get request to fetch a test question object from db (includes the matching answers array)
export const getQuestions = index => (dispatch, getState) => {
  // const state = getState();
  const index = 1;

  request(`${baseUrl}/question/${index}`)
    .then(response => {
      console.log('response.body:', response.body);

      dispatch(loadQuestions(response.body));
    })
    .catch(console.error);
};
