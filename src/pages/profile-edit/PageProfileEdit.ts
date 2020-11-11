declare var require: any
const pug = require('pug');

import Component from "../../components/Component.js";
import Button from "../../components/Button/Button.js"
import Input from "../../components/Input/Input.js"
import {setFormsValidation, setInputsValidation} from '../../utils/validation.js';
import {IAnyObject} from "../../utils/ts/interfaces.js";
import template from "./profileEditTemplate.js";

export default class PageProfileEdit extends Component {
    props: IAnyObject;

    constructor(tagName?: string, props?: IAnyObject) {
        super(tagName, {
            ...props,
            inputName: new Input({
                labelText: "Имя",
                type: "text",
                name: "first_name",
                placeholder: "Ваше имя",
                dataValidation: "name",
            }),
            inputSecondName: new Input({
                labelText: "Фамилия",
                type: "text",
                name: "second_name",
                placeholder: "Ваша фамилия",
                dataValidation: "name",
            }),
            inputLogin: new Input({
                labelText: "Логин",
                type: "text",
                name: "login",
                placeholder: "Ваш логин",
                dataValidation: "text",
            }),
            inputDisplayName: new Input({
                labelText: "Отображаемое имя",
                type: "text",
                name: "display_name",
                placeholder: "Как вас видят другие люди",
                dataValidation: "text",
            }),
            inputEmail: new Input({
                labelText: "Email",
                type: "text",
                name: "email",
                placeholder: "Ваш email",
                dataValidation: "email",
            }),
            inputPhone: new Input({
                labelText: "Телефон",
                type: "text",
                name: "phone",
                placeholder: "Ваш телефон",
                dataValidation: "phone",
            }),
            inputOldPassword: new Input({
                labelText: "Пароль",
                type: "password",
                name: "oldPassword",
                placeholder: "Текущий пароль",
                dataValidation: "password"
            }),
            inputNewPassword: new Input({
                labelText: "Новый пароль",
                type: "password",
                name: "newPassword",
                placeholder: "Новый пароль",
                dataValidation: "password"
            }),
            inputNewPasswordCheck: new Input({
                labelText: "Новый пароль ещё раз",
                type: "password",
                name: "newPassword_check",
                placeholder: "Новый пароль ещё раз",
                dataValidation: "password"
            }),
            buttonSubmit: new Button({
                classes: 'btn_type_outline',
                type: 'submit',
                text: 'СОХРАНИТЬ'
            }),
        });
    }

    componentDidRender() {
        // Pug отдёт шаблон как строку.
        // Долго мачался, но так и не получилось навешать события до отрисовки
        setFormsValidation();
        setInputsValidation();
    }

    render(): string {
        return pug.render(template, {
            inputName: this.props.inputName.render(),
            inputSecondName: this.props.inputSecondName.render(),
            inputLogin: this.props.inputLogin.render(),
            inputDisplayName: this.props.inputDisplayName.render(),
            inputEmail: this.props.inputEmail.render(),
            inputPhone: this.props.inputPhone.render(),
            inputOldPassword: this.props.inputOldPassword.render(),
            inputNewPassword: this.props.inputNewPassword.render(),
            inputNewPasswordCheck: this.props.inputNewPasswordCheck.render(),
            buttonSubmit: this.props.buttonSubmit.render(),
        });
    }
}