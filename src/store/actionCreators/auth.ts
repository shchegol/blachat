import {authApi}        from "../../API/AuthAPI";
import {IStringObject, IRequestResult}  from "../../utils/ts/interfaces";
import {store}          from "../initStore";
import * as ACTION      from "../actions/auth";
import * as ACTION_USER from "../actions/user";
import {appRouter}      from "../../router/Router";

export const fetchtUser = () => {
  return new Promise(resolve => {
    authApi
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
};

export const signup = (props: IStringObject) => {
  return authApi
        .signup(props)
        .then((res: IRequestResult) => {
          if (res.ok) {
            fetchtUser()
                .then(() => {
                  appRouter.go("/");
                });
          }
        });
};

export const signin = (props: IStringObject) => {
  return authApi
        .signin(props)
        .then((res: IRequestResult) => {
          if (res.ok) {
            fetchtUser()
                .then(() => {
                  appRouter.go("/");
                });
          }
        });
};

export const logout = () => {
  return authApi
        .logout()
        .then((res: IRequestResult) => {
          if (res.ok) {
            store.dispatch({
              type: ACTION.AUTH_LOGOUT,
              payload: {
                isLoggedIn: false,
              },
            });

            appRouter.go("/auth");
          }
        });
};