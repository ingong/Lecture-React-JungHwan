import { qs } from "../helpers.js";
import View from "./View.js";

const tag = "[SearchFormView]";

export default class SearchFormView extends View {
  constructor() {
    // 부모의 constructor 함수 호출
    // id search-form-view 로 찾아서 this.element 에 저장
    console.log(tag, "constructor");
    super(qs("#search-form-view"));

    // resetElement 도 저장
    this.resetElement = qs("[type=reset]", this.element);
    this.showResetButton(false);
  }

  showResetButton(visible = true) {
    this.resetElement.style.display = visible ? "block" : "none";
  }
}

// View 를 Controller 에 넣어주기 : Application 의 진입점
