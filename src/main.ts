import {store} from "./store/Store";
import routerStart from './router/routerStart';


// todo убрать как только данные из user будут присылаться
// fake store
const tempData = {
    user: {
        id: 0,
        first_name: "Алекс",
        second_name: "Первый",
        display_name: "zelenzoom",
        login: "login123456",
        email: "test2834528@test.ru",
        phone: "+7555555555555",
        avatar: "/img/ava2.jpg",
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

store.props = tempData

routerStart();

// middleware для проверки регистрации пользователя
// todo пока присылает 500 ошибку, доделать позже
// authApi
//     .getUser()
//     .then((res: XMLHttpRequest) => {
//         console.log(res)
//         // if(res.response === "OK") {
//         //     appRouter.go("/")
//         // }
//     })
//     .catch(err => console.error(err))