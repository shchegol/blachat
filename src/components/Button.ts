// по другому с pug не получилось
declare var require: any
const pug = require('pug');

import Component from './Component';
import {IAnyObject} from '../utils/ts/interfaces'

const buttonTemplate: string = `  
if !classes
    - classes = ""
    
button(
    id=id
    key=key
    type=type
    class="btn " + classes
) #{text}
`;

export default class Button extends Component {
    props: IAnyObject;

    constructor(props: IAnyObject) {
        super('div', props);
    }

    render(): string {
        return pug.render(buttonTemplate, this.props);
    }
}