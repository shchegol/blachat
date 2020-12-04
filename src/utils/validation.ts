import { IRegExpObject } from './ts/interfaces';

/**
 * Проверка значения по паттерну
 * @param {RegExp} pattern - паттерн проверки
 * @param {string} value - проверяемая строка
 */
function checkValue(pattern: RegExp, value: string) {
  return pattern.test(value.trim());
}

/**
 * Валидация
 * @param {string} type - тип валидации
 * @param {string} value - валидируемое значение
 * @param {string} value2 - второе значение для сравнения
 *
 * типы проверок
 * text,
 * name,
 * password,
 * email,
 * phone,
 * equality,
 */
export function validation(type: string, value: string, value2?: string): string {
  const patterns: IRegExpObject = {
    text: /[^<>[\]%'`]+$/,
    name: /^[а-яёА-ЯЁ]+$/,
    password: /[^<>[\]%'`]+$/,
    email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    phone: /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/,
  };
  let answer = '';

  switch (type) {
    case 'text':
      answer = checkValue(patterns.text, value) ? '' : 'Только символы и цифры';
      break;
    case 'name':
      answer = checkValue(patterns.name, value) ? '' : 'Только русские буквы';
      break;
    case 'password':
      answer = checkValue(patterns.password, value) ? '' : 'Только символы и цифры';
      break;
    case 'email':
      answer = checkValue(patterns.email, value) ? '' : 'Пример: name@site.ru';
      break;
    case 'phone':
      answer = checkValue(patterns.phone, value)
        ? ''
        : 'Можно так +7(903)888-88-88, или так 9261234567';
      break;
    case 'equality':
      answer = value === value2 ? '' : 'Поля не равны';
      break;
    default:
  }

  return answer;
}

/**
 * Валидация элемента input
 * @param input {HTMLInputElement | EventTarget | null} - проверяемый input
 * @return {string} - сообщение об ошибке, либо пустая строка
 */
export function inputValidation(input: HTMLInputElement | EventTarget | null): string {
  if (!(input instanceof HTMLInputElement) || !input) return '';

  const { value } = input;
  const validationType: string = input.dataset.validationType || 'text';
  const errMessage: string = validation(validationType, value);
  const inputBlock: Element | null = input.parentElement;
  const errorBlock: Element | null = input.nextElementSibling;

  if (inputBlock === null) {
    return errMessage;
  }

  if (errMessage) {
    inputBlock.classList.add('input_error');
    if (errorBlock !== null) errorBlock.textContent = errMessage;
  } else {
    inputBlock.classList.remove('input_error');
    if (errorBlock !== null) errorBlock.textContent = '';
  }

  return errMessage;
}

/**
 * Валидация формы
 * @param event {Event} - event проверяемой формы
 */
export function formValidation(event: Event): boolean {
  event.preventDefault();

  if (event.target instanceof HTMLFormElement) {
    const inputs: HTMLCollection = event.target.getElementsByTagName('input');
    const checkEl: string[] = Array.from(inputs, (elem: HTMLInputElement) => inputValidation(elem));
    return checkEl.every((answer) => answer === '');
  }

  throw new Error('Event.target in formValidation must be the HTMLFormElement');
}
