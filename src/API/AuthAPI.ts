import {IStringObject}   from "../utils/ts/interfaces";
import {authAPIInstance} from "./HTTP";

class AuthApi {
  signup(body: IStringObject) {
    return authAPIInstance.post("/signup", {body});
  }

  signin(body: IStringObject) {
    return authAPIInstance.post("/signin", {body});
  }

  fetchtUser() {
    return authAPIInstance.get("/user");
  }

  logout() {
    return authAPIInstance.post("/logout");
  }
}

export const authApi = new AuthApi();

export default AuthApi;

