import template from '../../layouts/errors.js';
const pug = require('pug');
const options = {
  title: '404',
  textPrimary: 'Такой страницы не существует...',
};
const compiledFn = pug.render(template, options);
const root = document.getElementById('app');
root.innerHTML = compiledFn;