import Route from "./Route";
import Component from "../components/Component";

class Router {
    static __instance: Router;
    public routes: Route[];
    public history: History;
    protected _currentRoute: Route | null;
    protected _rootQuery: string;

    constructor(rootQuery: string) {
        if (Router.__instance) {
            return Router.__instance;
        }

        this.routes = [];
        this.history = window.history;
        this._currentRoute = null;
        this._rootQuery = rootQuery;

        Router.__instance = this;
    }

    public use(pathname: string, component: new () => Component) {
        const route: Route = new Route(pathname, component, {rootQuery: this._rootQuery});
        this.routes.push(route);
        return this;
    }

    public start() {
        // todo уточнить на счёт Window
        window.onpopstate = ((event: {currentTarget: Window }) => {
            if (!event || !event.currentTarget) {
                throw new Error('')
            }

            this._onRoute(event.currentTarget.location.pathname);
        }).bind(this);

        this._onRoute(window.location.pathname);
    }

    public go(pathname: string): void {
        this.history.pushState({}, "", pathname);
        this._onRoute(pathname);
    }

    public back(): void {
        window.history.back();
    }

    public forward(): void {
        window.history.forward();
    }

    public getRoute(pathname: string): Route | undefined {
        return this.routes.find(route => route.match(pathname));
    }

    protected _onRoute(pathname: string): void {
        const route = this.getRoute(pathname);

        if (!route) {
            return;
        }

        if (this._currentRoute) {
            this._currentRoute.leave();
        }

        this._currentRoute = route;

        // todo не понятно почему в тренажёре так
        // route.render(route, pathname);
        route.render();
    }
}

export const appRouter = new Router("#app");
