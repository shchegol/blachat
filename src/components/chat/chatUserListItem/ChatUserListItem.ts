import Component from '@utils/Component';

/**
 * Chats list item
 * @prop _key - uniq key
 * @prop _chatId - id of attached chat
 * @prop id - id
 * @prop classes - additional classes
 * @prop avatar - the path to the image
 * @prop title - chat name
 * @prop text - additional text
 * @prop date - last message date
 * @prop messageCount - number of unread messages
 * @prop listeners - attached listeners
 */

interface IChatUserListItemProps {
  _key?: number;
  _chatId?: string;
  id?: string;
  classes?: string;
  avatar?: string;
  title?: string;
  text?: string;
  date?: string;
  messageCount?: string;
  listeners?: { event: string, fn: Function }[]
}

const tempFn: (props: IChatUserListItemProps) => string = require('@components/chat/chatUserListItem/chatUserListItem.templ.pug');

export default class ChatUserListItem extends Component {
  props: IChatUserListItemProps;

  constructor(props: IChatUserListItemProps) {
    super('div', props);
  }

  render(): string {
    return tempFn(this.props);
  }
}
