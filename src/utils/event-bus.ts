import {IArrayOfFunctionObject} from './interfaces'

export default class EventBus {
    // todo разобрать как ещё это можно сделать
    public listeners: IArrayOfFunctionObject;

    public constructor() {
        this.listeners = {};
    }

    public on(event: string, callback: void) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }

        this.listeners[event].push(callback);
    }

    public off(event: string, callback: void) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event] = this.listeners[event].filter((listener: void) => {
            return listener !== callback
        });
    }

    public emit<T>(event: string, ...args: T[]) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event].forEach(function (listener: (...props: any[]) => void) {
            listener(...args);
        });
    }
}