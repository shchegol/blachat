import template from './registrationTemplate.js';
// по другому с pug не получилось
declare var require: any
const pug = require('pug');
const compiled: string = pug.render(template);
const root: HTMLElement | null = document.getElementById('app');

if (root === null) {
    throw new Error('Элемента с id="app" не существует')
}

root.innerHTML = compiled;