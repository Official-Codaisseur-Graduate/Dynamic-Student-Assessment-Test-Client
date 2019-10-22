export default function(state = null, action = {}) {
  switch (action.type) {
    case 'GET_QUESTION':
      return action.payload;
    default:
      return state;
  }
}
