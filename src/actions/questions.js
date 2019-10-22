// Fetch test questions

export const GET_QUESTION = 'GET_QUESTION';

const getQuestion = question => ({
  type: GET_QUESTION,
  payload: question,
});

export const loadQuestion = id => (dispatch, getState) => {
  // when the state already contains a question, we don't fetch it again
  const state = getState();
  request(`${baseUrl}/admission-test/question/${id}`)
    .then(response => {
      console.log('response.body:', response.body);

      dispatch(getQuestion(response.body));
    })
    .catch(console.error);
};
