import { appRouter } from '@router/Router';
import store from '@store/initStore';
import Component from '@utils/Component';
import ChatUserList from '@components/chatUserList/ChatUserList';
import ChatUserListItem from '@components/chatUserListItem/ChatUserListItem';
import ChatUserAvatar from '@components/chatUserAvatar/ChatUserAvatar';
import ChatDropdown from '@components/chatDropdown/ChatDropdown';
import ChatDropdownItem from '@components/chatDropdownItem/ChatDropdownItem';
import { IAnyObject } from '@utils/ts/interfaces';

const defaultImg = require('@root/img/bg.jpg').default;
const tempFn = require('@pages/chat/chat.templ.pug');

export default class PageChat extends Component {
  props: IAnyObject;

  constructor(props?: IAnyObject) {
    super('div', {
      ...props,
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
      dropdownOptions: new ChatDropdown({
        iconName: 'more_vert',
        classes: 'dropdown_open_bl',
        items: [
          new ChatDropdownItem({
            iconName: 'edit',
            text: 'Переименовать',
          }),
          new ChatDropdownItem({
            iconName: 'delete',
            text: 'Удалить',
          }),
        ],
      }),
      dropdownAdd: new ChatDropdown({
        iconName: 'attach_file',
        classes: 'dropdown_open_tr',
        items: [
          new ChatDropdownItem({
            iconName: 'insert_photo',
            text: 'Фото или Видео',
          }),
          new ChatDropdownItem({
            iconName: 'insert_drive_file',
            text: 'Файл',
          }),
          new ChatDropdownItem({
            iconName: 'location_on',
            text: 'Локация',
          }),
        ],
      }),
    });
  }

  render(): string {
    return tempFn({
      _key: this.props._key,
      userAvatar: this.props.userAvatar.render(),
      chatsList: this.props.chatsList.render(),
      dropdownOptions: this.props.dropdownOptions.render(),
      dropdownAdd: this.props.dropdownAdd.render(),
    });
  }
}
