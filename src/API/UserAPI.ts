import { IStringObject, IRequestResult } from '@utils/ts/interfaces';
import { userAPIInstance } from './HTTP';

class UserApi {
  static update(body: IStringObject): Promise<IRequestResult> {
    return userAPIInstance.put('/profile', { body });
  }

  static updateAvatar(body: FormData): Promise<IRequestResult> {
    const headers = { 'Content-Type': 'multipart/form-data' };
    return userAPIInstance.put('/profile/avatar', { body, headers });
  }

  static updatePassword(oldPassword: string, newPassword: string): Promise<IRequestResult> {
    return userAPIInstance.put('/password', { body: { oldPassword, newPassword } });
  }

  static getById(id: string): Promise<IRequestResult> {
    return userAPIInstance.get(`/${id}`);
  }

  static search(login: string): Promise<IRequestResult> {
    return userAPIInstance.post('/search', { body: { login } });
  }
}

export default UserApi;
