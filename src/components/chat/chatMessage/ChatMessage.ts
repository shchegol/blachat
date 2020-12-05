import Component from '@utils/Component';

/**
 * Main window of chat
 * @prop _key - uniq key
 * @prop id - id
 * @prop listeners - attached listeners
 * @prop text - message text
 * @prop date - send date
 */

interface IChatMessages {
  _key?: number;
  id?: string;
  listeners?: { event: string, fn: Function }[],
  text: string;
  date: string;
}

const tempFn: (props: IChatMessages) => string = require('@components/chat/chatMessage/chatMessage.templ.pug');

export default class ChatMessage extends Component {
  props: IChatMessages;

  constructor(props?: IChatMessages) {
    super('div', {
      ...props,
    });
  }

  render(): string {
    return tempFn(this.props);
  }
}
