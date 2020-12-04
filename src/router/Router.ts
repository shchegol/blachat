import Route from '@router/Route';
import Component from '@utils/Component';

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
    this._middlewares = [];

    Router.__instance = this;
  }

  use(pathname: string, component: new () => Component): this {
    const route: Route = new Route(
      pathname,
      component,
      { rootQuery: this._rootQuery },
    );
    this.routes.push(route);
    return this;
  }

  clear(): this {
    this.routes = [];
    return this;
  }

  start(): this {
    // @ts-ignore
    window.onpopstate = ((event: { currentTarget: Window }) => {
      if (!event || !event.currentTarget) {
        throw new Error('');
      }

      this._onRoute(event.currentTarget.location.pathname);
    });

    this._onRoute(window.location.pathname);
    return this;
  }

  go(pathname: string): this {
    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);
    return this;
  }

  /**
   * Add some middleware function
   * @param fn - the function that is called before rendering
   *
   * IMPORTANT
   * If the middleware function returns true, rendering will not happen.
   */
  addMiddleware(fn: Function): this {
    this._middlewares = [...this._middlewares, fn.bind(this)];
    return this;
  }

  back(): this {
    window.history.back();
    return this;
  }

  forward(): this {
    window.history.forward();
    return this;
  }

  getRoute(pathname: string): Route | undefined {
    return this.routes.find((route) => route.match(pathname));
  }

  protected _onRoute(pathname: string): void {
    /** Start middleware and if some fn returns true stop rendering */
    if (this._middlewares.some((fn) => fn({ pathname }))) {
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
