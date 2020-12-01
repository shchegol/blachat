import '@/styles/index.scss';
import routerStart from "./router/routerStart";

routerStart();

if(typeof(module.hot) !== 'undefined') {
  module.hot.accept() // eslint-disable-line no-undef
}


