import {authAPIInstance, chatAPIInstance} from "./HTTP";

class ChatAPI {
  getAll() {
    return chatAPIInstance.get("/chats");
  }

  create(title: string) {
    return authAPIInstance.post("/chats", {body: {title}});
  }

  getUsers(chatId: string) {
    return chatAPIInstance.get(`/chats/${chatId}/users`);
  }

  getNewMessageCount(chatId: string) {
    return chatAPIInstance.get(`/chats/new/${chatId}`);
  }

  addAvatar(body: FormData) {
    const headers = {"Content-Type": "multipart/form-data"};
    return chatAPIInstance.put("/chats/avatar", {body, headers});
  }

  addUser(users: number[], chatId: string) {
    return chatAPIInstance.put("/users", {body: {users, chatId}});
  }

  deleteUser(chatId: string) {
    return chatAPIInstance.delete("/users", {body: {chatId}});
  }
}

export const chatApi = new ChatAPI();

export default ChatAPI;

