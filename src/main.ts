import Router from './components/Router';
import Chat from './pages/chat/Chat';
import Auth from './pages/auth/Auth';
import Registration from './pages/registration/Registration';
import Index from './pages/profile/Profile';
import ProfileEdit from './pages/profile-edit/ProfileEdit';

const router = new Router("#app");

router
    .use("/", Chat)
    .use("/auth", Auth)
    .use("/registration", Registration)
    .use("/profile", Index)
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


