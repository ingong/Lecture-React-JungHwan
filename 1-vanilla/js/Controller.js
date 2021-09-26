const tag = '[Controller]';

export default class Controller {
  constructor(store, { searchFormView }) {
    console.log(tag, 'constructor');

    this.store = store;

    this.searchFormView = searchFormView;

    this.subscribeViewEvents();
  }

  // target 과 event 명이 동일해야 해당 handler 를 호출한다
  subscribeViewEvents() {
    this.searchFormView.on('@submit', event => this.search(event.detail.value));
  }

  search(value) {
    console.log(tag, value);
  }
}

// searchFormView 에서 event 발생
