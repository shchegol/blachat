import EventBus from './event-bus.js'
import {IAnyObject} from './interfaces'

class Block {
    static EVENTS = {
        INIT: 'init',
        FLOW_CDM: 'flow:component-did-mount',
        FLOW_CDU: 'flow:component-did-update',
        FLOW_RENDER: 'flow:render',
    };

    protected _element: HTMLElement;
    protected _id: string;
    protected _meta: { tagName: string, props: IAnyObject };
    protected _subscriptions: any;
    public props: IAnyObject;
    public eventBus: Function;
    static _instances: Array<any>;

    constructor(tagName: string = "div", props: IAnyObject) {
        const eventBus: EventBus = new EventBus();

        this.props = this._makePropsProxy(props);
        this._id = 'uniq' + parseInt(String(Math.random() * 1000000));
        this._registerEvents(eventBus);
        this._subscriptions = [];
        this._meta = {
            tagName,
            props,
        };
        this.eventBus = () => eventBus;

        Block._instances.push(this);
        eventBus.emit(Block.EVENTS.INIT);
    }

    static hydrate() {}

    public get id(): string {
        return this._id;
    }

    public get element(): HTMLElement {
        return this._element;
    }

    public setElement(element: HTMLElement) {
        // console.log('setElement')
        this._element = element;
    }

    public init(): void {
    }

    public componentDidMount(): void {
    }

    public componentDidUpdate(): boolean {
        return true;
    }

    public getContent() {
        return this.element;
    }

    public setProps = (nextProps: IAnyObject): void => {
        if (!nextProps) {
            return;
        }

        Object.assign(this.props, nextProps);
    };

    public render(): string {
        return ''
    }

    public renderToString() {
        const wrapper = document.createElement('div');
        this._element.innerHTML = this.render();
        wrapper.appendChild(this._element);

        return wrapper.innerHTML;
    }

    public hydrate() {}

    public attachListeners () {
        // console.log('attachListeners')
        this._attachListeners()
    }

    protected _init(): void {
        // console.log('_init')
        this.init();
        this._createResources();
        this._element.setAttribute('_key', this.id);
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }

    protected _registerEvents(eventBus: EventBus): void {
        // console.log('_registerEvents')
        eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    protected _createResources(): void {
        // console.log('_createResources')
        const {tagName} = this._meta
        this._element = this._createDocumentElement(tagName);
    }

    protected _componentDidMount(): void {
        // console.log('_componentDidMount')
        this.componentDidMount();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    protected _componentDidUpdate(): void {
        // console.log('_componentDidUpdate')
        const response = this.componentDidUpdate();

        if (response) {
            this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
        }
    }

    protected _render(): void {
        // console.log('_render')
        const block = this.render();

        if (this._element) {
            this._element.innerHTML = block;
            this._attachListeners();
        }
    }

    protected _attachListeners() {
        // console.log('_attachListeners')
        this._gatherListeners();

        console.log(this._subscriptions)

        const iterator = this._subscriptions.entries();
        let item = iterator.next();
        while (!item.done) {
            const [elem, events] = item.value;
            Object.keys(events).forEach(eventName => {
                console.log(elem, eventName, events[eventName]);
                elem.addEventListener(eventName, events[eventName]);
            });
            item = iterator.next();
        }
    }

    protected _gatherListeners() {
        // console.log('_gatherListeners')
        const block = this._element;
        const stack = [block];
        const subscriptions = new Map();

        // console.log(stack)

        while (stack.length) {
            const current = stack.pop();
            if (!current)
                break;
            const attrs = Array.from(current.attributes).filter(attr => attr.name.startsWith('on'));

            if (!attrs.length) {
                const children:any = Array.from(current.children);
                stack.push(...children);
                continue;
            }

            if (!subscriptions.get(current)) {
                subscriptions.set(current, {});
            }
            const events = subscriptions.get(current);


            attrs.forEach(attr => {
                const eventName = attr.name.substring(2).toLocaleLowerCase();

                const handler = this.props.handlers[attr.value];

                events[eventName] = handler;

                current.removeAttribute(attr.name);
            });
            const children:any = Array.from(current.children);
            stack.push(...children);
        }

        console.log('subscriptions', subscriptions)

        this._subscriptions = subscriptions;
    }

    protected _makePropsProxy(props: IAnyObject) {
        // console.log('_makePropsProxy')
        return new Proxy(props, {
            set: (target: IAnyObject, prop: keyof IAnyObject, value: any): boolean => {
                const oldProps = {...this._meta.props};

                // if (target[prop] !== value) {
                if (target[prop] !== value) {
                    target[prop] = value;
                    this.eventBus().emit(Block.EVENTS.FLOW_CDU, oldProps, target);
                    return true;
                } else {
                    return false;
                }
            },
            deleteProperty() {
                throw new Error('Нет прав');
            },
        });
    }

    _createDocumentElement(tagName: string): HTMLElement {
        // console.log('_createDocumentElement')
        return document.createElement(tagName);
    }
}

Block._instances = [];
Block.hydrate = function () {
    // console.log(this._instances)

    for (const i of this._instances) {
        i.setElement(document.querySelector(`[_key=${i.id}`));
    }
}

export default Block;