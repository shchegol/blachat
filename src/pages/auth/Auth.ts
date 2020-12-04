import { IAnyObject } from '@utils/ts/interfaces';
import Component from '@utils/Component';
import { appRouter } from '@router/Router';
import Form from '@components/form/Form';
import Input from '@components/input/Input';
import Button from '@components/button/Button';
import { inputValidation, formValidation } from '@utils/validation';
import { getFormData } from '@utils/helpers';
import { signin } from '@store/actionCreators/auth';

const tempFn = require('@root/layouts/Auth/auth.templ.pug');

const inputCommonProps = {
  classes: 'input_color_white mt-20',
  type: 'text',
  listeners: [
    { event: 'focus', fn: (e: Event) => inputValidation(e.target) },
    { event: 'blur', fn: (e: Event) => inputValidation(e.target) },
  ],
};

export default class Auth extends Component {
  props: IAnyObject;

  constructor(tagName?: string, props?: IAnyObject) {
    super(tagName, {
      ...props,
      form: new Form({
        listeners: [
          {
            event: 'submit',
            fn: (e: Event) => {
              if (formValidation(e)) {
                signin(getFormData(e));
              }
            },
          },
        ],
        items: [
          new Input({
            ...inputCommonProps,
            labelText: 'Логин',
            name: 'login',
            placeholder: 'Ваш логин',
            dataValidation: 'text',
          }),
          new Input({
            ...inputCommonProps,
            labelText: 'Пароль',
            type: 'password',
            name: 'password',
            placeholder: 'Ваш пароль',
            dataValidation: 'password',
          }),
          new Button({
            classes: 'btn_type_outline btn_color_white mt-40',
            type: 'submit',
            text: 'ВОЙТИ',
          }),
          new Button({
            classes: 'btn_type_link btn_color_white mt-20',
            type: 'button',
            text: 'Зарегистрироваться',
            listeners: [
              { event: 'click', fn: () => appRouter.go('/registration') },
            ],
          }),
        ],
      }),
    });
  }

  render(): string {
    return tempFn({
      _key: this.props._key,
      form: this.props.form.render(),
    });
  }
}
