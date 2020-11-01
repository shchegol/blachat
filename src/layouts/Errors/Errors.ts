declare var require: any
const pug = require('pug');

import Block from "../../utils/block.js";
import {IStringObject} from "../../utils/interfaces.js";
import template from "./errorsTemplate.js";

class Errors extends Block {
    props: IStringObject;

    constructor(rootID: string, props: IStringObject) {
        super(rootID, props);
    }

    render(): string {
        return pug.render(template, this.props);
    }
}

export default Errors;