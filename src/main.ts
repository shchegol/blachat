import {IStringObject} from './utils/interfaces.js'

(function () {
    const forms: HTMLCollection = document.getElementsByTagName('form');

    [].forEach.call(forms, function (elem: HTMLElement) {
        elem.addEventListener('submit', logFormData);
    });

    function logFormData(e: Event) {
        e.preventDefault();

        let form = e.target as HTMLFormElement

        const formData = new FormData(form);
        let data: IStringObject = {};

        formData.forEach((value: string, key: string) => {
            data[key] = value;
        });

        console.log(data);
    }
})();


