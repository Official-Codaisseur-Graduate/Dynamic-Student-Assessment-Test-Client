import { LOGIN_SUCCES } from "../actions/auth"

export default function(state = null, action = {}) {
	switch (action.type) {
		case LOGIN_SUCCES:
			return action.payload
		default:
			return state
	}
}
