const pug = require("pug");
import Component from "../../components/Component";
// import {store} from "../../store/Store";
import {IAnyObject} from "../../utils/ts/interfaces";
import {appRouter} from "../../router/Router";
import {authApi} from "../../API/AuthAPI";
import Button from "../../components/Button";
import ButtonIcon from "../../components/ButtonIcon";
import template from "./profile.templ";

export default class Profile extends Component {
    props: IAnyObject;

    constructor(tagName?: string, props?: IAnyObject) {
        super(tagName, {
            ...props,
            // ...store.props,
            first_name: null,
            buttonBack: new ButtonIcon({
                classes: "btn-icon btn-icon_size_l mt-20",
                type: "button",
                iconName: "arrow_back",
                listeners: [
                    {event: "click", fn: () => appRouter.go("/")}
                ]
            }),
            buttonEdit: new Button({
                classes: "btn_type_outline mt-40",
                type: "button",
                text: "ИЗМЕНИТЬ ДАННЫЕ",
                listeners: [
                    {event: "click", fn: () => appRouter.go("/profile-edit")}
                ]
            }),
            buttonLogout: new Button({
                classes: "btn_type_link btn_color_red mt-20",
                type: "button",
                text: "Выйти из аккаунта",
                listeners: [
                    {
                        event: "click", fn: () => {
                            authApi
                                .logout()
                                .then((res: XMLHttpRequest) => {
                                    if (res.response === "OK") {
                                        appRouter.go("/auth")
                                    }
                                })
                                .catch(err => console.error(err))
                        }
                    }
                ]
            }),
        });
    }

    render(): string {
        return pug.render(template, {
            key: this.props.key,
            first_name: this.props.user.first_name,
            second_name: this.props.user.second_name,
            login: this.props.user.login,
            email: this.props.user.email,
            phone: this.props.user.phone,
            buttonBack: this.props.buttonBack.render(),
            buttonEdit: this.props.buttonEdit.render(),
            buttonLogout: this.props.buttonLogout.render(),
        });
    }
}