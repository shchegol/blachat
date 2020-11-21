const pug = require("pug");
import Component from "../Component";
import template  from "./chatDropdownItem.templ";

/**
 * Chat dropdown item
 * @prop id - id
 * @prop _key - uniq key
 * @prop classes - additional classes
 * @prop iconName - name of material design icon
 * @prop text - text in item
 * @prop listeners - attached listeners
 */

interface IChatDropdownItem {
  _key?: number;
  id?: string;
  classes?: string;
  iconName?: string;
  text?: string;
  listeners?: { event: string, fn: Function }[]
}

export default class ChatDropdownItem extends Component {
  props: IChatDropdownItem;

  constructor(props: IChatDropdownItem) {
    super("div", props);
  }

  render(): string {
    return pug.render(template, this.props);
  }
}