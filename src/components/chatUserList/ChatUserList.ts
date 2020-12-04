import Component from '@utils/Component';
import ChatUserListItem from '@components/chatUserListItem/ChatUserListItem';

/**
 * Chat user list
 * @prop _key - uniq key
 * @prop id - id
 * @prop classes - additional classes
 * @prop items - list elements
 * @prop listeners - attached listeners
 */

interface IChatUserlistProps {
  _key?: number;
  id?: string;
  classes?: string;
  items?: ChatUserListItem[];
  renderedItems?: string[];
  listeners?: { event: string, fn: Function }[]
}

const tempFn: (props: IChatUserlistProps) => string = require('@components/chatUserList/chatUserList.templ.pug');

export default class ChatUserList extends Component {
  props: IChatUserlistProps;

  constructor(props: IChatUserlistProps) {
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
