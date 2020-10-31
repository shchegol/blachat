import {IRegExpObject} from './interfaces.js'

/**
 * @enum {string} - типы проверок
 */
enum ValidationTypes {
    text = 'text',
    name = 'name',
    password = 'password',
    email = 'email',
    phone = 'phone',
    equality = 'equality',
}

/**
 * Валидация форм представленных на странице
 */
export function setFormsValidation() {
    const forms: HTMLCollection = document.getElementsByTagName('form');

    if (forms.length === 0) {
        return
    }

    Array.from(forms, function (elem: HTMLElement) {
        elem.addEventListener('submit', formHandler);
    });

    function formHandler(event: any): void {
        event.preventDefault();

        const inputs: HTMLCollection = event.target.getElementsByTagName('input');

        Array.from(inputs, function (elem: HTMLInputElement) {
            inputValidation(elem)
        });
    }
}

/**
 * Валидация всех input на странице
 */
export function setInputsValidation() {
    const inputs: HTMLCollection = document.getElementsByTagName('input');

    if (inputs.length === 0) {
        return
    }

    Array.from(inputs, function (elem: HTMLElement) {
        elem.addEventListener('blur', inputHandler);
        elem.addEventListener('focus', inputHandler);
    });

    function inputHandler(event: Event): void {
        if (event.target instanceof HTMLInputElement) {
            inputValidation(event.target);
        }
    }
}

/**
 * Валидация элемента input
 * @param input {HTMLInputElement} - проверяемый input
 * @return {string} - сообщение об ошибке, либо пустая строка
 */
export function inputValidation(input: HTMLInputElement): string {
    const value: string = input.value;
    const validationType: string = input.dataset.validationType || 'text';
    const errMessage: string = validation((<any>ValidationTypes)[validationType], value)
    const inputBlock: Element | null = input.parentElement;
    const errorBlock: Element | null = input.nextElementSibling;

    if (inputBlock === null) {
        return errMessage
    }

    if (Boolean(errMessage)) {
        inputBlock.classList.add('input_error');
        if (errorBlock !== null) errorBlock.textContent = errMessage;
    } else {
        inputBlock.classList.remove('input_error')
        if (errorBlock !== null) errorBlock.textContent = ''
    }

    return errMessage
}

/**
 * Валидация
 * @param {ValidationTypes} type - тип валидации
 * @param {string} value - валидируемое значение
 * @param {string} value2 - второе значение для сравнения
 */
export function validation(type: ValidationTypes, value: string, value2?: string): string {
    const patterns: IRegExpObject = {
        text: /[^\<\>\[\]%'`]+$/,
        name: /^[а-яёА-ЯЁ]+$/,
        password: /[^\<\>\[\]%'`]+$/,
        email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        phone: /^\d[\d\(\)\ -]{4,14}\d$/
    }
    let answer: string = ''

    switch (type) {
        case 'text':
            answer = check(patterns.text, value) ? '' : 'Только символы и цифры';
            break;
        case 'name':
            answer = check(patterns.name, value) ? '' : 'Только русские буквы';
            break;
        case 'password':
            answer = check(patterns.password, value) ? '' : 'Только символы и цифры';
            break;
        case 'email':
            answer = check(patterns.email, value) ? '' : 'Адрес эл. почты введен неправильно!';
            break;
        case 'phone':
            answer = check(patterns.phone, value) ? '' : 'Номер телефона введен неправильно!';
            break;
        case 'equality':
            answer = value === value2 ? '' : 'Поля не равны';
            break;
        default:
    }

    return answer
}

/**
 * Проверка значения по паттерну
 * @param {RegExp} pattern - паттерн проверки
 * @param {string} value - проверяемая строка
 */
function check(pattern: RegExp, value: string) {
    return pattern.test(value.trim())
}