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
}

interface IChatMessagesRender extends IChatMessages {
  chatMessage: string,
}

interface IChatMessagesClass extends IChatMessages {
  chatMessage: ChatMessage,
}

const tempFn: (props: IChatMessagesRender) => string = require('@components/chat/chatMessages/chatMessages.templ.pug');

// todo временные данные
const innerProps = () => ({
  chatMessage: new ChatMessage({
    text: '123',
    date: '10:00',
  }),
});

export default class ChatMessages extends Component {
  props: IChatMessagesClass;

  constructor(props?: IChatMessagesClass) {
    super('div', {
      ...props,
      ...innerProps(),
    });
  }

  render(): string {
    return tempFn({
      chatMessage: this.props.chatMessage.render(),
    });
  }
}
