import pug from "pug"

const compiledFunction = pug.compileFile('src/pages/404.pug');

console.log(
    compiledFunction({
      title: '404'
    })
)