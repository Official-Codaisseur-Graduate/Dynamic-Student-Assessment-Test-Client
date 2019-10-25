import request from 'superagent';
import _ from 'lodash';

const baseUrl = 'http://localhost:4000';

// Fetch test questions
export const LOAD_QUESTIONS = 'LOAD_QUESTIONS';

const loadQuestions = question => ({
  type: LOAD_QUESTIONS,
  payload: question,
});

export const getQuestions = id => (dispatch, getState) => {
  const state = getState();
  const id = 1;

  request(`${baseUrl}/question/${id}`)
    .then(response => {
      console.log('response.body:', response.body);

      dispatch(loadQuestions(response.body));
    })
    .catch(console.error);
};
