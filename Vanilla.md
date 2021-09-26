## 요구사항 분석

### 검색폼 구현

- 검색 상품명을 입력할 수 있는 폼이 위치
  - entry point main 함수 : store 와 view 를 만들고, controller 에 주입
    어디서 해당 관계를 설정(여기서는 주입) 할 지 고민을 했는데, 맨 처음에 했던 entry point 에서 하는게 맞았다.
  - super keyword 는 상속받은 class 에서 부모 class 의 constructor 을 실행할 때 사용
    저번 프로젝트에서는 이해가 안되서 잘 사용하지 않았는데, 내가 했던 constructor 는 부모의 constructore 를 호출하는게 아닌 다시 constructor 를 생성하고, 호출하는 방식이였다.
  - helpder function
    ```js
    export function qs(selector, scope = document) {
      if (!selector) throw 'no selector';
      return scope.querySelector(selector);
    }
    ```
    이런식으로 helper function 을 사용하는구나... on 과 emit 도 차차 학습하자
- 검색어를 입력하면 x 버튼이 보이고, 검색어를 삭제하면 x 버튼을 숨긴다.
  - showResetButton 을 통해서 UI 의 상태를 변경하는 책임을 맡음
    true, false 의 경우에는 상태를 유지할 필요가 없고, 해당 메서드를 통해서 변경해주면 됌.
    지나친 상태 (이전에는 모델을 따로 안둬서 이걸 다 container 에서 관리함) 생성은 매우 매우 힘들게함.
- 엔터를 입력하면 검색 결과가 보인다.

  - emit 과 on 에 대해서 학습했다. 이 때 dispatchEvent, customEvent 에 대해서도 알아볼 수 있었다.

    ```js
    export function on(target, eventName, handler) {
      target.addEventListener(eventName, handler);
    }

    export function emit(target, eventName, detail) {
      const event = new CustomEvent(eventName, { detail });
      target.dispatchEvent(event);
    }
    ```

    emit 함수에서 customEvent 를 생성하고, dispatchEvent 를 통해 전달하면
    동일한 target 에서는 해당 eventName 에 대해서 handler 로 처리할 수 있고, detail 을 통해서
    값을 처리할 수도 있다.
