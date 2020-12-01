import {IStringObject, IRequestResult}   from "../utils/ts/interfaces";
import {authAPIInstance} from "./HTTP";

class AuthApi {
  signup(body: IStringObject): Promise<IRequestResult> {
    return authAPIInstance.post("/signup", {body});
  }

  signin(body: IStringObject): Promise<IRequestResult> {
    return authAPIInstance.post("/signin", {body});
  }

  fetchtUser(): Promise<IRequestResult> {
    return authAPIInstance.get("/user");
  }

  logout(): Promise<IRequestResult> {
    return authAPIInstance.post("/logout");
  }
}

export const authApi = new AuthApi();

export default AuthApi;

