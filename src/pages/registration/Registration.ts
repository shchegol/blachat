declare var require: any
const pug = require('pug');

import Component from "../../components/Component";
import {appRouter} from '../../router/Router';
import {authApi} from "../../API/AuthAPI";
import Form from "../../components/Form"
import Input from "../../components/Input"
import Button from "../../components/Button"
import {inputValidation, formValidation} from '../../utils/validation';
import {IAnyObject} from "../../utils/ts/interfaces";
import {getFormData} from "../../utils/helpers";
import template from "../../layouts/Auth/auth.templ";

const inputCommonProps = {
    classes: "input_color_white mt-20",
    type: "text",
    listeners: [
        {event: 'focus', fn: (e: Event) => inputValidation(e.target)},
        {event: 'blur', fn: (e: Event) => inputValidation(e.target)},
    ]
}

export default class Registration extends Component {
    props: IAnyObject;

    constructor(tagName?: string, props?: IAnyObject) {
        super(tagName, {
            ...props,
            form: new Form({
                listeners: [
                    {
                        event: 'submit', fn: (e: Event) => {
                            if (formValidation(e)) {
                                authApi
                                    .signup(getFormData(e))
                                    .then((res: XMLHttpRequest) => {
                                        if(res.response === "OK") {
                                            appRouter.go("/")
                                        }
                                    })
                                    .catch(err => console.error(err))
                            }
                        }
                    },
                ],
                elements: [
                    new Input({
                        ...inputCommonProps,
                        labelText: "Имя",
                        name: "first_name",
                        placeholder: "Ваше имя",
                        dataValidation: "name",
                    }),
                    new Input({
                        ...inputCommonProps,
                        labelText: "Фамилия",
                        name: "second_name",
                        placeholder: "Ваша фамилия",
                        dataValidation: "name",
                    }),
                    new Input({
                        ...inputCommonProps,
                        labelText: "Логин",
                        name: "login",
                        placeholder: "Ваш логин",
                        dataValidation: "text",
                    }),
                    new Input({
                        ...inputCommonProps,
                        labelText: "Почта",
                        name: "email",
                        placeholder: "Ваш email",
                        dataValidation: "email",
                    }),
                    new Input({
                        ...inputCommonProps,
                        labelText: "Телефон",
                        name: "phone",
                        placeholder: "Ваш телефон",
                        dataValidation: "phone",
                    }),
                    new Input({
                        ...inputCommonProps,
                        labelText: "Пароль",
                        type: "password",
                        name: "password",
                        placeholder: "Ваш пароль",
                        dataValidation: "password",
                    }),
                    new Input({
                        ...inputCommonProps,
                        labelText: "Повторите пароль",
                        type: "password",
                        name: "password_check",
                        placeholder: "Новый пароль ещё раз",
                        dataValidation: "password",
                    }),
                    new Button({
                        classes: 'btn_type_outline btn_color_white mt-20',
                        type: 'submit',
                        text: 'ЗАРЕГЕСТРИРОВАТЬСЯ'
                    }),
                    new Button({
                        classes: 'btn_type_link btn_color_white mt-20',
                        type: 'button',
                        text: 'Войти',
                        listeners: [
                            {event: 'click', fn: () => appRouter.go("/auth")}
                        ]
                    }),
                ]
            }),
        });
    }

    componentDidRender() {
        document.title = `BLABLA - регистрация`;
        document.body.classList.add('bg_color_auth')
    }

    render(): string {
        return pug.render(template, {
            key: this.props.key,
            form: this.props.form.render(),
        });
    }
}