import {IAnyObject} from "../../utils/ts/interfaces.js";
import Errors from "../../layouts/Errors/Errors.js";
import {renderTo} from "../../utils/helpers";

const props: IAnyObject = {
  title: '500',
  textPrimary: 'Что-то поломалось...',
  textSecondary: 'Мы уже фиксим!',
};


let error500 = new Errors('app', props);

renderTo("#app", error500);