import Block from '../../utils/block.js';
import {IObjectString} from '../../utils/interfaces'
// по другому с pug не получилось
declare var require: any
const pug = require('pug');

const inputTemplate: string = `  
button(
    type=type
    class="btn " + classes
) #{text}
`;

// interface ButtonProps {
//     type: string;
//     classes: string;
//     text: string;
// }

class Button extends Block {
    props: IObjectString;

    constructor(props: IObjectString) {
        super('div', props);
    }

    render(): string {
        return pug.render(inputTemplate, this.props);
    }
}

export default Button;