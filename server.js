import express         from 'express';
import {dirname}       from 'path';
import {fileURLToPath} from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 4000;
const getPage = (pageName) => {
  return `${__dirname}/static/${pageName}.html`;
};
const pages = {
  '/': 'chat',
  '/auth': 'auth',
  '/profile': 'profile',
  '/profile-edit': 'profile-edit',
  '/registration': 'registration',
  '/404': '404',
  '/500': '500',
};

app.use(express.static('./static'));

for (let page in pages) {
  app.get(page, function(req, res) {
    res.sendFile(getPage(pages[page]));
  });
}

app
    .get('/*', function(req, res) {
      res.status(404).sendFile(getPage('/404'));
    })
    .get('/*', function(req, res) {
      res.status(500).sendFile(getPage('/500'));
    });

let serverInfo = `
  \x1b[32m###### server success ####### 
  listen:      http://localhost:${PORT}/
  #############################\x1b[0m
  `;

app.listen(PORT, function() {
  console.log(serverInfo);
});



