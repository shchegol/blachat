import { IStringObject, IRequestResult } from '@utils/ts/interfaces';
import { userAPIInstance } from './HTTP';

export const update = (body: IStringObject): Promise<IRequestResult> => userAPIInstance.put('/profile', { body });

export const updateAvatar = (body: FormData): Promise<IRequestResult> => {
  const headers = { 'Content-Type': 'multipart/form-data' };
  return userAPIInstance.put('/profile/avatar', { body, headers });
};

export const updatePassword = (oldPassword: string, newPassword: string): Promise<IRequestResult> => userAPIInstance.put('/password', { body: { oldPassword, newPassword } });

export const getById = (id: string): Promise<IRequestResult> => userAPIInstance.get(`/${id}`);

export const search = (login: string): Promise<IRequestResult> => userAPIInstance.post('/search', { body: { login } });
