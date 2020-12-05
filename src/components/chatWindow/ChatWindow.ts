import Component from '@utils/Component';

/**
 * Main window of chat
 * @prop _key - uniq key
 * @prop id - id
 * @prop listeners - attached listeners
 * @prop dropdownOptions - attached listeners
 * @prop dropdownAdd - attached listeners
 */

interface IChatWindow {
  _key?: number;
  id?: string;
  listeners?: { event: string, fn: Function }[],
  dropdownOptions?: any;
  dropdownAdd?: any;
}

const tempFn: (props: IChatWindow) => string = require('@components/chatWindow/chatWindow.templ.pug');

export default class ChatWindow extends Component {
  props: IChatWindow;

  constructor(props: IChatWindow) {
    super('div', props);
  }

  render(): string {
    return tempFn({
      dropdownOptions: this.props.dropdownOptions.render(),
      dropdownAdd: this.props.dropdownAdd.render(),
    });
  }
}
