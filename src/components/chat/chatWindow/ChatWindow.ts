import Component from '@utils/Component';
import ChatTopBar from '@components/chat/chatTopBar/ChatTopBar';
import ChatMessages from '@components/chat/chatMessages/ChatMessages';
import ChatBottomBar from '@components/chat/chatBottomBar/ChatBottomBar';

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
  chatTopBar?: any;
  chatMessages?: any;
  chatBottomBar?: any;
}

const tempFn: (props: IChatWindow) => string = require('@components/chat/chatWindow/chatWindow.templ.pug');

export default class ChatWindow extends Component {
  props: IChatWindow;

  constructor(props?: IChatWindow) {
    super('div', {
      ...props,
      chatTopBar: new ChatTopBar(),
      chatMessages: new ChatMessages(),
      chatBottomBar: new ChatBottomBar(),
    });
  }

  render(): string {
    return tempFn({
      chatTopBar: this.props.chatTopBar.render(),
      chatMessages: this.props.chatMessages.render(),
      chatBottomBar: this.props.chatBottomBar.render(),
    });
  }
}
