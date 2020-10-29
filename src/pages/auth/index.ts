// по другому с pug не получилось
declare var require: any
const pug = require('pug');

import template from './authTemplate.js';
import Input from '../../components/Input/Input.js'
import Button from '../../components/Button/Button.js'
import Block from "../../utils/block";

const compiled: string = pug.render(template);
const root: HTMLElement | null = document.getElementById('app');

if (root === null) {
    throw new Error('Элемента с id="app" не существует')
}

root.innerHTML = compiled;

const inputLogin: Input = new Input({
    classes: 'input_color_white mt-50',
    labelText: 'Логин',
    type: 'text',
    name: 'login',
    placeholder: 'Ваш логин',
});

const submitButton: Button = new Button({
    classes: 'btn_type_outline btn_color_white mt-40',
    type: 'submit',
    text: 'ВОЙТИ'
});

function render(query: string, block: Block): HTMLElement {
    const root: HTMLElement | null = document.querySelector(query);
    const elem: Node | null = block.getContent();

    if (root === null) {
        throw new Error(`Селектора ${query} не существует`)
    }

    if (elem === null) {
        throw new Error(`Элемента не существует`)
    }

    root.appendChild(elem);
    return root;
}

render(".input-1", inputLogin);
render(".button-1", submitButton);