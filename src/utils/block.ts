import EventBus from './event-bus.js'
import {IObjectString} from './interfaces'

export default class Block {
    static EVENTS = {
        INIT: 'init',
        FLOW_CDM: 'flow:component-did-mount',
        FLOW_CDU: 'flow:component-did-update',
        FLOW_RENDER: 'flow:render',
    };

    // todo понять почему выдаёт ошибку при определении HTMLElement | null
    protected _element: HTMLElement;
    protected _meta: { tagName: string, props: IObjectString };
    public props: IObjectString
    public eventBus: Function

    constructor(tagName: string = 'div', props: IObjectString) {
        console.log('constructor');

        const eventBus = new EventBus();
        this._meta = {
            tagName,
            props,
        };

        this.props = this._makePropsProxy(props);
        this.eventBus = () => eventBus;

        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }

    public init() {
        console.log('init');

        this._createResources();
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }

    public componentDidMount() {
    }

    componentDidUpdate(oldProps: IObjectString, newProps: IObjectString) {
        return true;
    }

    setProps = (nextProps: IObjectString) => {
        console.log('setProps');

        if (!nextProps) {
            return;
        }

        Object.assign(this.props, nextProps);
    };

    render(): string {
        return '';
    }

    getContent(): HTMLElement | null {
        return this.element;
    }

    get element() {
        return this._element;
    }

    protected _registerEvents(eventBus: EventBus) {
        console.log('_registerEvents');
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    protected _createResources() {
        console.log('_createResources');

        const {tagName} = this._meta;
        this._element = this._createDocumentElement(tagName);
    }

    protected _componentDidMount() {
        console.log('_componentDidMount');

        this.componentDidMount();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    // todo Как правилно объявить?
    protected _componentDidUpdate(oldProps: IObjectString, newProps: IObjectString) {
        const response = this.componentDidUpdate(oldProps, newProps);

        console.log('_componentDidUpdate');

        if (response) {
            this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
        }
    }

    protected _render() {
        console.log('_render');
        // Этот небезопасный метод для упрощения логики
        // Используйте шаблонизатор из npm или напишите свой безопасный
        // Нужно не в строку компилировать (или делать это правильно),
        // либо сразу в DOM-элементы возвращать из compile DOM-ноду

        this._element.innerHTML = this.render();
    }

    // todo узнать как здесь быть
    protected _makePropsProxy(props: IObjectString) {
        console.log('_makePropsProxy');

        return new Proxy(props, {
            set: (target: IObjectString, prop: keyof IObjectString, value: string): boolean => {
                const oldProps = {...this._meta.props};

                if (target[prop] !== value) {
                    target[prop] = value;
                    this.eventBus().emit(Block.EVENTS.FLOW_CDU, oldProps, target);
                    return true;
                } else {
                    return false;
                }
            },
            deleteProperty(target, prop) {
                throw new Error('Нет прав');
            },
        });
    }

    protected _createDocumentElement(tagName: string): HTMLElement {
        console.log('_createDocumentElement');
        // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
        return document.createElement(tagName);
    }
}