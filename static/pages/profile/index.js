import template from './profileTemplate.js';
const pug = require('pug');
const compiledFn = pug.render(template);
const root = document.getElementById('app');

root.innerHTML = compiledFn;