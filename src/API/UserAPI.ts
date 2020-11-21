import {IStringObject}   from "../utils/ts/interfaces";
import {userAPIInstance} from "./HTTP";

class UserApi {
  change(body: IStringObject) {
    return userAPIInstance.put("/profile", {body});
  }

  changeAvatar(body: FormData) {
    const headers = {
      "accept": "application/json",
      "Content-Type": "multipart/form-data",
    };
    return userAPIInstance.put("/profile/avatar", {body, headers});
  }

  changePassword(oldPassword: string, newPassword: string) {
    return userAPIInstance.put("/password", {body: {oldPassword, newPassword}});

  }

  getById(id: string) {
    return userAPIInstance.get(`/${id}`);
  }

  search(login: string) {
    return userAPIInstance.post("/search", {body: {login}});
  }
}

export const userApi = new UserApi();

export default UserApi;

