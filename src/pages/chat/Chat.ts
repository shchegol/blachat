import {setInputsValidation} from "../../utils/validation";

declare var require: any
const pug = require('pug');

import Component from "../../components/Component";
import {IAnyObject} from "../../utils/ts/interfaces";
import template from "./chat.templ";

export default class PageProfile extends Component {
    props: IAnyObject;

    constructor(tagName?: string, props?: IAnyObject) {
        super(tagName, {
            ...props,
        });
    }

    componentDidRender() {
        document.title = `BLABLA - авторизация`;
        setInputsValidation();
    }

    render(): string {
        return pug.render(template);
    }
}