
import { LOGIN } from "../actions/auth";

 const initialState = {
   jwt: null,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};


// OLD CODE WITH email, userId as well, implemented in initialState
// const initialState = {
//   jwt: null,
//   email: null,
//   userId: null,
// };
// export default function(state = initialState, action = {}) {
//   switch (action.type) {
//     case 'LOGIN':
//       return { ...state, ...action.payload };
//     default:
//       return state;
//   }
// }
