// Import Superagent and set server URL (in this case, server runs locally)
import request from 'superagent';
const baseUrl = 'http://localhost:4000';

// Applicants can login with email address and access code provided by Admin: dispatch login action
// Authentication is not implemented yet (check status with Admin Client and Server)
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
