import {IAnyObject} from "../../utils/interfaces.js";
import Errors from "../../layouts/Errors/Errors.js";
import renderTo from "../../utils/renderTo.js";

const props: IAnyObject = {
  title: '500',
  textPrimary: 'Что-то поломалось...',
  textSecondary: 'Мы уже фиксим!',
};


let error500 = new Errors('app', props);

renderTo("#app", error500);