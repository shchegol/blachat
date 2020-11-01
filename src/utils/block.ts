import EventBus from './event-bus.js'
import {IAnyObject} from './interfaces'

interface IEventBusFunction {
    (): EventBus;
}

class Block {
    static EVENTS = {
        INIT: 'init',
        FLOW_CDM: 'flow:component-did-mount',
        FLOW_CDU: 'flow:component-did-update',
        FLOW_CDR: 'flow:component-did-render',
        FLOW_RENDER: 'flow:render',
    };

    protected _element: HTMLElement;
    protected _meta: { tagName: string, props: IAnyObject };
    public props: IAnyObject;
    public eventBus: IEventBusFunction;

    constructor(tagName: string = "div", props: IAnyObject) {
        const eventBus: EventBus = new EventBus();

        this.props = this._makePropsProxy(props);
        this._registerEvents(eventBus);
        this._meta = {
            tagName,
            props,
        };
        this.eventBus = () => eventBus;

        eventBus.emit(Block.EVENTS.INIT);
    }

    public get element(): HTMLElement {
        return this._element;
    }

    public init(): void {
    }

    public componentDidMount(): void {
    }

    public componentDidUpdate(): boolean {
        return true;
    }

    public componentDidRender(): void {
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

    protected _init(): void {
        this.init();
        this._createResources();
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }

    protected _registerEvents(eventBus: EventBus): void {
        eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDR, this._componentDidRender.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    protected _createResources(): void {
        const {tagName} = this._meta
        this._element = this._createDocumentElement(tagName);
    }

    protected _componentDidMount(): void {
        this.componentDidMount();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    protected _componentDidUpdate(): void {
        const response = this.componentDidUpdate();

        if (response) {
            this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
        }
    }

    protected _componentDidRender(): void {
        setTimeout(() => {
            this.componentDidRender();
        }, 0)

    }

    protected _render(): void {
        this._element.innerHTML = this.render();
        this.eventBus().emit(Block.EVENTS.FLOW_CDR);
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
                }

                return false
            },
            deleteProperty() {
                throw new Error('Нет прав');
            },
        });
    }

    _createDocumentElement(tagName: string): HTMLElement {
        return document.createElement(tagName);
    }
}

export default Block;