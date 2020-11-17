declare var require: any
const pug = require('pug');

import Component from './Component';
import {IAnyObject} from '../utils/ts/interfaces'

const chatDropdownTempl: string = `
if !classes
    - classes = ""
    
div(
    id=id
    key=key
    class="dropdown " + classes
)
    button(
        type="button"
        class="btn-icon"
    )
        if iconName
            i.material-icons #{iconName}
        else
            #{text}
            
    
    ul.dropdown__content
        if renderedItem.length > 0
        each item in renderedItem
            | !{item}
`;

/**
 * Chat dropdown
 * @prop id - id
 * @prop key - uniq key
 * @prop classes - additional classes
 * @prop iconName - name of material design icon in dropdown btn if need
 * @prop text - text in dropdown btn
 */

export default class ChatDropdown extends Component {
    props: IAnyObject;

    constructor(props: IAnyObject) {
        super('div', props);
    }

    render(): string {
        let renderedItem: string[] = [];

        this.props.items.forEach((el: any) => {
            renderedItem.push(el.render())
        })

        return pug.render(chatDropdownTempl, {renderedItem, ...this.props});
    }
}