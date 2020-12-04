import { IRequestResult } from '@utils/ts/interfaces';
import { authAPIInstance, chatAPIInstance } from './HTTP';

class ChatAPI {
  static getAll(): Promise<IRequestResult> {
    return chatAPIInstance.get('/chats');
  }

  static create(title: string): Promise<IRequestResult> {
    return authAPIInstance.post('/chats', { body: { title } });
  }

  static getUsers(chatId: string): Promise<IRequestResult> {
    return chatAPIInstance.get(`/chats/${chatId}/users`);
  }

  static getNewMessageCount(chatId: string): Promise<IRequestResult> {
    return chatAPIInstance.get(`/chats/new/${chatId}`);
  }

  static addAvatar(body: FormData): Promise<IRequestResult> {
    const headers = { 'Content-Type': 'multipart/form-data' };
    return chatAPIInstance.put('/chats/avatar', { body, headers });
  }

  static addUser(users: number[], chatId: string): Promise<IRequestResult> {
    return chatAPIInstance.put('/users', { body: { users, chatId } });
  }

  static deleteUser(chatId: string): Promise<IRequestResult> {
    return chatAPIInstance.delete('/users', { body: { chatId } });
  }
}

export default ChatAPI;
