import sass from "sass"
import pug   from "pug"
import Block from '../../utils/block.js';

export default () => {
  console.log('template 404')

  const compiledFunction = pug.compileFile('src/pages/404/404.pug', null);
  // const html = compiledFunction({title: 'blabla101'});

  // class Page404 extends Block {
  //   constructor(props) {
  //     // Создаем враппер дом-элемент button
  //     super("div", props);
  //   }
  //
  //   render() {
  //     // В проект должен быть ваш собственный шаблонизатор
  //     return compiledFunction({
  //       title: '404'
  //     })
  //   }
  // }

  function render(query, block) {
    const root = document.querySelector(query);
    root.appendChild(block.getContent());
    return root;
  }

  // const page404 = new Page404({
  //   title: '404',
  // });

  // app — это id дива в корне DOM
  render("#app", compiledFunction({title: 'blabla101'}));

  // Через секунду контент изменится сам, достаточно обновить пропсы
  // setTimeout(() => {
  //   page404.setProps({
  //     title: 'bla',
  //   });
  // }, 1000);
}