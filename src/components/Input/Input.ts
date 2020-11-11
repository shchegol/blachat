// по другому с pug не получилось
declare var require: any
const pug = require('pug');

import Component from '../Component.js';
import {IStringObject} from '../../utils/ts/interfaces'

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
    )
    span.input__message #{message}
`;

class Input extends Component {
    props: IStringObject;

    constructor(props: IStringObject) {
        super('div', props);
    }

    render(): string {
        return pug.render(inputTemplate, this.props);
    }
}

export default Input;