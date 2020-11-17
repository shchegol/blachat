import {store} from "./store/Store";
import routerStart from './router/routerStart';
import {authApi} from "./API/AuthAPI";
import {appRouter} from "./router/Router";

// fake api
// todo убрать после реализации store
store.props = {
    user: {
        id: 469,
        avatar: "/img/ava2.jpg",
        display_name: "ZelenZoom",
        email: "zelenzoom@gmail.com",
        first_name: "Александр",
        login: "zelenzoom",
        phone: "+7(903)888-88-88",
        second_name: "Щеголь"  ,
    },
    chats: [
        {
            "chatId": 0,
            "title": "Саша",
            "text": "Текст Саши",
            "date": "20:00",
            "avatar": "/img/ava1.png",
            "messageCount": 2
        },
        {
            "chatId": 1,
            "title": "Паша",
            "text": "Текст Паши",
            "date": "20:20",
            "avatar": "/img/bg.jpg",
            "messageCount": 0
        }
    ]
}

// middleware для проверки регистрации пользователя
// todo доделать после реализации store
authApi
    .getUser()
    .then((res: XMLHttpRequest) => {
        const data: JSON = JSON.parse(res.response);

        if(data) {
            console.log(data)
        } else {
            appRouter.go("/auth")
        }
    });

routerStart();