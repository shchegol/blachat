import { IStringObject, IRequestResult } from '@utils/ts/interfaces';
import { authAPIInstance } from './HTTP';

export const signup = (body: IStringObject): Promise<IRequestResult> => authAPIInstance.post('/signup', { body });

export const signin = (body: IStringObject): Promise<IRequestResult> => authAPIInstance.post('/signin', { body });

export const fetchtUser = (): Promise<IRequestResult> => authAPIInstance.get('/user');

export const logout = (): Promise<IRequestResult> => authAPIInstance.post('/logout');
