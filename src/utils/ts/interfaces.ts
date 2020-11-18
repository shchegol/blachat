import {TRequestData} from "./types"
import EventBus from "../../components/EventBus";

export interface IStringObject {
    [key: string]: string;
}

export interface IEventBusFunction {
    (): EventBus;
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
    // todo разобраться с any
    body?: any;
    timeout?: number;
}

export interface IRequestData {
    [name: string]: TRequestData;
}

export interface IRequestResult {
    ok: boolean;
    status: number;
    statusText: string;
    data: string;
    json: <T>() => T;
    headers: string;
}

export interface ISignup {
    first_name: string;
    second_name: string;
    login: string;
    email: string;
    password: string;
    phone: string;
}

export interface ISignin {
    login: string;
    password: string;
}

