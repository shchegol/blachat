import EventBus                        from "./EventBus";
import {IAnyObject, IEventBusFunction} from "../utils/ts/interfaces";

export default class Component {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_CDR: "flow:component-did-render",
    FLOW_RENDER: "flow:render",
  };

  props: IAnyObject;
  eventBus: IEventBusFunction;
  protected _element: HTMLElement;
  protected _id: string;
  protected _meta: { tagName: string, props: IAnyObject };

  constructor(tagName: string = "div", props: IAnyObject) {
    const eventBus: EventBus = new EventBus();

    this._id = "uniq" + parseInt(String(Math.random() * 1000000));
    this.props = this._makePropsProxy({_key: this._id, ...props});
    this._registerEvents(eventBus);
    this._meta = {
      tagName,
      props,
    };
    this.eventBus = () => eventBus;

    eventBus.emit(Component.EVENTS.INIT);
  }

  get id(): string {
    return this._id;
  }

  get element(): HTMLElement {
    return this._element;
  }

  init(): void {
  }

  componentDidMount(): void {
  }

  componentDidUpdate(): boolean {
    return true;
  }

  componentDidRender(): void {
  }

  getContent() {
    return this.element;
  }

  setProps = (nextProps: IAnyObject): void => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  render(): string {
    return "";
  }

  show() {
    this.getContent().style.display = "block";
  }

  hide() {
    this.getContent().style.display = "none";
  }

  protected _init(): void {
    this.init();
    this._createResources();
    this.eventBus().emit(Component.EVENTS.FLOW_CDM);
  }

  protected _registerEvents(eventBus: EventBus): void {
    eventBus.on(Component.EVENTS.INIT, this._init.bind(this));
    eventBus.on(Component.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Component.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Component.EVENTS.FLOW_CDR, this._componentDidRender.bind(this));
    eventBus.on(Component.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  protected _createResources(): void {
    const {tagName} = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  protected _componentDidMount(): void {
    this.componentDidMount();
    this.eventBus().emit(Component.EVENTS.FLOW_RENDER);
  }

  protected _componentDidUpdate(): void {
    const response = this.componentDidUpdate();

    if (response) {
      this.eventBus().emit(Component.EVENTS.FLOW_RENDER);
    }
  }

  protected _componentDidRender(): void {
    setTimeout(() => {
      this.componentDidRender();
      this._setListeners();
    }, 0);
  }

  protected _render(): void {
    this._element.innerHTML = this.render();
    this.eventBus().emit(Component.EVENTS.FLOW_CDR);
  }

  // todo вариант не идеальный но нет времени. Переписать
  protected _setListeners(): void {
    if (!this.props.listeners) return;

    const el = document.querySelector(`[_key=${this.id}]`);

    if (!el) return;

    this.props.listeners.forEach(
        (listener: { event: string, fn: () => {} }) => {
          el.addEventListener(listener.event, listener.fn);
        });
  }

  protected _makePropsProxy(props: IAnyObject) {
    return new Proxy(props, {
      set: (
          target: IAnyObject, prop: keyof IAnyObject, value: any): boolean => {
        const oldProps = {...this._meta.props};

        if (target[prop] !== value) {
          target[prop] = value;
          this.eventBus().emit(Component.EVENTS.FLOW_CDU, oldProps, target);
          return true;
        }

        return false;
      },
      get(target: IAnyObject, prop: keyof IAnyObject) {
        const value = target[prop];

        return typeof value === "function" ? value.bind(target) : value;
      },
      deleteProperty() {
        throw new Error("Нет прав");
      },
    });
  }

  protected _createDocumentElement(tagName: string): HTMLElement {
    return document.createElement(tagName);
  }
}