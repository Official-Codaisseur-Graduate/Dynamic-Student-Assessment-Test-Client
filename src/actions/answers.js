const superagent = require('superagent');
const baseUrl = 'http://localhost:4000';

// Post user to db answer for the displayed question
export const SEND_ANSWER = 'SEND_ANSWER';

const userAnswer = answer => ({
  type: SEND_ANSWER,
  payload: answer,
});

export const postUserAnswer = () => dispatch => {
  superagent
    .post(`${baseUrl}/userAnswer`)
    // Change the request body
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
