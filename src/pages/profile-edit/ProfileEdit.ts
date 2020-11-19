const pug = require('pug');
import {formValidation} from '../../utils/validation';
import Component        from '../../components/Component';
import Form             from '../../components/Form';
import Input            from '../../components/Input';
import Button           from '../../components/Button';
import {IAnyObject}     from '../../utils/ts/interfaces';
import template         from './profileEdit.templ';
import {appRouter}      from '../../router/Router';
import ButtonIcon       from '../../components/ButtonIcon';

export default class ProfileEdit extends Component {
  props: IAnyObject;

  constructor(tagName?: string, props?: IAnyObject) {
    super(tagName, {
      ...props,
      buttonBack: new ButtonIcon({
        classes: 'btn-icon btn-icon_size_l mt-20',
        type: 'button',
        iconName: 'arrow_back',
        listeners: [
          {event: 'click', fn: () => appRouter.go('/')},
        ],
      }),
      form: new Form({
        listeners: [
          {
            event: 'submit', fn: (e: Event) => {
              if (formValidation(e)) {
                // authApi
                //     .signin(getFormData(e))
                //     .then((res: XMLHttpRequest) => {
                //         if (res.response === "OK") {
                //             appRouter.go("/")
                //         }
                //     })
                //     .catch(err => console.error(err))
              }
            },
          },
        ],
        elements: [
          new Input({
            classes: 'mt-20',
            labelText: 'Имя',
            type: 'text',
            name: 'first_name',
            placeholder: 'Ваше имя',
            dataValidation: 'name',
            // value: store.props.user.first_name,
          }),
          new Input({
            classes: 'mt-20',
            labelText: 'Фамилия',
            type: 'text',
            name: 'second_name',
            placeholder: 'Ваша фамилия',
            dataValidation: 'name',
            // value: store.props.user.second_name,
          }),
          new Input({
            classes: 'mt-20',
            labelText: 'Логин',
            type: 'text',
            name: 'login',
            placeholder: 'Ваш логин',
            dataValidation: 'text',
            // value: store.props.user.login,
          }),
          new Input({
            classes: 'mt-20',
            labelText: 'Отображаемое имя',
            type: 'text',
            name: 'display_name',
            placeholder: 'Как вас видят другие люди',
            dataValidation: 'text',
            // value: store.props.user.display_name,
          }),
          new Input({
            classes: 'mt-20',
            labelText: 'Email',
            type: 'text',
            name: 'email',
            placeholder: 'Ваш email',
            dataValidation: 'email',
            // value: store.props.user.email,
          }),
          new Input({
            classes: 'mt-20',
            labelText: 'Телефон',
            type: 'text',
            name: 'phone',
            placeholder: 'Ваш телефон',
            dataValidation: 'phone',
            // value: store.props.user.phone,
          }),
          new Input({
            classes: 'mt-20',
            labelText: 'Пароль',
            type: 'password',
            name: 'oldPassword',
            placeholder: 'Текущий пароль',
            dataValidation: 'password',
          }),
          new Input({
            classes: 'mt-20',
            labelText: 'Новый пароль',
            type: 'password',
            name: 'newPassword',
            placeholder: 'Новый пароль',
            dataValidation: 'password',
          }),
          new Button({
            classes: 'btn_type_outline mt-40',
            type: 'submit',
            text: 'СОХРАНИТЬ',
          }),
          new Button({
            classes: 'btn_type_link mt-20 mb-40',
            type: 'button',
            text: 'Отмена',
            listeners: [
              {event: 'click', fn: () => appRouter.go('/profile')},
            ],
          }),
        ],
      }),
    });
  }

  render(): string {
    return pug.render(template, {
      key: this.props.key,
      buttonBack: this.props.buttonBack.render(),
      form: this.props.form.render(),
    });
  }
}