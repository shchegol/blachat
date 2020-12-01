import {
  IArrayOfListenersObject,
  IListener,
  IStringObject,
} from "../utils/ts/interfaces";

export default class EventBus {
  public listeners: IArrayOfListenersObject;

  public constructor() {
    this.listeners = {};
  }

  public on(event: string, callback: IListener): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  public off(event: string, callback: IListener): void {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter((listener) => {
      return listener !== callback;
    });
  }

  public emit(event: string, ...args: IStringObject[]): void {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event].forEach((listener) => {
      listener(...args);
    });
  }
}