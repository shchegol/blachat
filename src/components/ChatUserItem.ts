// по другому с pug не получилось
declare var require: any
const pug = require('pug');

import Component from './Component';
import {IAnyObject} from '../utils/ts/interfaces'

const itemTemplate: string = `
if !classes
    - classes = ""
    
li(
    id=id
    key=key
    class="user-list__item " + classes
    data-chat-id=chatId
) 
    img(
        src=avatar
        alt=""
        class="user-list__avatar"
    )
    div.user-list__main 
        h5.user-list__title #{title}
        p.user-list__text #{text}
        
    if messageCount > 0 || date     
        div.user-list__support
            if date
                time.user-list__date #{date}
            if messageCount > 0
                span.badge #{messageCount}
`;

export default class ChatUserItem extends Component {
    props: IAnyObject;

    constructor(props: IAnyObject) {
        super('div', props);
    }

    render(): string {
        return pug.render(itemTemplate, this.props);
    }
}