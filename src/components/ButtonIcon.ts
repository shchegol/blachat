const pug = require("pug");
import Component from "./Component";
import {IAnyObject} from "../utils/ts/interfaces"

const buttonIconTemplate: string = `
if !classes
    - classes = ""
    
button(
    id=id
    key=key
    type=type
    class="btn-icon " + classes
) 
    i.material-icons #{iconName}
`;

export default class Button extends Component {
    props: IAnyObject;

    constructor(props: IAnyObject) {
        super("div", props);
    }

    render(): string {
        return pug.render(buttonIconTemplate, this.props);
    }
}