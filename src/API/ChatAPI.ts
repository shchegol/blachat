import {IRequestResult}   from "../utils/ts/interfaces";
import {authAPIInstance, chatAPIInstance} from "./HTTP";

class ChatAPI {
  getAll(): Promise<IRequestResult> {
    return chatAPIInstance.get("/chats");
  }

  create(title: string): Promise<IRequestResult> {
    return authAPIInstance.post("/chats", {body: {title}});
  }

  getUsers(chatId: string): Promise<IRequestResult> {
    return chatAPIInstance.get(`/chats/${chatId}/users`);
  }

  getNewMessageCount(chatId: string): Promise<IRequestResult> {
    return chatAPIInstance.get(`/chats/new/${chatId}`);
  }

  addAvatar(body: FormData): Promise<IRequestResult> {
    const headers = {"Content-Type": "multipart/form-data"};
    return chatAPIInstance.put("/chats/avatar", {body, headers});
  }

  addUser(users: number[], chatId: string): Promise<IRequestResult> {
    return chatAPIInstance.put("/users", {body: {users, chatId}});
  }

  deleteUser(chatId: string): Promise<IRequestResult> {
    return chatAPIInstance.delete("/users", {body: {chatId}});
  }
}

export const chatApi = new ChatAPI();

export default ChatAPI;

