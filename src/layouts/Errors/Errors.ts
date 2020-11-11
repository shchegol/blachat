declare var require: any
const pug = require('pug');

import Component from "../../components/Component.js";
import {IAnyObject} from "../../utils/ts/interfaces.js";
import template from "./errorsTemplate.js";

export default class Errors extends Component {
    props: IAnyObject;

    constructor(tagName?: string, props?: IAnyObject) {
        super(tagName, {...props});
    }

    render(): string {
        return pug.render(template, this.props);
    }
}