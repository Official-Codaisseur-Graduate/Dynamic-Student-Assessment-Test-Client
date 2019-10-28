// Import Superagent and set server URL (in this case, server runs locally)
const superagent = require('superagent');
const baseUrl = 'http://localhost:4000';

// Dispatch an action that posts the user's answer to the database
export const SEND_ANSWER = 'SEND_ANSWER';

const userAnswer = answer => ({
  type: SEND_ANSWER,
  payload: answer,
});

// Post request to save user's answer in the database (to UserAnswers table)
// The sent data is hardcoded a.t.m. ('answerId: '30', etc.') --> To be replaced with the correct input from the answer's form
export const postUserAnswer = () => dispatch => {
  superagent
    .post(`${baseUrl}/userAnswer`)
    .send({
      answerId: '30',
      categoryId: '2',
      correct: 'true',
      userId: '1',
      questionId: '2',
    })
    .then(response => {
      console.log('request.body:', response.body);
      dispatch(userAnswer(response.body));
    })
    .catch(console.error);
};
