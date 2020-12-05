const defaultImg = require('@root/img/bg.jpg').default;

export default {
  isLoading: false,
  auth: {
    isLoggedIn: false,
  },
  user: {
    id: null,
    login: null,
    first_name: null,
    second_name: null,
    display_name: null,
    email: null,
    phone: null,
    avatar: null,
  },
  // todo очистить после написания логики
  chats: [
    {
      _chatId: 0,
      title: 'Саша',
      text: 'Текст Саши',
      date: '20:00',
      avatar: defaultImg,
      messageCount: 3,
    },
    {
      _chatId: 1,
      title: 'Паша',
      text: 'Текст Паши',
      date: '20:20',
      avatar: defaultImg,
      messageCount: 0,
    },
  ],
};
