import Component from '@utils/Component';
import store from '@store/initStore';
import { IAnyObject } from '@utils/ts/interfaces';
import { appRouter } from '@router/Router';
import Button from '@components/button/Button';
import { logout } from '@store/actionCreators/auth';

const tempFn = require('@pages/profile/profile.templ.pug');
const defaultImg = require('@root/img/bg.jpg').default;

const profileProps = () => ({
  buttonBack: new Button({
    classes: 'btn-icon btn-icon_size_l mt-20',
    type: 'button',
    iconName: 'arrow_back',
    listeners: [
      { event: 'click', fn: () => appRouter.go('/') },
    ],
  }),
  buttonEdit: new Button({
    classes: 'btn_type_outline mt-40',
    type: 'button',
    text: 'ИЗМЕНИТЬ ДАННЫЕ',
    listeners: [
      { event: 'click', fn: () => appRouter.go('/profile-edit') },
    ],
  }),
  buttonLogout: new Button({
    classes: 'btn_type_link btn_color_red mt-20',
    type: 'button',
    text: 'Выйти из аккаунта',
    listeners: [
      {
        event: 'click', fn: () => logout(),
      },
    ],
  }),
});

export default class Profile extends Component {
  props: IAnyObject;

  constructor(tagName?: string, props?: IAnyObject) {
    super(tagName, {
      ...props,
      ...store.props.user,
      ...profileProps(),
    });
  }

  render(): string {
    return tempFn({
      _key: this.props._key,
      avatar: this.props.avatar || defaultImg,
      first_name: this.props.first_name,
      second_name: this.props.second_name,
      login: this.props.login,
      email: this.props.email,
      phone: this.props.phone,
      buttonBack: this.props.buttonBack.render(),
      buttonEdit: this.props.buttonEdit.render(),
      buttonLogout: this.props.buttonLogout.render(),
    });
  }
}
