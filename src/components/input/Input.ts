import Component from "../Component";

const tempFn = require("pug-loader!./input.templ.pug");

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
    return tempFn(this.props);
  }
}

export default Input;