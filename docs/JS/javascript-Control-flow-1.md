---
title: 조건문
meta:
  - name: description
    content: 조건문
  - property: og:title
    content: 조건문
  - property: og:description
    content: 조건문
  - property: og:url
    content: https://butt3r.github.io/TIL/JS/javascript-data-type.html
    
tags: ["BOOSTCOURSE", "JS", "부스트코스 서포터즈 3기", "WEB"]
---

[제어문] 조건문 <Badge text="boostcourse" />
================

> 부스트코스 [자바스크립트의 시작](https://www.boostcourse.org/cs124/lecture/194606) 수업을 듣고 정리한 자료입니다.


## 비교연산자 & 불리언

먼저 조건문을 들어가기 전에 조건을 만들기 위해 필요한 비교연산자와 불리언에 대해 알아보도록 한다.

### 비교연산자(Comparisons)

우리는 수학에서  `>` `<` `≤` `≥` `=` `≠`  ~보다 크거나 작음, ~보다 크거(작거)나 같음, 같음, 다름을 의미하는 비교연산자를 쉽게 접했다. 자바스크립트에서의 비교 연산자 역시 크게 다르지않은데 기호에서 약간의 차이를 보인다. 

자바스크립트에서 비교연산은 아래와 같은 문법으로 표현한다.

- `<`, `>`  : 좌항 보다 우항이 더 큼, 좌항이 우항보다 큼
- `<=` , `>=`  : 좌항 보다 우항이 크거나 같음, 좌항이 우항보다 크거나 같음
- `==` , `===` : 좌항과 우항이 같음, 좌항과 우항이 일치함
- `!=` , `!==` : 좌항과 우항이 다름, 좌항과 우항이 불일치함

 > `==` 와 `===` 의 차이는 참고[동일성 판단]([https://developer.mozilla.org/ko/docs/Web/JavaScript/Equality_comparisons_and_sameness](https://developer.mozilla.org/ko/docs/Web/JavaScript/Equality_comparisons_and_sameness))

### 불린형 결과

비교연산자는 좌항과 우항을 결합하여 관계에 따라 값을 반환한다.   
예로 아래의 예제는 좌항과 우항의 관계가 **참**이기 때문에 `True` 라는 결과 값을 반환한 것을 알 수 있다.

```js
alert(1 === 1);
alert(2 > 1);
```

반대로 아래의 예제의 경우는 `False` 라는 결과 값을 반환한다.

```js
alert(1 === 2);
alert(2 < 1);
```

이유는 1과 2는 같지않고 2보다 1이 큰 것은 사실이 아니므로 **거짓** 이기 때문이다.

이렇게 참이냐 거짓이냐를 표현하는 [데이터타입]([https://butt3r.github.io/TIL/JS/javascript-data-type.html](https://butt3r.github.io/TIL/JS/javascript-data-type.html))을 **불리언(boolean)** 이라 부른다. 다른 말로는 논리 자료형이라고도 하며 오로지 `True` 와 `False` 두가지 값만을 가졌다. 

## 조건문

`조건문(Conditional)` 은 주어진 조건을 **논리적으로 판단하여** 프로그램의 실행 여부를 결정한다. 이때 if문은 괄호 속의 조건식을 불리언 형태로 변환하여 반환한다.

### 1. if문

`if`문은 단어의 의미 그대로 "**만약에**~한다면 ...을 실행하라" 는 의미의 조건문이다.   
아래는 가장 기본적인 형태의 if문으로 괄호 속 조건식이 `True` 일 경우 코드블록 내의 명령을 실행한다.

```js
if(조건식){
명령문...
}
```

실제 사용 예제는 다음과 같다.

```js
if(true){
console.log("it's True");
}

/*
if(1){ // 1은 true와 같은 의미로 쓰인다.
console.log("it's True");
}
*/
```

::: details 결과     
it's True   
::: 

예제를 실행해보면 괄호 속 조건식의 결과가 `True` 이므로 "it's Ture"가 정상적으로 출력됐음을 확인할 수 있다.    여기서 만약 위 조건식의 결과가 참이 아니라 거짓이라면 아무것도 실행하지 않는다.

그럼 결과가 거짓일 때 명령을 실행시키고 싶다면 어떻게 해야할까

### 1.2. else절

`else` 은 조건식의 결과가 `False` 일 때 명령문을 실행한다.   

```js
if(조건식){
명령문1...
}else{
명령문2...
}
```

아까의 예제를 아래와 같이 수정해보자

```js
if(false){
console.log("it's True");
}else{
console.log("it's False");
}

/*
if(0){ // 0은 false과 같은 의미로 쓰인다.
console.log("it's True");
}else{
console.log("it's False");
}
*/
```

::: details 결과     
it's False
::: 



실행해보면 아까와는 달리 첫번째 코드 블록이 무시되고 두번째 코드 블록의 문장이 출력됐음을 알 수 있다. 

이렇듯  `else` 절을 추가하면 `if` 와 `else` 은 하나의 구조가 되어 논리적 판단 여부에 따라 **다르게** 코드 블록을 실행한다.

### 1.3. else if

`else if` 는 복수의 조건을 처리하기 위해 사용한다.   
즉, `else if`는 `if`와 `else`가 단 한번만 허용되는 것과 달리 달리 여러번의 사용이 가능하다. 

```js
if(조건식){
명령문1...
}else if{
명령문2...
}else if{
명령문3...
}else{
명령문4...
}
```

여기서 중요한건 첫번째 조건식도 참이고 두번째 조건식도 참이면 둘 다 실행되는 것이 아니다. 오로지 먼저 참이라는 결과가 나온 조건식의 코드블록만이 실행된다. `if`문은 순서대로 진행된다는 점을 잊지말자.

그럼 실제 사용 예제를 보겠다.   
이번 예제는 여태까지 배운걸 이용한 아주 간단한 숫자 맞추기 게임이다.
```html
<body>
    <div id="app"></div>
    <h1>Conditional Statements</h1>
    <h3>숫자(1~100)를 맞춰보세요</h3>
    <form id="form" onsubmit="findNum(event);">
      <input id="input" type="number" />
    </form>
    <div id="result"></div>

    <script>
      function findNum(event) {
        event.preventDefault();
        let target = 20;
        if (input.value > target) {
          document.getElementById(
            "result"
          ).innerHTML = `<h3>${input.value}보다 더 작아요<h3>`;
        } else if (input.value < target) {
          document.getElementById(
            "result"
          ).innerHTML = `<h3>${input.value}보다 더 커요<h3>`;
        } else {
          document.write(`<h1>정답!<h1>`);
        }
      }
    </script>
  </body>
```
위 코드를 실행해보면 사용자가 입력한 값이 `target`값 보다 크거나, 작거나, 같거나에 따라 도출되는 아웃풋이 다름을 알 수 있다.

이렇게 조건문을 활용하면 여러가지의 상황을 **분기적**으로 해결할 수 있다!

<br>


---
<TagLinks />