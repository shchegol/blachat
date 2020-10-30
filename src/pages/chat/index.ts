
// по другому с pug не получилось
declare var require: any
const pug = require('pug');

import {setInputsValidation} from '../../utils/validation.js';
import template from './chatTemplate.js';

const compiled: string = pug.render(template);
const root: HTMLElement | null = document.getElementById('app');

if (root === null) {
    throw new Error('Элемента с id="app" не существует')
}

root.innerHTML = compiled;

setInputsValidation();