import Component    from "../../components/Component";
import {IAnyObject} from "../../utils/ts/interfaces";

const tempFn = require("pug-loader!./errors.templ.pug");

export default class Errors extends Component {
  props: IAnyObject;

  constructor(tagName?: string, props?: IAnyObject) {
    super(tagName, {...props});
  }

  render(): string {
    return tempFn(this.props);
  }
}