import { IStringObject, IRequestResult } from '@utils/ts/interfaces';
import { appRouter } from '@router/Router';
import * as API from '@root/API/AuthAPI';
import store from '@store/initStore';
import * as ACTION from '@store/actions/auth';
import * as ACTION_USER from '@store/actions/user';

export const fetchtUser = (): Promise<void> => new Promise((resolve) => {
  API
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
  API
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
  API
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
  API
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
