declare var require: any
const pug = require('pug');

import Block from "../../utils/block.js";
// import Button from "../../components/Button/Button.js"
// import Input from "../../components/Input/Input.js"
// import {setFormsValidation, setInputsValidation, inputValidation} from '../../utils/validation.js';
import {IAnyObject} from "../../utils/interfaces.js";
import template from "./authTemplate.js";

export default class PageAuth extends Block {
    props: IAnyObject;

    constructor(tagName?: string, props?: any) {
        super(tagName, {...props});
    }

    componentDidMount() {
        // console.log('componentDidMount')
        // this.attachListeners();
    }

    // attachListeners() {
    //     // console.log(this)
    //     console.log('attachListeners', document.getElementsByTagName('input'))
    //
    //     // inputValidation()
    //
    //     // setFormsValidation();
    //     // setInputsValidation();
    // }

    render(): string {
        // console.log('PageAuth render', this.props.button)
        // setFormsValidation();
        // setInputsValidation();
        const context = {
            inputLogin: this.props.inputLogin.renderToString(),
            inputPassword: this.props.inputPassword.renderToString(),
            buttonSubmit: this.props.buttonSubmit.renderToString()
        }

        pug.render(template, context);

        return pug.render(template, {
            inputLogin: this.props.inputLogin.renderToString(),
            inputPassword: this.props.inputPassword.renderToString(),
            buttonSubmit: this.props.buttonSubmit.renderToString()
        });
    }
}