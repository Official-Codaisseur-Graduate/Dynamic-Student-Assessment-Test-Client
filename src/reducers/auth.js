import { LOGIN } from "../actions/auth"

const jwt = localStorage.getItem("jwt")
const initialState = jwt ? jwt : null;

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}


// import { LOGIN } from "../actions/auth";

// const jwt = localStorage.getItem("jwt")
// const initialState = jwt ? jwt : null;


// export default (state = initialState, action = {}) => {
//   switch (action.type) {
//     case LOGIN:
//     return action.payload
//     default:
//       return state;
//   }
// };
