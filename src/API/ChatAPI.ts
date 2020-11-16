import {authAPIInstance, chatAPIInstance} from "./HTTP";

class ChatAPI {
    getAll() {
        const headers = {
            "accept": "application/json",
        }

        return new Promise(resolve => {
            chatAPIInstance
                .get(`/chats`, {headers})
                .then((res: XMLHttpRequest) => resolve(res))
        })
    }

    create(title: string) {
        const body = {title}
        return new Promise(resolve => {
            const headers = {
                "accept": "application/json",
                "Content-Type": "application/json"
            }

            authAPIInstance
                .post(`/chats`, {body, headers})
                .then((res: XMLHttpRequest) => resolve(res))
        })
    }

    getUsers(chatId: string) {
        const headers = {
            "accept": "application/json",
        }

        return new Promise(resolve => {
            chatAPIInstance
                .get(`/chats/${chatId}/users`, {headers})
                .then((res: XMLHttpRequest) => resolve(res))
        })
    }

    getNewMessageCount(chatId: string) {
        const headers = {
            "accept": "application/json",
        }

        return new Promise(resolve => {
            chatAPIInstance
                .get(`/chats/new/${chatId}`, {headers})
                .then((res: XMLHttpRequest) => resolve(res))
        })
    }

    addAvatar(body: FormData) {
        const headers = {
            "accept": "application/json",
            "Content-Type": "multipart/form-data"
        }

        return new Promise(resolve => {
            chatAPIInstance
                .put(`/chats/avatar`, {body, headers})
                .then((res: XMLHttpRequest) => resolve(res))
        })
    }

    addUser(users: number[], chatId: string) {
        const body = {users, chatId}
        const headers = {
            "accept": "application/json",
            "Content-Type": "application/json"
        }

        return new Promise(resolve => {
            chatAPIInstance
                .put(`/users`, {body, headers})
                .then((res: XMLHttpRequest) => resolve(res))
        })
    }

    deleteUser(chatId: string) {
        const body = {chatId}
        const headers = {
            "accept": "application/json",
            "Content-Type": "application/json"
        }

        return new Promise(resolve => {
            chatAPIInstance
                .delete(`/users`, {body, headers})
                .then((res: XMLHttpRequest) => resolve(res))
        })
    }
}

export const chatApi = new ChatAPI()

export default ChatAPI;

