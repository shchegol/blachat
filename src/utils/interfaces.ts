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
    (...args: IStringObject[]): void
}

export interface IArrayOfListenersObject {
    [key: string]: IListener[]
}

