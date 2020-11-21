const pug = require("pug");
import Component    from "../Component";
import {IAnyObject} from "../../utils/ts/interfaces";
import template     from "./form.templ";
import Input        from "../input/Input";
import Button       from "../button/Button";

/**
 * Form
 * @prop _key - uniq key
 * @prop id - id
 * @prop items - from elements
 * @prop listeners - attached listeners
 */

interface IFormProps {
  _key?: number;
  id?: string;
  items?: (Input | Button)[];
  listeners?: { event: string, fn: Function }[]
}

export default class Form extends Component {
  props: IFormProps;

  constructor(props: IAnyObject) {
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