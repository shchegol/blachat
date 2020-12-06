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
}

interface IChatWindowRender extends IChatWindow {
  chatTopBar: string;
  chatMessages: string;
  chatBottomBar: string;
}

interface IChatWindowClass extends IChatWindow {
  chatTopBar: ChatTopBar;
  chatMessages: ChatMessages;
  chatBottomBar: ChatBottomBar;
}

const tempFn: (props: IChatWindowRender) => string = require('@components/chat/chatWindow/chatWindow.templ.pug');

const innerProps = () => ({
  chatTopBar: new ChatTopBar(),
  chatMessages: new ChatMessages(),
  chatBottomBar: new ChatBottomBar(),
});

export default class ChatWindow extends Component {
  props: IChatWindowClass;

  constructor(props?: IChatWindowClass) {
    super('div', {
      ...props,
      ...innerProps(),
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
