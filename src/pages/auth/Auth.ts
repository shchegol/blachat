declare var require: any
const pug = require('pug');

import Component from "../../components/Component";
import Button from "../../components/Button/Button"
import Input from "../../components/Input/Input"
import {setFormsValidation, setInputsValidation} from '../../utils/validation';
import {IAnyObject} from "../../utils/ts/interfaces";
import template from "./auth.templ";

export default class Auth extends Component {
    props: IAnyObject;

    constructor(tagName?: string, props?: IAnyObject) {
        super(tagName, {
            ...props,
            inputLogin: new Input({
                classes: "input_color_white mt-20",
                labelText: "Логин",
                type: "text",
                name: "login",
                placeholder: "Ваш логин",
                dataValidation: "text",
            }),
            inputPassword: new Input({
                classes: "input_color_white mt-20",
                labelText: "Пароль",
                type: "password",
                name: "password",
                placeholder: "Ваш пароль",
                dataValidation: "password"
            }),
            buttonSubmit: new Button({
                classes: 'btn_type_outline btn_color_white mt-40',
                type: 'submit',
                text: 'ВОЙТИ'
            }),
        });
    }

    componentDidRender() {
        setFormsValidation();
        setInputsValidation();

        document.title = `BLABLA - авторизация`;
        document.body.classList.add('bg_color_auth');
    }

    render(): string {
        return pug.render(template, {
            inputLogin: this.props.inputLogin.render(),
            inputPassword: this.props.inputPassword.render(),
            buttonSubmit: this.props.buttonSubmit.render()
        });
    }
}