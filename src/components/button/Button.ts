import Component from '@utils/Component';

/**
 * Chat dropdown
 * @prop {number} _key - uniq key
 * @prop {string} id - id
 * @prop {string} classes - additional classes
 * @prop {string} type - button type
 * @prop {string} text - text in button
 * @prop listeners - attached listeners
 */

interface IButtonProps {
  _key?: number;
  id?: string;
  classes?: string;
  type?: string;
  text?: string;
  listeners?: { event: string, fn: () => void }[]
}

const tempFn: (props: IButtonProps) => string = require('@components/button/button.templ.pug');

export default class Button extends Component {
  props: IButtonProps;

  constructor(props: IButtonProps) {
    super('div', props);
  }

  render(): string {
    return tempFn(this.props);
  }
}
