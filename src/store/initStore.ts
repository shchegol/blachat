import Store from './Store';
import authReducer from './reducers/auth';
import userReducer from './reducers/user';
import initState from './initState';

const reducers = {
  auth: authReducer,
  user: userReducer,
};

export default new Store(reducers, initState);
