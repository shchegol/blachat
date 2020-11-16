// по другому с pug не получилось
declare var require: any
const pug = require('pug');

import Component from './Component';
import {IAnyObject} from '../utils/ts/interfaces'

const formTemplate: string = `
form(
    key=key
    class=classes
    id=id
)
    each el in renderedElements
        | !{el}
`;

export default class Form extends Component {
    props: IAnyObject;

    constructor(props: IAnyObject) {
        super('div', props);
    }

    render(): string {
        let renderedElements: string[] = [];

        this.props.elements.forEach((el: any) => {
            renderedElements.push(el.render())
        })

        return pug.render(formTemplate, {renderedElements, ...this.props});
    }
}