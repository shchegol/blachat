const path = require("path");
const settings = require("./settings/common");
const express = require("express");
const app = express();
const PORT = 4000;
const serverInfo = `
  \x1b[32m###### server success ####### 
  listen: http://localhost:${settings.server.port}/
  #############################\x1b[0m
  `;
const HTML_FILE = path.join(__dirname, "dist/index.html");

app.get("*", (req, res) => {
  res.sendFile(HTML_FILE);
});

app.listen(settings.server.port, function() {
  console.log(serverInfo);
});