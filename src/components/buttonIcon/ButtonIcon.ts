import Component from '@utils/Component';

/**
 * Button with icon
 * @prop _key - uniq _key
 * @prop id - id
 * @prop classes - additional classes
 * @prop type - button type
 * @prop iconName - material icon name
 * @prop listeners - attached listeners
 */

interface IButtonIconProps {
  _key?: number;
  id?: string;
  classes?: string;
  type?: string;
  title?: string;
  iconName?: string;
  listeners?: { event: string, fn: () => void }[]
}

const tempFn: (props: IButtonIconProps) => string = require('@components/buttonIcon/buttonIcon.templ.pug');

export default class ButtonIcon extends Component {
  props: IButtonIconProps;

  constructor(props: IButtonIconProps) {
    super('div', props);
  }

  render(): string {
    return tempFn(this.props);
  }
}
