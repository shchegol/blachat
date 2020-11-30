const express = require("express");
const app = express();
const PORT = 4000;
const serverInfo = `
  \x1b[32m###### server success ####### 
  listen: http://localhost:${PORT}/
  #############################\x1b[0m
  `;
const getPage = (pageName) => {
  return `${__dirname}/dist/${pageName}.html`;
};

app.use(express.static("./dist"));
app.get("*", (req, res) => {
  res.sendFile(getPage("/index"));
});

app.listen(PORT, function() {
  console.log(serverInfo);
});



