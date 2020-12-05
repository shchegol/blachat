import ChatDropdownItem from '@components/chat/chatDropdownItem/chatDropdownItem';
import Component from '@utils/Component';

/**
 * Chat dropdown
 * @prop _key - uniq key
 * @prop id - id
 * @prop classes - additional classes
 * @prop iconName - name of material design icon in dropdown btn if need
 * @prop text - text in dropdown btn
 * @prop items - dropdown items
 * @prop listeners - attached listeners
 */

interface IChatDropdownProps {
  _key?: number;
  id?: string;
  classes?: string;
  iconName?: string;
  text?: string;
  items?: ChatDropdownItem[];
  renderedItems?: string[];
  listeners?: { event: string, fn: Function }[]
}

const tempFn: (props: IChatDropdownProps) => string = require('@components/chat/chatDropdown/chatDropdown.templ.pug');

export default class ChatDropdown extends Component {
  props: IChatDropdownProps;

  constructor(props: IChatDropdownProps) {
    super('div', props);
  }

  render(): string {
    let renderedItems:string[] = [];

    if (this.props.items) {
      renderedItems = this.props.items.map((el) => el.render());
    }

    return tempFn({ renderedItems, ...this.props });
  }
}
