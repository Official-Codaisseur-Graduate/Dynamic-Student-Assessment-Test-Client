export default function(state = null, action = {}) {
  switch (action.type) {
    case 'LOAD_ANSWERS':
      return action.payload;
    default:
      return state;
  }
}
