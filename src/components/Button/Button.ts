// по другому с pug не получилось
declare var require: any
const pug = require('pug');

import Block from '../../utils/block.js';
import {IStringObject} from '../../utils/interfaces'

const buttonTemplate: string = `  
button(
    id=id
    type=type
    class="btn " + classes
) #{text}
`;

class Button extends Block {
    props: IStringObject;

    constructor(props: IStringObject) {
        super('div', props);
    }

    render(): string {
        // console.log("Button render", pug.render(buttonTemplate, this.props), this.props)
        return pug.render(buttonTemplate, this.props);
    }
}

export default Button;