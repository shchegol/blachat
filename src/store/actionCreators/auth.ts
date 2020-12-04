import { IStringObject, IRequestResult } from '@utils/ts/interfaces';
import { appRouter } from '@router/Router';
import AuthAPI from '../../API/AuthAPI';
import store from '../initStore';
import * as ACTION from '../actions/auth';
import * as ACTION_USER from '../actions/user';

export const fetchtUser = (): Promise<void> => new Promise((resolve) => {
  AuthAPI
    .fetchtUser()
    .then((res: IRequestResult) => {
      if (res.ok) {
        store.dispatch({
          type: ACTION.AUTH_FETCH,
          payload: {
            isLoggedIn: true,
          },
        });

        store.dispatch({
          type: ACTION_USER.USER_FETCH,
          payload: res.data,
        });
      }

      resolve();
    });
});

export const signup = (props: IStringObject): void => {
  AuthAPI
    .signup(props)
    .then((res: IRequestResult) => {
      if (res.ok) {
        fetchtUser()
          .then(() => {
            appRouter.go('/');
          });
      }
    });
};

export const signin = (props: IStringObject): void => {
  AuthAPI
    .signin(props)
    .then((res: IRequestResult) => {
      if (res.ok) {
        fetchtUser()
          .then(() => {
            appRouter.go('/');
          });
      }
    });
};

export const logout = (): void => {
  AuthAPI
    .logout()
    .then((res: IRequestResult) => {
      if (res.ok) {
        store.dispatch({
          type: ACTION.AUTH_LOGOUT,
          payload: {
            isLoggedIn: false,
          },
        });

        appRouter.go('/auth');
      }
    });
};
