import {IStringObject} from "../../utils/interfaces.js";
import Errors from "../../layouts/Errors/Errors.js";

const props: IStringObject = {
  title: '500',
  textPrimary: 'Что-то поломалось...',
  textSecondary: 'Мы уже фиксим!',
};

new Errors('app', props);