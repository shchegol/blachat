import Component from '@utils/Component';
import { IStringObject, IAnyObject } from '@utils/ts/interfaces';

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

type TQuery = string | number | [] | IAnyObject;

export function queryStringify(data: TQuery, dataKey?: TQuery): string | never {
  if (!data) {
    throw new Error('Query object must contain strings, numbers, arrays and objects only');
  }

  function valueHandler(acc: string, key: TQuery, value: TQuery) {
    if (dataKey) {
      const newKey = `[${key}]`;
      return `${acc}${dataKey}${queryStringify(value, newKey)}`;
    }

    return `${acc}${queryStringify(value, key)}`;
  }

  if (getType(data) === 'array' && data instanceof Array) {
    return data.reduce((acc: string, value: TQuery, i: number) => valueHandler(acc, i, value), '');
  }

  if (getType(data) === 'object') {
    return Object.entries(data).reduce((acc, [key, value]) => valueHandler(acc, key, value), '');
  }

  return `${dataKey}=${data}&`;
}

export function renderTo(query: string, component: Component) {
  const root: HTMLElement | null = document.querySelector(query);

  if (root === null) {
    throw new Error(`Элемента ${query} не существует`);
  }

  root.appendChild(component.element);
  return root;
}

export function removeFrom(query: string, component: Component) {
  const root: HTMLElement | null = document.querySelector(query);

  if (root === null) {
    throw new Error(`Элемента ${query} не существует`);
  }

  root.removeChild(component.element);
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
