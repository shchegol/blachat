import Block from '../../utils/block.js';
import {IObjectString} from '../../utils/interfaces'
// по другому с pug не получилось
declare var require: any
const pug = require('pug');

let inputTemplate = `
label(
    class="input " + classes
)
    span.input__label #{labelText}
    input(
        type=type
        name=name
        class="input__field"
        placeholder=placeholder
    )
    span.input__message #{messageText}
`;

// interface InputProps {
//   classes?: string;
//   labelText?: string;
//   type: string;
//   name: string;
//   placeholder?: string;
//   messageText?: string;
// }

export default class Input extends Block {
  props: IObjectString;

  constructor(props: IObjectString) {
    super('div', props);
  }

  render(): string {
    return pug.render(inputTemplate, this.props);
  }
}