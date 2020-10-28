import template from '../../layouts/errors.js';
const pug = require('pug');
const options = {
  title: '500',
  textPrimary: 'Что-то поломалось...',
  textSecondary: 'Мы уже фиксим!',
};
const compiledFn = pug.render(template, options);
const root = document.getElementById('app');

root.innerHTML = compiledFn;