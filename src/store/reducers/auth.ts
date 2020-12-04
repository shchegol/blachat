import initState from '../initState';
import * as ACTION from '../actions/auth';

export default function authReducer(
  state = initState,
  action: { type: string, payload: any },
) {
  switch (action.type) {
    case ACTION.AUTH_FETCH:
    case ACTION.AUTH_SIGNUP:
    case ACTION.AUTH_SIGNIN:
    case ACTION.AUTH_LOGOUT: {
      const data = action.payload;
      return { ...state, ...data };
    }
    default: return state;
  }
}
