export default function(state = null, action = {}) {
  switch (action.type) {
    case 'GET_QUESTIONS':
      return action.payload;
    default:
      return state;
  }
}
