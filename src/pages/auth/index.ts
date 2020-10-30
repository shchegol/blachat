// по другому с pug не получилось
declare var require: any
const pug = require('pug');

import template from './authTemplate.js';
import {setFormsValidation, setInputsValidation} from '../../utils/validation.js';
import Button from '../../components/Button/Button.js'

const compiled: string = pug.render(template);
const root: HTMLElement | null = document.getElementById('app');

if (root === null) {
    throw new Error('Элемента с id="app" не существует')
}

root.innerHTML = compiled;

setFormsValidation();
setInputsValidation();

new Button('button-1', {
    classes: 'btn_type_outline btn_color_white mt-40',
    type: 'submit',
    text: 'ВОЙТИ'
});