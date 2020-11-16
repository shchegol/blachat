import {IStringObject} from '../utils/ts/interfaces'
import {authAPIInstance} from "./HTTP";

class AuthApi {
    signup(body: IStringObject) {
        return new Promise(resolve => {
            const headers = {
                "accept": "application/json",
                "Content-Type": "application/json"
            }

            authAPIInstance
                .post(`/signup`, {body, headers})
                .then((res: XMLHttpRequest) => resolve(res))
        })
    }

// {
//     "login": "login123456",
//     "password": "123456"
// }
    signin(body: IStringObject) {
        return new Promise(resolve => {
            const headers = {
                "accept": "application/json",
                "Content-Type": "application/json"
            }

            authAPIInstance
                .post(`/signin`, {body, headers})
                .then((res: XMLHttpRequest) => resolve(res))
        })
    }

    getUser() {
        return new Promise(resolve => {
            const headers = {
                "accept": "application/json",
            }

            authAPIInstance
                .get(`/user`, {headers})
                .then((res: XMLHttpRequest) => resolve(res))
        })
    }

    logout() {
        return new Promise(resolve => {
            authAPIInstance
                .post(`/logout`)
                .then((res: XMLHttpRequest) => resolve(res))
        })
    }
}

export const authApi = new AuthApi()

export default AuthApi;

