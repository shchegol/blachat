const pug = require("pug");
import Component from "./Component";
import {IAnyObject} from "../utils/ts/interfaces"

const chatUserAvatarTempl: string = `
if !classes
    - classes = ""
    
div(
    id=id
    key=key
    class="avatar " + classes
    title=title
)
    img(
        src=src
        alt=alt
        class="avatar__img"
    )
`;

export default class ChatUserAvatar extends Component {
    props: IAnyObject;

    constructor(props: IAnyObject) {
        super("div", props);
    }

    render(): string {
        return pug.render(chatUserAvatarTempl, this.props);
    }
}