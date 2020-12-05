import Component from '@utils/Component';
import ChatDropdown from '@components/chat/chatDropdown/ChatDropdown';
import ChatDropdownItem from '@components/chat/chatDropdownItem/chatDropdownItem';

/**
 * Chat bottom bar
 * @prop _key - uniq key
 * @prop id - id
 * @prop listeners - attached listeners
 * @prop chatInputDropdown - dropdown options
 * @prop chatInput - main input
 * @prop chatInputButton - send button
 */

interface IChatTopBar {
  _key?: number;
  id?: string;
  listeners?: { event: string, fn: Function }[],
}

interface IChatTopBarRender extends IChatTopBar {
  dropdownOptions: string;
}

interface IChatTopBarClass extends IChatTopBar {
  dropdownOptions: ChatDropdown;
}

const tempFn: (props: IChatTopBarRender) => string = require('@components/chat/chatTopBar/chatTopBar.templ.pug');

export default class ChatTopBar extends Component {
  props: IChatTopBarClass;

  constructor(props?: IChatTopBarClass) {
    super('div', {
      ...props,
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
    });
  }
}
