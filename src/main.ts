// import {store} from "./store/Store";
import routerStart from "./router/routerStart";
// import {authApi} from "./API/AuthAPI";
// import {appRouter} from "./router/Router";

routerStart();

// import StoreFlux from "./store/StoreFlux"

// export const initialState = {
//     data: [],
//     loaded: false,
//     loading: false,
// };

// interface Action {
//     type: string;
//     payload?: any;
// }
//
// export function todosReducer(
//     state = initialState,
//     action: { type: string, payload: any }
// ) {
//     switch (action.type) {
//         case "ADD_TODO": {
//             const todo = action.payload;
//             const data = [...state.data, todo];
//             return {
//                 ...state,
//                 data,
//             };
//         }
//     }
//
//     return state;
// }
//
// const reducers = {
//     todos: todosReducer,
// };
//
// const storeFlux = new StoreFlux(reducers);
//
// const subscriber1 = (newState: { [key: string]: any }) => {
//     console.log("subscriber1", newState)
// }
// const subscriber2 = (newState: { [key: string]: any }) => {
//     console.log("subscriber2", newState)
// }

// const action: Action = {
//     type: "ADD_TODO",
//     payload: { label: "Eat pizza,", complete: false },
// };
//
// const action2: Action = {
//     type: "ADD_TODO",
//     payload: { label: "Done the work,", complete: false },
// };
//
// console.log(storeFlux)
//
// storeFlux.subscribe(subscriber1)
//
// setTimeout(() => {
//     storeFlux.dispatch(action);
//
//     console.log(storeFlux)
// }, 5000)
//
// setTimeout(() => {
//     storeFlux.dispatch(action2);
//
//     console.log(storeFlux)
// }, 10000)




// fake api
// store.props = {
//     user: {
//         id: 469,
//         avatar: "/img/ava2.jpg",
//         display_name: "ZelenZoom",
//         email: "zelenzoom@gmail.com",
//         first_name: "Александр",
//         login: "zelenzoom",
//         phone: "+7(903)888-88-88",
//         second_name: "Щеголь"  ,
//     },
//     chats: [
//         {
//             "chatId": 0,
//             "title": "Саша",
//             "text": "Текст Саши",
//             "date": "20:00",
//             "avatar": "/img/ava1.png",
//             "messageCount": 2
//         },
//         {
//             "chatId": 1,
//             "title": "Паша",
//             "text": "Текст Паши",
//             "date": "20:20",
//             "avatar": "/img/bg.jpg",
//             "messageCount": 0
//         }
//     ]
// }

// middleware для проверки регистрации пользователя
// todo доделать после реализации store
// authApi
//     .getUser()
//     .then((res: XMLHttpRequest) => {
//         const data: JSON = JSON.parse(res.response);
//
//         // console.log(res)
//
//         if(res.status === 200) {
//             console.log(data)
//         } else {
//             appRouter.go("/auth")
//         }
//     });

