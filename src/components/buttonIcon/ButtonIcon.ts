const pug = require("pug");
import Component from "../Component";
import template  from "./buttonIcon.templ";

/**
 * Button with icon
 * @prop _key - uniq _key
 * @prop id - id
 * @prop classes - additional classes
 * @prop type - button type
 * @prop iconName - material icon name
 * @prop listeners - attached listeners
 */

interface IButtonIconProps {
  _key?: number;
  id?: string;
  classes?: string;
  type?: string;
  iconName?: string;
  listeners?: { event: string, fn: Function }[]
}

export default class ButtonIcon extends Component {
  props: IButtonIconProps;

  constructor(props: IButtonIconProps) {
    super("div", props);
  }

  render(): string {
    return pug.render(template, this.props);
  }
}