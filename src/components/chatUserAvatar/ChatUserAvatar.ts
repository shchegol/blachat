const pug = require("pug");
import Component    from "../Component";
import template from "./chatUserAvatar.templ"

/**
 * Chat avatar
 * @prop _key - uniq key
 * @prop id - id
 * @prop classes - additional classes
 * @prop title - the text of the title attr
 * @prop src - the path to the image
 * @prop alt - an alternate text for an image
 * @prop listeners - attached listeners
 */

interface IChatUserAvatarProps {
  _key?: number;
  id?: string;
  classes?: string;
  title?: string;
  src?: string;
  alt?: string;
  listeners?: { event: string, fn: Function }[]
}

export default class ChatUserAvatar extends Component {
  props: IChatUserAvatarProps;

  constructor(props: IChatUserAvatarProps) {
    super("div", props);
  }

  render(): string {
    return pug.render(template, this.props);
  }
}