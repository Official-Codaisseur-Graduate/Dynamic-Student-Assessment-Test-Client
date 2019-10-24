import request from 'superagent';
const baseUrl = 'http://localhost:4000';

// Fetch test questions
export const LOAD_QUESTIONS = 'LOAD_QUESTIONS';

const loadQuestions = question => ({
  type: LOAD_QUESTIONS,
  payload: question,
});

export const getQuestions = id => (dispatch, getState) => {
  // when the state already contains a question, we don't fetch it again
  const state = getState();
  const index = 1;
  request(`${baseUrl}/question/${index}`)
    .then(response => {
      console.log('response.body:', response.body);

      dispatch(loadQuestions(response.body));
    })
    .catch(console.error);
};

// Fetch matching answers per diplayed question
export const LOAD_ANSWERS = 'LOAD_ANSWERS';

const loadAnswers = answer => ({
  type: LOAD_ANSWERS,
  payload: answer,
});

export const getAnswer = id => (dispatch, getState) => {
  // when the state already contains a question, we don't fetch it again
  const state = getState();
  const id = 1;
  request(`${baseUrl}/answer/${id}`)
    .then(response => {
      console.log('response.body:', response.body);

      dispatch(loadAnswers(response.body));
    })
    .catch(console.error);
};
