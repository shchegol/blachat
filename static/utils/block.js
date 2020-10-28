import EventBus from './event-bus.js'

export default class Block {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  _element = null;
  _meta = null;

  /** JSDoc
   * @param {string} tagName
   * @param {Object} props
   *
   * @returns {void}
   */
  constructor(tagName = 'div', props = {}) {
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

  _registerEvents(eventBus) {
    console.log('_registerEvents');
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _createResources() {
    console.log('_createResources');

    const {tagName} = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  init() {
    console.log('init');

    this._createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  _componentDidMount() {
    console.log('_componentDidMount');

    this.componentDidMount();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  // Может переопределять пользователь, необязательно трогать
  componentDidMount(oldProps) {}

  _componentDidUpdate(oldProps, newProps) {
    const response = this.componentDidUpdate(oldProps, newProps);

    console.log('_componentDidUpdate');

    if (response) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  // Может переопределять пользователь, необязательно трогать
  componentDidUpdate(oldProps, newProps) {
    return true;
  }

  setProps = nextProps => {
    console.log('setProps');

    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  _render() {
    console.log('_render');

    // Этот небезопасный метод для упрощения логики
    // Используйте шаблонизатор из npm или напишите свой безопасный
    // Нужно не в строку компилировать (или делать это правильно),
    // либо сразу в DOM-элементы возвращать из compile DOM-ноду
    this._element.innerHTML = this.render();
  }

  // Может переопределять пользователь, необязательно трогать
  render() {}

  getContent() {
    console.log('getContent');
    return this.element;
  }

  _makePropsProxy(props) {
    console.log('_makePropsProxy');

    return new Proxy(props, {
      set: (target, prop, value) => {
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

  _createDocumentElement(tagName) {
    console.log('_createDocumentElement');
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    return document.createElement(tagName);
  }

  show() {
    this.getContent().style.display = 'block';
  }

  hide() {
    this.getContent().style.display = 'none';
  }
}