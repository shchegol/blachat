import express         from "express";
import {dirname}       from "path";
import {fileURLToPath} from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 4000;

const getPage = (pageName) => {
  return `${__dirname}/static/${pageName}.html`;
};

app.use(express.static("./static"));
app.get("*", (req, res) => {
  res.sendFile(getPage("/index"));
});

let serverInfo = `
  \x1b[32m###### server success ####### 
  listen: http://localhost:${PORT}/
  #############################\x1b[0m
  `;

app.listen(PORT, function() {
  console.log(serverInfo);
});



