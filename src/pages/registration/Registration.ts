import Component from '@utils/Component';
import { appRouter } from '@router/Router';
import { signup } from '@store/actionCreators/auth';
import Form from '@components/form/Form';
import Input from '@components/input/Input';
import Button from '@components/button/Button';
import { inputValidation, formValidation } from '@utils/validation';
import { IAnyObject } from '@utils/ts/interfaces';
import { getFormData } from '@utils/helpers';

const tempFn = require('@root/layouts/Auth/auth.templ.pug');

const inputCommonProps = {
  classes: 'input_color_white mt-20',
  type: 'text',
  listeners: [
    { event: 'focus', fn: (e: Event) => inputValidation(e.target) },
    { event: 'blur', fn: (e: Event) => inputValidation(e.target) },
  ],
};
const registrationProps = () => ({
  form: new Form({
    listeners: [
      {
        event: 'submit',
        fn: (e: Event) => {
          if (formValidation(e)) {
            signup(getFormData(e));
          }
        },
      },
    ],
    items: [
      new Input({
        ...inputCommonProps,
        labelText: 'Имя',
        name: 'first_name',
        placeholder: 'Ваше имя',
        dataValidation: 'name',
      }),
      new Input({
        ...inputCommonProps,
        labelText: 'Фамилия',
        name: 'second_name',
        placeholder: 'Ваша фамилия',
        dataValidation: 'name',
      }),
      new Input({
        ...inputCommonProps,
        labelText: 'Логин',
        name: 'login',
        placeholder: 'Ваш логин',
        dataValidation: 'text',
      }),
      new Input({
        ...inputCommonProps,
        labelText: 'Почта',
        name: 'email',
        placeholder: 'Ваш email',
        dataValidation: 'email',
      }),
      new Input({
        ...inputCommonProps,
        labelText: 'Телефон',
        name: 'phone',
        placeholder: 'Ваш телефон',
        dataValidation: 'phone',
      }),
      new Input({
        ...inputCommonProps,
        labelText: 'Пароль',
        type: 'password',
        name: 'password',
        placeholder: 'Ваш пароль',
        dataValidation: 'password',
      }),
      new Input({
        ...inputCommonProps,
        labelText: 'Повторите пароль',
        type: 'password',
        name: 'password_check',
        placeholder: 'Новый пароль ещё раз',
        dataValidation: 'password',
      }),
      new Button({
        classes: 'btn_type_outline btn_color_white mt-20',
        type: 'submit',
        text: 'ЗАРЕГИСТРИРОВАТЬСЯ',
      }),
      new Button({
        classes: 'btn_type_link btn_color_white mt-20',
        type: 'button',
        text: 'Войти',
        listeners: [
          { event: 'click', fn: () => appRouter.go('/auth') },
        ],
      }),
    ],
  }),
});

export default class Registration extends Component {
  props: IAnyObject;

  constructor(tagName?: string, props?: IAnyObject) {
    super(tagName, {
      ...props,
      ...registrationProps(),
    });
  }

  render(): string {
    return tempFn({
      _key: this.props._key,
      form: this.props.form.render(),
    });
  }
}
