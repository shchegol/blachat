import {IAnyObject} from "../utils/ts/interfaces";

class Store {
    public props: IAnyObject;

    constructor(props = {}) {
        this.props = this._makePropsProxy(props);
    }

    protected _makePropsProxy(props: IAnyObject) {
        return new Proxy(props, {
            set: (target: IAnyObject, prop: keyof IAnyObject, value: any): boolean => {
                if (target[prop] !== value) {
                    target[prop] = value;
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

export const store = new Store();

export default Store;