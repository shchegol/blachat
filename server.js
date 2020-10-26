import express from 'express';

const app = express();
const PORT = 4000;

app.use(express.static('./static'));

let serverInfo = `
  \x1b[32m###### server success ####### 
  environment: ${process.env.NODE_ENV}
  host:        localhost
  port:        ${PORT}
  listen: http://localhost:${PORT}/
  #############################\x1b[0m
  `;

app.listen(PORT, function() {
  console.log(serverInfo);
});