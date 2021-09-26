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
    on(this.inputElement, 'keyup', () => this.handleKeyup());
  }

  handleKeyup() {
    console.log(tag, 'handleKeyup', this.inputElement.value);
    const { value } = this.inputElement;
    this.showResetButton(value.length > 0);
  }
}

// View 를 Controller 에 넣어주기 : Application 의 진입점
// 검색어 입력 부분의 이벤트
