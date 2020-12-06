import { IRequestResult } from '@utils/ts/interfaces';
import { authAPIInstance, chatAPIInstance } from './HTTP';

export const getAll = (): Promise<IRequestResult> => chatAPIInstance.get('/chats');

export const create = (title: string): Promise<IRequestResult> => authAPIInstance.post('/chats', { body: { title } });

export const getUsers = (chatId: string): Promise<IRequestResult> => chatAPIInstance.get(`/chats/${chatId}/users`);

export const getNewMessageCount = (chatId: string): Promise<IRequestResult> => chatAPIInstance.get(`/chats/new/${chatId}`);

export const addAvatar = (body: FormData): Promise<IRequestResult> => {
  const headers = { 'Content-Type': 'multipart/form-data' };
  return chatAPIInstance.put('/chats/avatar', { body, headers });
};

export const addUser = (users: number[], chatId: string): Promise<IRequestResult> => chatAPIInstance.put('/users', { body: { users, chatId } });

export const deleteUser = (chatId: string): Promise<IRequestResult> => chatAPIInstance.delete('/users', { body: { chatId } });
