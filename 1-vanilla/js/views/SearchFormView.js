import { on, qs } from '../helpers.js';
import View from './View.js';

const tag = '[SearchFormView]';

export default class SearchFormView extends View {
  constructor() {
    // 부모의 constructor 함수 호출
    // id search-form-view 로 찾아서 this.element 에 저장
    console.log(tag, 'constructor');
    super(qs('#search-form-view'));

    this.inputElement = qs('[type=text]', this.element);
    this.resetElement = qs('[type=reset]', this.element);

    this.showResetButton(false);
    this.bindEvent();
  }

  showResetButton(visible = true) {
    this.resetElement.style.display = visible ? 'block' : 'none';
  }

  bindEvent() {
    // eventListener 의 target 이 inputElement 이기 때문에 helpers 의 on 을 사용
    on(this.inputElement, 'keyup', () => this.handleKeyup());
    // eventListener 의 target 이 객체의 this 와 동일하기 때문에 this.on 사용
    this.on('submit', event => this.handleSubmit(event));
  }

  handleKeyup() {
    const { value } = this.inputElement;
    this.showResetButton(value.length > 0);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(tag, 'handleSubmit');
    const { value } = this.inputElement;
    this.emit('@submit', { value });
  }
}

// View 를 Controller 에 넣어주기 : Application 의 진입점

// SearchFormView
// - 검색어 입력 부분의 이벤트
// - 검색어 입력 폼을 담당
