class Store {
    private state: { [key: string]: any };
    private reducers: { [key: string]: any };
    private subscribers: Function[];

    constructor(
        reducers: { [key: string]: any } = {},
        initialState: { [key: string]: any } = {}
    ) {
        this.reducers = reducers;
        this.subscribers = [];
        this.state = this.reduce(initialState, {});
    }

    get value() {
        return this.state;
    }

    dispatch(action: { [key: string]: any }) {
        this.state = this.reduce(this.state, action);
        this.subscribers.forEach(fn => fn(this.value));
    }

    subscribe(fn: Function) {
        this.subscribers = [...this.subscribers, fn];
        fn(this.value);

        // for unsubscribe
        return () => {
            this.subscribers = this.subscribers.filter(sub => sub !== fn);
        };
    }

    private reduce(
        state: { [key: string]: any },
        action: { [key: string]: any }
    ) {
        const newState: { [key: string]: any } = {};
        for (const prop in this.reducers) {
            newState[prop] = this.reducers[prop](state[prop], action);
        }
        return newState;
    }
}

export default Store;