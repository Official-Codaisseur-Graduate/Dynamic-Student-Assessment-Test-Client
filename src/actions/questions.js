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

// // Fetch matching answers for the displayed question
// export const LOAD_ANSWERS = 'LOAD_ANSWERS';

// const loadAnswers = answer => ({
//   type: LOAD_ANSWERS,
//   payload: answer,
// });

// export const getAnswer = id => (dispatch, getState) => {
//   // when the state already contains a question, we don't fetch it again
//   // id is hardcoded until endpoint is fixed, to be changed
//   const state = getState();
//   let id = 0;
//   request(`${baseUrl}/answer/question/${id}`)
//     .then(response => {
//       console.log('response.body:', response.body);

//       // Shuffle the array to display answers always in a different order
//       const shuffledAnswers = _.shuffle(response.body);

//       dispatch(loadAnswers(shuffledAnswers));
//     })
//     .catch(console.error);
// };
