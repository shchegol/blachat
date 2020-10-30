import {ValidationAnswer} from './interfaces.js'

export function setFormsValidation() {
    const forms: HTMLCollection = document.getElementsByTagName('form');

    if (forms.length === 0) {
        return
    }

    [].forEach.call(forms, function (elem: HTMLElement) {
        elem.addEventListener('submit', formHandler);
    });

    function formHandler(event: any): void {
        event.preventDefault();

        const inputs: HTMLCollection = event.target.getElementsByTagName('input');

        [].forEach.call(inputs, function (elem: HTMLInputElement) {
            inputValidation(elem)
        });
    }
}

export function setInputsValidation() {
    const inputs: HTMLCollection = document.getElementsByTagName('input');

    if (inputs.length === 0) {
        return
    }

    [].forEach.call(inputs, function (elem: HTMLElement) {
        elem.addEventListener('focusin', inputHandler);
        elem.addEventListener('focusout', inputHandler);
    });

    function inputHandler(event: any): void {
        inputValidation(event.target);
    }
}

export function inputValidation(input: HTMLInputElement): boolean {
    const value: string = input.value.trim();

    const validationType: string = input.dataset.validationType || 'text';
    const validationAnswer: ValidationAnswer = validation(validationType, value)
    const inputBlock: Element | null = input.parentElement;
    const errorBlock: Element | null  = input.nextElementSibling;

    if (inputBlock === null) {
        return validationAnswer.pass
    }

    if (validationAnswer.pass) {
        inputBlock.classList.remove('input_error')
        if (errorBlock !== null) errorBlock.textContent = ''
    } else {
        inputBlock.classList.add('input_error');
        if (errorBlock !== null) errorBlock.textContent = validationAnswer.errMessage || '';
    }

    return validationAnswer.pass
}

export function validation (type: string, value: string, value2?: string): ValidationAnswer {
    let answer: ValidationAnswer = {
        errMessage: '',
        pass: false
    }

    switch (type) {
        case 'text':
            answer.pass = check(/[^\<\>\[\]%'`]+$/, value);
            if(!answer.pass) answer.errMessage = 'Только символы и цифры';
            break;
        case 'name':
            answer.pass = check(/^[а-яёА-ЯЁ]+$/, value);
            if(!answer.pass) answer.errMessage = 'Только русские буквы';
            break;
        case 'password':
            answer.pass = check(/[^\<\>\[\]%'`]+$/, value);
            if(!answer.pass) answer.errMessage = 'Только символы и цифры';
            break;
        case 'email':
            answer.pass = check(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, value);
            if(!answer.pass) answer.errMessage = 'Адрес эл. почты введен неправильно!';
            break;
        case 'phone':
            answer.pass = check(/^\d[\d\(\)\ -]{4,14}\d$/, value);
            if(!answer.pass) answer.errMessage = 'Номер телефона введен неправильно!';
            break;
        case 'equality':
            answer.pass = value === value2;
            if(!answer.pass) answer.errMessage = 'Поля не равны';
            break;
        default:
    }

    return answer
}

function check(pattern: RegExp, value: string) {
    return pattern.test(value.trim())
}