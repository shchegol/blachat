import {IStringObject} from "../../utils/interfaces.js";
import Errors from "../../layouts/Errors/Errors.js";

const props: IStringObject = {
  title: '404',
  textPrimary: 'Такой страницы не существует...',
};

new Errors('app', props);

