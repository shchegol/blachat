import {setInputsValidation} from "../../utils/validation.js";

declare var require: any
const pug = require('pug');

import Block from "../../utils/block.js";
import {IAnyObject} from "../../utils/interfaces.js";
import template from "./chatTemplate.js";

export default class PageProfile extends Block {
    props: IAnyObject;

    constructor(tagName?: string, props?: IAnyObject) {
        super(tagName, {
            ...props,
        });
    }

    componentDidRender() {
        // Pug отдёт шаблон как строку.
        // Долго мачался, но так и не получилось навешать события до отрисовки
        setInputsValidation();
    }

    render(): string {
        return pug.render(template);
    }
}