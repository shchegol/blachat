declare var require: any
const pug = require('pug');

import Component from './Component';
import {IAnyObject} from '../utils/ts/interfaces'

const chatDropdownItemTempl: string = `
if !classes
    - classes = ""
    
li(
    id=id
    key=key
    class="dropdown__item " + classes
)
    if iconName
        i.material-icons #{iconName}
    
    | #{text}
`;

/**
 * Chat dropdown item
 * @prop id - id
 * @prop key - uniq key
 * @prop classes - additional classes
 * @prop iconName - name of material design icon
 * @prop text - text in item
 */

export default class ChatDropdownItem extends Component {
    props: IAnyObject;

    constructor(props: IAnyObject) {
        super('div', props);
    }

    render(): string {
        return pug.render(chatDropdownItemTempl, this.props);
    }
}