import Component from '@utils/Component';
import { IRequestData, IStringObject, IAnyObject } from '@utils/ts/interfaces';
import { TRequestData } from '@utils/ts/types';

export function getType(value: any): string {
  const regex = /^\[object (\S+?)\]$/;
  const matches: string[] = Object.prototype.toString.call(value).match(regex) || [];

  return (matches[1] || 'undefined').toLowerCase();
}

export function isEqual(a: any, b: any): boolean {
  if (a === b) return true;
  if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime();
  if (!a || !b || (typeof a !== 'object' && typeof b !== 'object')) return a === b;
  if (a === null || a === undefined || b === null || b === undefined) return false;
  if (a.prototype !== b.prototype) return false;
  const keys = Object.keys(a);
  if (keys.length !== Object.keys(b).length) return false;
  return keys.every((k) => isEqual(a[k], b[k]));
}

export function merge(lhs: IAnyObject, rhs: IAnyObject): IAnyObject {
  const lhsInner = lhs;
  const rhsInner = rhs;

  Object.keys(rhsInner).forEach((prop) => {
    if (typeof lhsInner[prop] !== 'object') {
      lhsInner[prop] = rhsInner[prop];
    } else if (typeof rhsInner[prop] === 'object') {
      lhsInner[prop] = merge(lhsInner[prop], rhsInner[prop]);
    }
  });

  return lhs;
}

export function queryStringify(data: IRequestData): string | never {
  if (getType(data) !== 'object') {
    throw new Error('Query data must be an object');
  }

  return Object.entries(data)
    .reduce((prev: string, curr: (string | TRequestData)[]) => {
      let arrIndex = 0;
      const ampers: string = prev ? '&' : '?';
      let arrAmpers = '';

      function expand(value: any[], queryString = ''): string {
        let queryStringInner = queryString;
        if (getType(value[1]) === 'array') {
          arrAmpers = arrIndex ? '&' : '';
          queryStringInner = `${queryStringInner}${arrAmpers}${value[0]}[${arrIndex}]=${value[1][arrIndex]}`;
          arrIndex += 1;

          return arrIndex <= value.length
            ? expand(value, queryStringInner)
            : queryStringInner;
        }

        if (getType(value[1]) === 'object') {
          const key: string = Object.keys(value[1])[0];
          queryStringInner = `${queryStringInner}[${key}]`;

          if (getType(value[1][key]) === 'object') {
            return expand([key, value[1][key]], queryStringInner);
          }

          return `${curr[0]}${queryStringInner}=${value[1][key]}`;
        }

        return `${value[0]}=${value[1]}`;
      }

      return `${prev}${ampers}${expand(curr)}`;
    }, '');
}

export function renderTo(query: string, component: Component) {
  const root: HTMLElement | null = document.querySelector(query);

  if (root === null) {
    throw new Error(`Элемента ${query} не существует`);
  }

  root.appendChild(component.getContent());
  return root;
}

export function removeFrom(query: string, component: Component) {
  const root: HTMLElement | null = document.querySelector(query);

  if (root === null) {
    throw new Error(`Элемента ${query} не существует`);
  }

  root.removeChild(component.getContent());
  return root;
}

export function getFormData(e: Event) {
  const form = e.target as HTMLFormElement;
  const formData = new FormData(form);
  const data: IStringObject = {};

  formData.forEach((value: string, key: string) => {
    data[key] = value;
  });

  return data;
}
