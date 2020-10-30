import EventBus from './event-bus.js'
import {IStringObject} from './interfaces'

export default class Block {
    static EVENTS = {
        INIT: 'init',
        FLOW_CDM: 'flow:component-did-mount',
        FLOW_CDU: 'flow:component-did-update',
        FLOW_RENDER: 'flow:render',
    };

    protected _element: HTMLElement;
    protected _meta: { rootID: string, props: IStringObject };
    public props: IStringObject
    public eventBus: Function

    constructor(rootID: string, props: IStringObject) {
        const eventBus: EventBus = new EventBus();

        this.props = this._makePropsProxy(props);
        this._registerEvents(eventBus);
        this.eventBus = () => eventBus;
        this._meta = {
            rootID,
            props,
        };

        eventBus.emit(Block.EVENTS.INIT);
    }

    public init(): void {
    }

    public componentDidMount(): void {
    }

    public componentDidUpdate(): boolean {
        return true;
    }

    public setProps = (nextProps: IStringObject): void => {
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
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    protected _createResources(): void {
        const {rootID} = this._meta
        const root: HTMLElement | null = document.getElementById(rootID);

        if (root === null) {
            throw new Error(`Элемента с id="${rootID}" не существует`)
        }

        this._element = root;
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

    protected _render(): void {
        this._element.innerHTML = this.render();
    }

    protected _makePropsProxy(props: IStringObject) {
        return new Proxy(props, {
            set: (target: IStringObject, prop: keyof IStringObject, value: string): boolean => {
                const oldProps = {...this._meta.props};

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
}