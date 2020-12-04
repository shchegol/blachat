import { IStringObject, IRequestResult } from '@utils/ts/interfaces';
import { authAPIInstance } from './HTTP';

class AuthApi {
  static signup(body: IStringObject): Promise<IRequestResult> {
    return authAPIInstance.post('/signup', { body });
  }

  static signin(body: IStringObject): Promise<IRequestResult> {
    return authAPIInstance.post('/signin', { body });
  }

  static fetchtUser(): Promise<IRequestResult> {
    return authAPIInstance.get('/user');
  }

  static logout(): Promise<IRequestResult> {
    return authAPIInstance.post('/logout');
  }
}

export default AuthApi;
