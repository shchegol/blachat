export default class EventBus {
    // todo разобрать как ещё это можно сделать
    public listeners: any;

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

        this.listeners[event] = this.listeners[event].filter((listener: Function) => {
            // todo понять как правильно сделать сравенение
            // return listener !== callback
            return true
        });
    }

    public emit<T>(event: string, ...args: T[]) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event].forEach(function (listener: Function) {
            listener(...args);
        });
    }
}