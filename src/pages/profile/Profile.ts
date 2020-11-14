declare var require: any
const pug = require('pug');

import Component from "../../components/Component";
import {IAnyObject} from "../../utils/ts/interfaces";
import template from "./profile.templ";

export default class Profile extends Component {
    props: IAnyObject;

    constructor(tagName?: string, props?: IAnyObject) {
        super(tagName, {
            ...props,
        });
    }

    render(): string {
        return pug.render(template);
    }
}