import { appRouter } from '@router/Router';
import store from '@store/initStore';
import Component from '@utils/Component';
import ChatWindow from '@components/chat/chatWindow/ChatWindow';
import ChatUserList from '@components/chat/chatUserList/ChatUserList';
import ChatUserListItem from '@components/chat/chatUserListItem/ChatUserListItem';
import ChatUserAvatar from '@components/chat/chatUserAvatar/ChatUserAvatar';
import { IAnyObject } from '@utils/ts/interfaces';

const defaultImg = require('@root/img/bg.jpg').default;
const tempFn = require('@pages/chat/chat.templ.pug');

export default class PageChat extends Component {
  props: IAnyObject;

  constructor(props?: IAnyObject) {
    super('div', {
      ...props,
      chatWindow: new ChatWindow(),
      userAvatar: new ChatUserAvatar({
        title: 'Показать профиль',
        src: store.props.user.avatar || defaultImg,
        alt: '',
        classes: 'cursor-pointer',
        listeners: [
          { event: 'click', fn: () => appRouter.go('/profile') },
        ],
      }),
      chatsList: new ChatUserList({
        items: store.props.chats.map((opt: IAnyObject) => new ChatUserListItem({
          ...opt,
          listeners: [
            {
              event: 'click',
              fn: (event: Event) => {
                if (event.currentTarget instanceof HTMLElement) {
                  // console.log(event.currentTarget.dataset.chatId);
                }
              },
            },
          ],
        })),
      }),
    });
  }

  render(): string {
    return tempFn({
      _key: this.props._key,
      userAvatar: this.props.userAvatar.render(),
      chatsList: this.props.chatsList.render(),
      chatWindow: this.props.chatWindow.render(),
    });
  }
}
