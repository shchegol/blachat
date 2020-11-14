import {IAnyObject} from "../../../utils/ts/interfaces";
import Errors from "../../../layouts/Errors/Errors";
import {renderTo} from "../../../utils/helpers";

const props: IAnyObject = {
  title: '500',
  textPrimary: 'Что-то поломалось...',
  textSecondary: 'Мы уже фиксим!',
};


let error500 = new Errors('app', props);

renderTo("#app", error500);