import Component from "../components/Component";
import {isEqual, renderTo} from "../utils/helpers";
import {IAnyObject} from "../utils/ts/interfaces";

export default class Route {
    protected _pathname: string;
    protected _componentClass: new () => Component;
    protected _component: Component | null;
    protected _props: IAnyObject;

    constructor(pathname: string, view: new () => Component, props: IAnyObject = {}) {
        this._pathname = pathname;
        this._componentClass = view;
        this._component = null;
        this._props = props;
    }

    public navigate(pathname: string): void {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    }

    public leave(): void {
        if (this._component) {
            // todo remove вместо hide
            this._component.hide();
        }
    }

    public match(pathname: string): boolean {
        return isEqual(pathname, this._pathname);
    }

    public render() {
        if (this._component === null) {
            this._component = new this._componentClass();
            renderTo(this._props.rootQuery, this._component);
            return;
        }

        this._component.show();
    }
}