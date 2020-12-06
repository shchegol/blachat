import Component from '@utils/Component';
import ChatDropdown from '@components/chat/chatDropdown/ChatDropdown';
import ChatDropdownItem from '@components/chat/chatDropdownItem/chatDropdownItem';
import Input from '@components/input/Input';
import Button from '@components/button/Button';

/**
 * Chat bottom bar
 * @prop _key - uniq key
 * @prop id - id
 * @prop listeners - attached listeners
 * @prop chatInputDropdown - dropdown options
 * @prop chatInput - main input
 * @prop chatInputButton - send button
 */

interface IChatBottomBar {
  _key?: number;
  id?: string;
  listeners?: { event: string, fn: Function }[],
}

interface IChatBottomBarRender extends IChatBottomBar {
  chatInputDropdown: string;
  chatInput: string;
  chatInputButton: string;
}

interface IChatBottomBarClass extends IChatBottomBar {
  chatInputDropdown: ChatDropdown;
  chatInput: Input;
  chatInputButton: Button;
}

const tempFn: (props: IChatBottomBarRender) => string = require('@components/chat/chatBottomBar/chatBottomBar.templ.pug');

const innerProps = () => ({
  chatInputDropdown: new ChatDropdown({
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
  chatInput: new Input({
    classes: 'input_inline',
    type: 'text',
  }),
  chatInputButton: new Button({
    type: 'button',
    title: 'Отправить',
    iconName: 'send',
    listeners: [
      {
        event: 'click',
        fn: () => {
          // todo дописать логику отправки сообщения
          // console.log('send message');
        },
      },
    ],
  }),
});

export default class ChatBottomBar extends Component {
  props: IChatBottomBarClass;

  constructor(props?: IChatBottomBarClass) {
    super('div', {
      ...props,
      ...innerProps(),
    });
  }

  render(): string {
    return tempFn({
      chatInputDropdown: this.props.chatInputDropdown.render(),
      chatInput: this.props.chatInput.render(),
      chatInputButton: this.props.chatInputButton.render(),
    });
  }
}
