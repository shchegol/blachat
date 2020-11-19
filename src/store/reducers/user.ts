import initState from "../initState";
import * as ACTION from "../actions/user";

export default function userReducer(
    state = initState,
    action: { type: string, payload: any }
) {
    switch (action.type) {
        case ACTION.USER_FETCH:
        case ACTION.USER_CHANGE_PROFILE:
        case ACTION.USER_CHANGE_AVATAR:
        case ACTION.USER_CHANGE_PASSWORD:
        case ACTION.USER_GET_BY_ID:
        case ACTION.USER_SEARCH: {
            const data = action.payload;
            return Object.assign({}, state, data)
        }
    }

    return state;
}