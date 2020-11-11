import {TRequestData} from './types'

export interface IStringObject {
    [key: string]: string;
}

export interface IRegExpObject {
    [key: string]: RegExp;
}

export interface IAnyObject {
    [key: string]: any;
}

export interface IListener {
    (...args: IStringObject[]): void;
}

export interface IArrayOfListenersObject {
    [key: string]: IListener[];
}

export interface IRequestOptions {
    method?: string;
    ignoreCache?: boolean;
    headers?: { [key: string]: string; };
    data?: IRequestData;
    timeout?: number;
}

export interface IRequestData {
    [key: string]: TRequestData;
}

export interface IRequestResult {
    ok: boolean;
    status: number;
    statusText: string;
    data: string;
    json: <T>() => T;
    headers: string;
}

