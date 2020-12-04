import { TRequestData } from '@utils/ts/types';
import Input from '@components/input/Input';
import Button from '@components/button/Button';

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
  body?: IRequestData;
  timeout?: number;
}

export interface IRequestData {
  [name: string]: TRequestData;
}

export interface IRequestResult {
  ok: boolean;
  status: number;
  statusText: string;
  data: <T>() => T;
  dataText: string;
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

// todo вынести в отдельный файл и организовать наследование
export interface IFormProps {
  _key?: number;
  id?: string;
  items?: (Input | Button)[];
  listeners?: { event: string, fn: () => void }[]
}
