import Component from '@utils/Component';
import Input from '@components/input/Input';
import Button from '@components/button/Button';

/**
 * Form
 * @prop _key - uniq key
 * @prop id - id
 * @prop items - from elements
 * @prop listeners - attached listeners
 */

interface IFormProps {
  _key?: number;
  id?: string;
  items?: (Input | Button)[];
  renderedItems?: string[];
  listeners?: { event: string, fn: Function }[]
}

const tempFn: (props: IFormProps) => string = require('@components/form/form.templ.pug');

class Form extends Component {
  props: IFormProps;

  constructor(props: IFormProps) {
    super('div', props);
  }

  render(): string {
    let renderedItems:string[] = [];

    if (this.props.items) {
      renderedItems = this.props.items.map((el) => el.render());
    }

    return tempFn({ renderedItems, ...this.props });
  }
}

export default Form;
