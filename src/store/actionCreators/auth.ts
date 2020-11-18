import {authApi} from "../../API/AuthAPI";
import {IStringObject} from "../../utils/ts/interfaces";
import {store} from "../initStore";
import * as ACTION  from "../actions/auth";

export const fetchtUser = () => {
    return new Promise(resolve => {
        authApi
            .fetchtUser()
            .then((res: XMLHttpRequest) => {
                if (res.status === 200) {
                    store.dispatch({
                        type: ACTION.AUTH_FETCH,
                        payload: {
                            isLoggedIn: true,
                        }
                    })
                }

                resolve()
            })
    })
}

export const signup = (props: IStringObject) => {
    authApi
        .signup(props)
        .then((res: XMLHttpRequest) => {
            console.log("a_signup", res)

            return {
                type: ACTION.AUTH_SIGNUP,
                payload: {}
            }
        })
}

export const signin = (props: IStringObject) => {
    authApi
        .signin(props)
        .then((res: XMLHttpRequest) => {
            console.log("a_signin", res)

            return {
                type: ACTION.AUTH_SIGNIN,
                payload: {}
            }
        })
}

export const logout = () => {
    authApi
        .logout()
        .then((res: XMLHttpRequest) => {
            console.log("a_logout", res)

            return {
                type: ACTION.AUTH_LOGOUT,
                payload: {}
            }
        })
}