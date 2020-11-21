const pug = require("pug");
import Component from "../Component";
import template  from "./input.templ";

/**
 * Input
 * @prop _key - uniq key
 * @prop id - id
 * @prop classes - additional classes
 * @prop labelText - label text
 * @prop type - input type
 * @prop name - input name
 * @prop value - input value
 * @prop placeholder - input placeholder
 * @prop dataValidation - validation type
 * @prop message - help message
 * @prop listeners - attached listeners
 */

interface IInputProps {
  _key?: number;
  id?: string;
  classes?: string;
  labelText?: string;
  type?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  dataValidation?: string;
  message?: string;
  listeners?: { event: string, fn: Function }[]
}

class Input extends Component {
  props: IInputProps;

  constructor(props: IInputProps) {
    super("div", props);
  }

  render(): string {
    return pug.render(template, this.props);
  }
}

export default Input;