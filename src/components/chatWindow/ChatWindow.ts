import Component from '@utils/Component';
import ChatBottomBar from '@components/chatBottomBar/ChatBottomBar';
import ChatDropdown from '@components/chatDropdown/ChatDropdown';
import ChatDropdownItem from '@components/chatDropdownItem/chatDropdownItem';

/**
 * Main window of chat
 * @prop _key - uniq key
 * @prop id - id
 * @prop listeners - attached listeners
 * @prop chatTopBar - top bar
 * @prop chatMessages - messages window
 * @prop chatBottomBar - bottom bar
 */

interface IChatWindow {
  _key?: number;
  id?: string;
  listeners?: { event: string, fn: Function }[],
  chatBottomBar?: any;
  dropdownOptions?: any;
}

const tempFn: (props: IChatWindow) => string = require('@components/chatWindow/chatWindow.templ.pug');

export default class ChatWindow extends Component {
  props: IChatWindow;

  constructor(props?: IChatWindow) {
    super('div', {
      ...props,
      chatBottomBar: new ChatBottomBar(),
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
    });
  }

  render(): string {
    return tempFn({
      dropdownOptions: this.props.dropdownOptions.render(),
      chatBottomBar: this.props.chatBottomBar.render(),
    });
  }
}
