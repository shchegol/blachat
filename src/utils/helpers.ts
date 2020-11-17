import Component from "../components/Component";
import {IRequestData, IStringObject} from './ts/interfaces'
import {TRequestData} from "./ts/types";
import {IAnyObject} from "./ts/interfaces";

export function getType(value: any): string {
    const regex: RegExp = /^\[object (\S+?)\]$/;
    const matches: string[] | [] = Object.prototype.toString.call(value).match(regex) || [];

    return (matches[1] || 'undefined').toLowerCase();
}

export function isEqual(a: any, b: any): boolean {
    if (a === b) return true;
    if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime();
    if (!a || !b || (typeof a !== 'object' && typeof b !== 'object')) return a === b;
    if (a === null || a === undefined || b === null || b === undefined) return false;
    if (a.prototype !== b.prototype) return false;
    let keys = Object.keys(a);
    if (keys.length !== Object.keys(b).length) return false;
    return keys.every(k => isEqual(a[k], b[k]));
}

export function merge(lhs: IAnyObject, rhs: IAnyObject): IAnyObject {
    for (let prop in rhs) {
        if (rhs.hasOwnProperty(prop)) {
            if (typeof lhs[prop] != 'object') {
                lhs[prop] = rhs[prop];
            } else if (typeof rhs[prop] == 'object') {
                lhs[prop] = merge(lhs[prop], rhs[prop]);
            }
        }
    }

    return lhs;
}

export function queryStringify(data: IRequestData): string | never {
    if (getType(data) !== 'object') {
        throw new Error(`Query data must be an object`);
    }

    return Object.entries(data).reduce((prev:string, curr: (string | TRequestData)[] ) => {
        let arrIndex: number = 0;
        let ampers: string = prev ? '&' : '?';
        let arrAmpers: string = ''

        function expand(value: any[], queryString: string = ''): string {
            if (getType(value[1]) === 'array') {
                arrAmpers = arrIndex ? '&' : '';
                queryString = `${queryString}${arrAmpers}${value[0]}[${arrIndex}]=${value[1][arrIndex]}`
                arrIndex++

                return arrIndex <= value.length
                    ? expand(value, queryString)
                    : queryString
            }

            if (getType(value[1]) === 'object') {
                const key: any = Object.keys(value[1])[0];
                queryString = `${queryString}[${key}]`

                if (getType(value[1][key]) === 'object') {
                    return expand([key, value[1][key]], queryString)
                }

                return `${curr[0]}${queryString}=${value[1][key]}`
            }

            return `${value[0]}=${value[1]}`
        }

        return `${prev}${ampers}${expand(curr)}`;
    }, '')
}

export function renderTo(query: string, component: Component) {
    const root: HTMLElement | null = document.querySelector(query);

    if (root === null) {
        throw new Error(`Элемента ${query} не существует`);
    }

    root.appendChild(component.getContent());
    return root;
}

export function getFormData(e: Event) {
    const form = e.target as HTMLFormElement
    const formData = new FormData(form);
    let data: IStringObject = {};

    formData.forEach((value: string, key: string) => {
        data[key] = value;
    });

    return data
}