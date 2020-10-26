import sass from "sass"
import pug from "pug"


let clientInfo = `
  \x1b[32m###### client success #######
  environment: ${process.env.NODE_ENV}
  #############################\x1b[0m
  `;

console.log(clientInfo)