import {IStringObject} from './utils/interfaces.js'

(function () {
    const forms: HTMLCollection = document.getElementsByTagName('form');

    [].forEach.call(forms, function (elem: HTMLElement) {
        elem.addEventListener('submit', logFormData);
    });

    function logFormData(e: any) {
        e.preventDefault();

        const formData: FormData = new FormData(e.target);
        let data: IStringObject = {};

        formData.forEach((value: string, key: string) => {
            data[key] = value;
        });

        console.log(data);
    }
})();


