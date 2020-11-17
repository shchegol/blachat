import EventBus from '../components/EventBus'
import {IAnyObject, IEventBusFunction} from "../utils/ts/interfaces";

class Store {
    static EVENTS = {
        INIT: 'init',
        FLOW_SDU: 'flow:store-did-update',
    };

    protected _meta: { props: IAnyObject };
    public props: IAnyObject;
    public eventBus: IEventBusFunction;

    constructor(props = {}) {
        const eventBus: EventBus = new EventBus();

        this.props = this._makePropsProxy(props);
        this._registerEvents(eventBus);
        this._meta = {props};

        eventBus.emit(Store.EVENTS.INIT);
    }

    public init(): void {
    }

    protected _init(): void {
        this.init();
    }

    public storeDidUpdate(): boolean {
        console.log('storeDidUpdate', this.props)
        return true;
    }

    protected _storeDidUpdate(): void {
        this.storeDidUpdate()
    }

    protected _registerEvents(eventBus: EventBus): void {
        eventBus.on(Store.EVENTS.INIT, this._init.bind(this));
        eventBus.on(Store.EVENTS.FLOW_SDU, this._storeDidUpdate.bind(this));
    }

    protected _makePropsProxy(props: IAnyObject) {
        return new Proxy(props, {
            set: (target: IAnyObject, prop: keyof IAnyObject, value: any): boolean => {
                const oldProps = {...this._meta.props};

                console.log('changed', oldProps, target)

                if (target[prop] !== value) {
                    target[prop] = value;

                    this.eventBus().emit(Store.EVENTS.FLOW_SDU, oldProps, target);
                    return true;
                }

                return false
            },
            get(target: IAnyObject, prop: keyof IAnyObject, ) {
                const value = target[prop];

                if (!target[prop]) {
                    throw Error(`We have not value: ${prop} in store`)
                }

                return typeof value === "function" ? value.bind(target) : value;
            },
            deleteProperty() {
                throw new Error('Нет прав');
            },
        });
    }
}

export const store = new Store({});

export default Store;