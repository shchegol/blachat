import {appRouter} from './Router';
import Chat from '../pages/chat/Chat';
import Auth from '../pages/auth/Auth';
import Registration from '../pages/registration/Registration';
import Index from '../pages/profile/Profile';
import ProfileEdit from '../pages/profile-edit/ProfileEdit';

export default function routerStart() {
    appRouter
        .use("/", Chat)
        .use("/auth", Auth)
        .use("/registration", Registration)
        .use("/profile", Index)
        .use("/profile-edit", ProfileEdit)
        .start();
}
