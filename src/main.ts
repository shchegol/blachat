import Router from './components/Router.js';
import Chat from './pages/chat/Chat.js';
import Auth from './pages/auth/Auth.js';
import Registration from './pages/registration/Registration.js';
import Profile from './pages/profile/Profile.js';
import ProfileEdit from './pages/profile-edit/ProfileEdit.js';
const router = new Router("#app");

router
    .use("/", Chat)
    .use("/auth", Auth)
    .use("/registration", Registration)
    .use("/profile", Profile)
    .use("/profile-edit", ProfileEdit)
    .start();

// (function () {
//     const forms: HTMLCollection = document.getElementsByTagName('form');
//
//     [].forEach.call(forms, function (elem: HTMLElement) {
//         elem.addEventListener('submit', logFormData);
//     });
//
//     function logFormData(e: Event) {
//         e.preventDefault();
//
//         let form = e.target as HTMLFormElement
//
//         const formData = new FormData(form);
//         let data: IStringObject = {};
//
//         formData.forEach((value: string, key: string) => {
//             data[key] = value;
//         });
//
//         console.log(data);
//     }
// })();


