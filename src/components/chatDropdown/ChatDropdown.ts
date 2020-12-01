import ChatDropdownItem from "../chatDropdownItem/ChatDropdownItem";
import Component        from "../Component";

const tempFn = require("./chatDropdown.templ.pug");

/**
 * Chat dropdown
 * @prop _key - uniq key
 * @prop id - id
 * @prop classes - additional classes
 * @prop iconName - name of material design icon in dropdown btn if need
 * @prop text - text in dropdown btn
 * @prop items - dropdown items
 * @prop listeners - attached listeners
 */

interface IChatDropdownProps {
  _key?: number;
  id?: string;
  classes?: string;
  iconName?: string;
  text?: string;
  items?: ChatDropdownItem[];
  listeners?: { event: string, fn: Function }[]
}

export default class ChatDropdown extends Component {
  props: IChatDropdownProps;

  constructor(props: IChatDropdownProps) {
    super("div", props);
  }

  render(): string {
    let renderedItems: string[] = [];

    if (this.props.items) {
      this.props.items.forEach((el: any) => {
        renderedItems.push(el.render());
      });
    }

    return tempFn({renderedItems, ...this.props});
  }
}