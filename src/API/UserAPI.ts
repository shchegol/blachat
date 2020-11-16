import {IStringObject} from '../utils/ts/interfaces'
import {userAPIInstance} from "./HTTP";

class UserApi {
    update(body: IStringObject) {
        const headers = {
            "accept": "application/json",
            "Content-Type": "application/json"
        }

        return new Promise(resolve => {
            userAPIInstance
                .put(`/profile`, {body, headers})
                .then((res: XMLHttpRequest) => resolve(res))
        })
    }

    updateAvatar(body: FormData) {
        const headers = {
            "accept": "application/json",
            "Content-Type": "multipart/form-data"
        }

        return new Promise(resolve => {
            userAPIInstance
                .put(`/profile/avatar`, {body, headers})
                .then((res: XMLHttpRequest) => resolve(res))
        })
    }

    updatePassword(oldPassword: string, newPassword: string) {
        const body = {oldPassword, newPassword}
        const headers = {
            "accept": "application/json",
            "Content-Type": "application/json"
        }

        return new Promise(resolve => {
            userAPIInstance
                .put(`/password`, {body, headers})
                .then((res: XMLHttpRequest) => resolve(res))
        })
    }

    getUserByID(id: string) {
        const headers = {
            "accept": "application/json",
        }

        return new Promise(resolve => {
            userAPIInstance
                .get(`/${id}`, {headers})
                .then((res: XMLHttpRequest) => resolve(res))
        })
    }

    serchUserByLogin(login: string) {
        const body = {login}
        const headers = {
            "accept": "application/json",
            "Content-Type": "application/json"
        }

        return new Promise(resolve => {
            userAPIInstance
                .put(`/password`, {body, headers})
                .then((res: XMLHttpRequest) => resolve(res))
        })
    }
}

export const userApi = new UserApi()

export default UserApi;

