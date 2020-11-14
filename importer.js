'use strict';

import FileHound       from 'filehound';
import fs              from 'fs';
import {dirname}       from 'path';
import {fileURLToPath} from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const files = FileHound.create()
    .paths(__dirname + '/static/build')
    .discard('node_modules')
    .ext('js')
    .find();

files.then((filePaths) => {
  filePaths.forEach((filepath) => {
    fs.readFile(filepath, 'utf8', (err, data) => {
      if (!data.match(/import .* from/g)) {
        return;
      }
      let newData = data.replace(/(import .* from\s+['"])(.*)(?=['"])/g, '$1$2.js');
      if (err) throw err;

      fs.writeFile(filepath, newData, function(err) {
        if (err) {
          throw err;
        }
      });
    });

  });
});