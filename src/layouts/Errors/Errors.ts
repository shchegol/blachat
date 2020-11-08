declare var require: any
const pug = require('pug');

import Block from "../../utils/block.js";
import {IAnyObject} from "../../utils/interfaces.js";
import template from "./errorsTemplate.js";

export default class Errors extends Block {
    props: IAnyObject;

    constructor(tagName?: string, props?: IAnyObject) {
        super(tagName, {...props});
    }

    render(): string {
        return pug.render(template, this.props);
    }
}