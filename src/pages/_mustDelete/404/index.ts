import {IAnyObject} from "../../../utils/ts/interfaces";
import Errors from "../../../layouts/Errors/Errors";
import {renderTo} from "../../../utils/helpers";

const props: IAnyObject = {
  title: '404',
  textPrimary: 'Такой страницы не существует...',
};

let error404 = new Errors('app', props);

renderTo("#app", error404);

