import {appRouter}     from "./Router";
import Chat            from "../pages/chat/Chat";
import Auth            from "../pages/auth/Auth";
import Registration    from "../pages/registration/Registration";
import Index           from "../pages/profile/Profile";
import ProfileEdit     from "../pages/profile-edit/ProfileEdit";
import {store}         from "../store/initStore";
import {fetchtUser}    from "../store/actionCreators/auth";
import {IStringObject} from "../utils/ts/interfaces";

export default function routerStart() {
  appRouter
      .use("/", Chat)
      .use("/profile", Index)
      .use("/profile-edit", ProfileEdit)
      .use("/auth", Auth)
      .use("/registration", Registration);

  appRouter.addMiddleware(function(params: IStringObject) {
    const authPaths = ["/auth", "/registration"];
    const checkAuthPath = authPaths.includes(params.pathname);

    if (store.props.auth.isLoggedIn && checkAuthPath) {
      appRouter.go("/");
      return true;
    }

    if (!store.props.auth.isLoggedIn && !checkAuthPath) {
      appRouter.go("/auth");
      return true;
    }
  });

  fetchtUser().then(() => appRouter.start());
}
