export default function(state = null, action = {}) {
  switch (action.type) {
    case 'SEND_ANSWER':
      return action.payload;
    default:
      return state;
  }
}
