const pug = require("pug");
import Component        from "../Component";
import template         from "./chatUserList.templ";
import ChatUserListItem from "../chatUserListItem/ChatUserListItem";

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
  listeners?: { event: string, fn: Function }[]
}

export default class ChatUserList extends Component {
  props: IChatUserlistProps;

  constructor(props: IChatUserlistProps) {
    super("div", props);
  }

  render(): string {
    let renderedItems: string[] = [];

    if (this.props.items) {
      this.props.items.forEach((el: any) => {
        renderedItems.push(el.render());
      });
    }

    return pug.render(template, {renderedItems, ...this.props});
  }
}