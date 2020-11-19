const pug = require("pug");
import Component from "./Component";
import {IAnyObject} from "../utils/ts/interfaces"

const listTempl: string = `
if !classes
    - classes = ""

ul(
    id=id
    key=key
    class="user-list " + classes
)
    if renderedItem.length > 0
        each item in renderedItem
            | !{item}
`;

export default class ChatUserlist extends Component {
    props: IAnyObject;

    constructor(props: IAnyObject) {
        super("div", props);
    }

    render(): string {
        let renderedItem: string[] = [];

        this.props.items.forEach((el: any) => {
            renderedItem.push(el.render())
        })

        return pug.render(listTempl, {renderedItem, ...this.props});
    }
}