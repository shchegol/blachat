// по другому с pug не получилось
declare var require: any
const pug = require('pug');

import Block from '../../utils/block.js';
// import {IStringObject} from '../../utils/interfaces'

const inputTemplate: string = `  
label(
    class="input " + classes
)
    span.input__label #{labelText}
    input(
        id=id
        type=type
        name=name
        placeholder=placeholder
        data-validation-type=dataValidation
        class="input__field"
        onFocus=focusHandler
        onBlur=blurHandler
    )
    span.input__message #{message}
`;

class Input extends Block {
    props: any;

    constructor(props: any) {
        super('div', props);
    }

    render(): string {
        return pug.render(inputTemplate, this.props);
    }
}

export default Input;