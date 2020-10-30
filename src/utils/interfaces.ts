export interface IStringObject {
    [key: string]: string;
}

export interface IArrayOfFunctionObject {
    [key: string]: any[];
}

export interface ValidationAnswer {
    pass: boolean;
    errMessage?: string;
}