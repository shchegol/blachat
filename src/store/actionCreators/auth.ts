import {authApi}        from '../../API/AuthAPI';
import {IStringObject}  from '../../utils/ts/interfaces';
import {store}          from '../initStore';
import * as ACTION      from '../actions/auth';
import * as ACTION_USER from '../actions/user';
import {appRouter}      from '../../router/Router';

export const fetchtUser = () => {
  return new Promise(resolve => {
    authApi
        .fetchtUser()
        .then((res: XMLHttpRequest) => {
          if (res.status === 200) {
            store.dispatch({
              type: ACTION.AUTH_FETCH,
              payload: {
                isLoggedIn: true,
              },
            });

            store.dispatch({
              type: ACTION_USER.USER_FETCH,
              payload: JSON.parse(res.response),
            });
          }

          resolve();
        });
  });
};

export const signup = (props: IStringObject) => {
  return new Promise(resolve => {
    authApi
        .signup(props)
        .then((res: XMLHttpRequest) => {
          if (res.status === 200) {
            fetchtUser()
                .then(() => {
                  appRouter.go('/');
                });
          }

          resolve();
        });
  });
};

export const signin = (props: IStringObject) => {
  return new Promise(resolve => {
    authApi
        .signin(props)
        .then((res: XMLHttpRequest) => {
          if (res.status === 200) {
            fetchtUser()
                .then(() => {
                  appRouter.go('/');
                });
          }

          resolve();
        });
  });
};

export const logout = () => {
  return new Promise(resolve => {
    authApi
        .logout()
        .then((res: XMLHttpRequest) => {
          if (res.status === 200) {
            store.dispatch({
              type: ACTION.AUTH_LOGOUT,
              payload: {
                isLoggedIn: false,
              },
            });

            appRouter.go('/auth');
          }

          resolve();
        });
  });
};