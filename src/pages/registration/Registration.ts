declare var require: any
const pug = require('pug');

import Component from "../../components/Component";
import Button from "../../components/Button/Button"
import Input from "../../components/Input/Input"
import {setFormsValidation, setInputsValidation} from '../../utils/validation';
import {IAnyObject} from "../../utils/ts/interfaces";
import template from "./registration.templ";

export default class Registration extends Component {
    props: IAnyObject;

    constructor(tagName?: string, props?: IAnyObject) {
        super(tagName, {
            ...props,
            inputName: new Input({
                classes: "input_color_white",
                labelText: "Имя",
                type: "text",
                name: "first_name",
                placeholder: "Ваше имя",
                dataValidation: "name",
            }),
            inputSecondName: new Input({
                classes: "input_color_white",
                labelText: "Фамилия",
                type: "text",
                name: "second_name",
                placeholder: "Ваша фамилия",
                dataValidation: "name",
            }),
            inputLogin: new Input({
                classes: "input_color_white",
                labelText: "Логин",
                type: "text",
                name: "login",
                placeholder: "Ваш логин",
                dataValidation: "text",
            }),
            inputEmail: new Input({
                classes: "input_color_white",
                labelText: "Почта",
                type: "text",
                name: "email",
                placeholder: "Ваш email",
                dataValidation: "email",
            }),
            inputPhone: new Input({
                classes: "input_color_white",
                labelText: "Телефон",
                type: "text",
                name: "phone",
                placeholder: "Ваш телефон",
                dataValidation: "phone",
            }),
            inputPassword: new Input({
                classes: "input_color_white",
                labelText: "Пароль",
                type: "password",
                name: "password",
                placeholder: "Ваш пароль",
                dataValidation: "password"
            }),
            inputPasswordCheck: new Input({
                classes: "input_color_white",
                labelText: "Повторите пароль",
                type: "password",
                name: "password_check",
                placeholder: "Новый пароль ещё раз",
                dataValidation: "password"
            }),
            buttonSubmit: new Button({
                classes: 'btn_type_outline btn_color_white',
                type: 'submit',
                text: 'ЗАРЕГЕСТРИРОВАТЬСЯ'
            }),
        });
    }

    componentDidRender() {
        setFormsValidation();
        setInputsValidation();

        document.body.classList.add('bg_color_auth')
    }

    render(): string {
        return pug.render(template, {
            inputName: this.props.inputName.render(),
            inputSecondName: this.props.inputSecondName.render(),
            inputLogin: this.props.inputLogin.render(),
            inputEmail: this.props.inputEmail.render(),
            inputPhone: this.props.inputPhone.render(),
            inputPassword: this.props.inputPassword.render(),
            inputPasswordCheck: this.props.inputPasswordCheck.render(),
            buttonSubmit: this.props.buttonSubmit.render(),
        });
    }
}