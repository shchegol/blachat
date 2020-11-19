import Route     from './Route';
import Component from '../components/Component';

class Router {
  static __instance: Router;
  public routes: Route[];
  public history: History;
  protected _currentRoute: Route | null;
  protected _rootQuery: string;
  protected _middlewares: Function[];

  constructor(rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;
    this._middlewares = []

    Router.__instance = this;
  }

  use(pathname: string, component: new () => Component) {
    const route: Route = new Route(pathname, component,
        {rootQuery: this._rootQuery});
    this.routes.push(route);
    return this;
  }

  clear() {
    this.routes = [];
  }

  start() {
    window.onpopstate = ((event: { currentTarget: Window }) => {
      if (!event || !event.currentTarget) {
        throw new Error('');
      }

      this._onRoute(event.currentTarget.location.pathname);
    }).bind(this);

    this._onRoute(window.location.pathname);
  }

  go(pathname: string): void {
    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  addMiddleware(fn: Function) {
    this._middlewares = [...this._middlewares, fn.bind(this)];
  }

  back(): void {
    window.history.back();
  }

  forward(): void {
    window.history.forward();
  }

  getRoute(pathname: string): Route | undefined {
    return this.routes.find(route => route.match(pathname));
  }

  protected _onRoute(pathname: string): void {
    let doReturn = false;

    this._middlewares.forEach(fn => {
      if(fn({pathname})) {
        doReturn = true;
        return;
      }
    });

    if (doReturn) {
      return;
    }

    const route = this.getRoute(pathname);

    if (!route) {
      return;
    }

    if (this._currentRoute) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;

    route.render();
  }
}

export const appRouter = new Router('#app');

export default Router;
