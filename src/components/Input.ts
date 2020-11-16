// по другому с pug не получилось
declare var require: any
const pug = require('pug');

import Component from './Component';
import {IAnyObject} from '../utils/ts/interfaces'

const inputTemplate: string = `  
label(
    class="input " + classes
)
    span.input__label #{labelText}
    input(
        id=id
        key=key
        type=type
        name=name
        value=value
        placeholder=placeholder
        data-validation-type=dataValidation
        class="input__field"
    )
    span.input__message #{message}
`;

class Input extends Component {
    props: IAnyObject;

    constructor(props: IAnyObject) {
        super('div', props);
    }

    render(): string {
        return pug.render(inputTemplate, this.props);
    }
}

export default Input;