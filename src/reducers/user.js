const initialState = {
  jwt: null,
  email: null,
  userId: null,
};
export default function(state = initialState, action = {}) {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
