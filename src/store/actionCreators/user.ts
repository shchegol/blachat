import {IStringObject} from "../../utils/ts/interfaces"
import {userApi} from "../../API/UserAPI";
// import {store} from "../initStore";
// import * as ACTION  from '../actions/user';

export const fetchtUser = (data: IStringObject) => {
    return new Promise(resolve => {
        userApi
            .change(data)
            .then((res: XMLHttpRequest) => {
                console.log(res)
                // if (res.status === 200) {
                //     store.dispatch({
                //         type: USER_CHANGE_PROFILE,
                //         payload: {
                //             isLoggedIn: true,
                //             user: JSON.parse(res.response)
                //         }
                //     })
                // }

                resolve()
            })
    })
}