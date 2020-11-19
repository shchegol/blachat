import {appRouter}      from '../../router/Router';
import {store}          from '../../store/initStore';
import Component        from '../../components/Component';
import ChatUserList     from '../../components/ChatUserList';
import ChatUserListItem from '../../components/ChatUserListItem';
import ChatUserAvatar   from '../../components/ChatUserAvatar';
import ChatDropdown     from '../../components/ChatDropdown';
import ChatDropdownItem from '../../components/ChatDropdownItem';
import {IAnyObject}     from '../../utils/ts/interfaces';
import template         from './chat.templ';
const pug = require('pug');

export default class PageChat extends Component {
  props: IAnyObject;

  constructor(props?: IAnyObject) {
    super('div', {
      ...props,
      userAvatar: new ChatUserAvatar({
        title: 'Показать профиль',
        src: store.props.user.avatar || '/img/bg.jpg',
        alt: '',
        classes: 'cursor-pointer',
        listeners: [
          {event: 'click', fn: () => appRouter.go('/profile')},
        ],
      }),
      chatsList: new ChatUserList({
        items: store.props.chats.map((opt: IAnyObject) => {
          return new ChatUserListItem({
            ...opt,
            listeners: [
              {
                event: 'click', fn: (event: Event) => {
                  if (event.currentTarget instanceof HTMLElement) {
                    let chatId = event.currentTarget.dataset.chatId;

                    console.log(chatId);
                  }
                },
              },
            ],
          });
        }),
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
    return pug.render(template, {
      key: this.props.key,
      userAvatar: this.props.userAvatar.render(),
      chatsList: this.props.chatsList.render(),
      dropdownOptions: this.props.dropdownOptions.render(),
      dropdownAdd: this.props.dropdownAdd.render(),

    });
  }
}