import Component from "../Component";

const tempFn = require("./chatDropdownItem.templ.pug");

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
    return tempFn(this.props);
  }
}