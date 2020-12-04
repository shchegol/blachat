// @ts-nocheck
import Auth from '@pages/auth/Auth';
import { IFormProps } from '@utils/ts/interfaces';
import Form from '@components/form/Form';
import { getType } from '@utils/helpers';

let auth: Auth;
let form: Form;
let formProps: IFormProps;

beforeEach(() => {
  auth = new Auth();
  form = auth.props.form;
  formProps = form.props;
});

describe('Page Auth', () => {
  it('should has required keys in props', () => {
    expect(auth.props).toHaveProperty('_key');
    expect(auth.props).toHaveProperty('form');
  });

  it('should render a string', () => {
    expect(getType(auth.render())).toEqual('string');
  });

  describe('Form', () => {
    it('should has required keys in props', () => {
      expect(formProps).toHaveProperty('_key');
      expect(formProps).toHaveProperty('listeners');
      expect(formProps).toHaveProperty('items');
    });

    it('should 1 listener', () => {
      expect(formProps.listeners.length).toEqual(1);
    });

    it('listeners should has a submit event', () => {
      expect(formProps.listeners[0]).toHaveProperty('event', 'submit');
    });

    it('should 4 items', () => {
      expect(formProps.items.length).toEqual(4);
    });
  });
});
