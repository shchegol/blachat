import {IStringObject, IRequestResult}   from "../utils/ts/interfaces";
import {userAPIInstance} from "./HTTP";

class UserApi {
  change(body: IStringObject): Promise<IRequestResult> {
    return userAPIInstance.put("/profile", {body});
  }

  changeAvatar(body: FormData): Promise<IRequestResult> {
    const headers = {"Content-Type": "multipart/form-data"};
    return userAPIInstance.put("/profile/avatar", {body, headers});
  }

  changePassword(oldPassword: string, newPassword: string): Promise<IRequestResult> {
    return userAPIInstance.put("/password", {body: {oldPassword, newPassword}});

  }

  getById(id: string): Promise<IRequestResult> {
    return userAPIInstance.get(`/${id}`);
  }

  search(login: string): Promise<IRequestResult> {
    return userAPIInstance.post("/search", {body: {login}});
  }
}

export const userApi = new UserApi();

export default UserApi;

