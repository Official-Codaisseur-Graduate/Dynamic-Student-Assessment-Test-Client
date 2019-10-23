export default function(state = null, action = {}) {
  switch (action.type) {
    case 'LOAD_QUESTIONS':
      return action.payload;
    default:
      return state;
  }
}
