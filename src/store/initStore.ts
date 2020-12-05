import Store from '@store/Store';
import authReducer from '@store/reducers/auth';
import userReducer from '@store/reducers/user';
import initState from '@store/initState';

const reducers = {
  auth: authReducer,
  user: userReducer,
};

export default new Store(reducers, initState);
