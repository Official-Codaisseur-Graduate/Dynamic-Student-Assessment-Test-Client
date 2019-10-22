import request from 'superagent';
const baseUrl = 'http://localhost:4000';

export const LOGIN = 'LOGIN';

export const login = (email, code) => dispatch => {
  request
    .post(`${baseUrl}/login`)
    .send({ email, code })
    .then(response => {
      //I expect the response to have a jwt
      const { jwt, userId, email } = response.body;
      dispatch({
        type: LOGIN,
        payload: { jwt, userId, email },
      });
    })
    .catch(console.error);
};
