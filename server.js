const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 4000;
const indexFile = path.join(__dirname, 'dist/index.html');
const info = `
  \x1b[32m###### server success ####### 
  listen port: ${port}
  #############################\x1b[0m
  `;

app.use(express.static('./dist'));

app.get('*', (req, res) => {
  res.sendFile(indexFile);
});

app.listen(port, () => {
  console.log(info);
});
