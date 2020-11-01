// import {setFormsValidation, setInputsValidation} from '../../utils/validation.js';
import PageAuth from "./PageAuth.js";
import Button from "../../components/Button/Button.js"
import Input from "../../components/Input/Input.js"

let login = new Input({
    classes: "input input_color_white mt-20",
    labelText: "Логин",
    type: "text",
    name: "login",
    placeholder: "Ваш логин",
    dataValidation: "text",
    handlers: {
        focusHandler: () => { console.log('ama click handler!!!'); },
        blurHandler: () => { console.log('ama change handler!!!'); },
    }
})

let pageAuth = new PageAuth('div', {
    inputLogin: login,
    inputPassword: new Input({
        classes: "input input_color_white mt-20",
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
    })
});

function render(query: string, block: any) {
    const root: HTMLElement | null = document.querySelector(query);

    if(root === null) {
        throw new Error(`Элемента ${query} не существует`)
    }

    root.appendChild(block.getContent());
    return root;
}

render("#app", pageAuth);

Input.hydrate();
login.attachListeners()

// pageAuth.componentDidMount = () => {
//     console.log(123)
// }

// Button.hydrate();
// Input.hydrate();

//
// setFormsValidation();
// setInputsValidation();
//
// new Button('button-1', {
//     classes: 'btn_type_outline btn_color_white mt-40',
//     type: 'submit',
//     text: 'ВОЙТИ'
// });