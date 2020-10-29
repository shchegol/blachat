import template from '../../layouts/errors.js';
// по другому с pug не получилось
declare var require: any
const pug = require('pug');

const props = {
  title: '404',
  textPrimary: 'Такой страницы не существует...',
};
const compiled: string = pug.render(template, props);
const root: HTMLElement | null = document.getElementById('app');

if (root === null) {
  throw new Error('Компиляция страницы 404. Элемента с id="app" не существует')
}

root.innerHTML = compiled;