const pug = require("pug");
import Component    from "../Component";
import template     from "./button.templ";

/**
 * Chat dropdown
 * @prop {number} _key - uniq key
 * @prop {string} id - id
 * @prop {string} classes - additional classes
 * @prop {string} type - button type
 * @prop {string} text - text in button
 * @prop listeners - attached listeners
 */

interface IButtonProps {
  _key?: number;
  id?: string;
  classes?: string;
  type?: string;
  text?: string;
  listeners?: { event: string, fn: Function }[]
}

export default class Button extends Component {
  props: IButtonProps;

  constructor(props: IButtonProps) {
    super("div", props);
  }

  render(): string {
    return pug.render(template, this.props);
  }
}