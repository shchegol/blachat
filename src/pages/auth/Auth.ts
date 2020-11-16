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
import template from "../../layouts/Auth/auth.templ";
import {getFormData} from "../../utils/helpers";

const inputCommonProps = {
    classes: "input_color_white mt-20",
    type: "text",
    listeners: [
        {event: 'focus', fn: (e: Event) => inputValidation(e.target)},
        {event: 'blur', fn: (e: Event) => inputValidation(e.target)},
    ]
}

export default class Auth extends Component {
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
                                    .signin(getFormData(e))
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
                        labelText: "Логин",
                        name: "login",
                        placeholder: "Ваш логин",
                        dataValidation: "text",
                    }),
                    new Input({
                        ...inputCommonProps,
                        labelText: "Пароль",
                        type: "password",
                        name: "password",
                        placeholder: "Ваш пароль",
                        dataValidation: "password",
                    }),
                    new Button({
                        classes: 'btn_type_outline btn_color_white mt-40',
                        type: 'submit',
                        text: 'ВОЙТИ',
                    }),
                    new Button({
                        classes: 'btn_type_link btn_color_white mt-20',
                        type: 'button',
                        text: 'Зарегестрироваться',
                        listeners: [
                            {event: 'click', fn: () => appRouter.go("/registration")}
                        ]
                    }),
                ]
            }),
        });
    }

    componentDidRender() {
        document.title = `BLABLA - авторизация`;
        document.body.classList.add('bg_color_auth');
    }

    render(): string {
        return pug.render(template, {
            key: this.props.key,
            form: this.props.form.render(),
        });
    }
}