const express = require('express');

const app = express();
const PORT = 4000;

app.use(express.static('./static'));

app.listen(PORT, function () {
  console.log(`BLABLA chat app listening on port ${PORT}!`);
});