import Component from '@utils/Component';
import ChatMessage from '@components/chat/chatMessage/ChatMessage';

/**
 * Main window of chat
 * @prop _key - uniq key
 * @prop id - id
 * @prop listeners - attached listeners
 * @prop chatTopBar - top bar
 * @prop chatMessages - messages window
 * @prop chatBottomBar - bottom bar
 */

interface IChatMessages {
  _key?: number;
  id?: string;
  listeners?: { event: string, fn: Function }[],
  chatMessage?: any,
}

const tempFn: (props: IChatMessages) => string = require('@components/chat/chatMessages/chatMessages.templ.pug');

export default class ChatMessages extends Component {
  props: IChatMessages;

  constructor(props?: IChatMessages) {
    super('div', {
      ...props,
      chatMessage: new ChatMessage({
        text: '123',
        date: '10:00',
      }),
    });
  }

  render(): string {
    return tempFn({
      chatMessage: this.props.chatMessage.render(),
    });
  }
}
