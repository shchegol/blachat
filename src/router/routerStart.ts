import {appRouter}  from './Router';
import Chat         from '../pages/chat/Chat';
import Auth         from '../pages/auth/Auth';
import Registration from '../pages/registration/Registration';
import Index        from '../pages/profile/Profile';
import ProfileEdit  from '../pages/profile-edit/ProfileEdit';
import {store}      from '../store/initStore';
import {fetchtUser} from '../store/actionCreators/auth';

export default function routerStart() {
  appRouter
      .use('/', Chat)
      .use('/profile', Index)
      .use('/profile-edit', ProfileEdit)
      .use('/auth', Auth)
      .use('/registration', Registration);

  fetchtUser()
      .then(() => {
        console.log(store.value);
        if (store.value.auth.isLoggedIn) {
          appRouter.go('/');
        } else {
          appRouter.go('/auth');
        }
      })
      .then(() => appRouter.start());
}
