import request from "superagent";
import { baseUrl } from "../constants";

export const LOGIN_SUCCES = "LOGIN_SUCCES";

export const login = code => (dispatch, getState) => {
  request
    .get(`${baseUrl}/test/${code}`)
    .then(response => {
      // console.log("What do we get as a response?", response);
      dispatch({
        type: LOGIN_SUCCES,
        payload: response.body
      });
    })
    .catch(console.error);
};
