---
title: 자바스크립트의 함수
meta:
  - name: description
    content: 자바스크립트의 함수
  - property: og:title
    content: 자바스크립트의 함수
  - property: og:description
    content: 자바스크립트의 함수
  - property: og:url
    content: https://butt3r.github.io/TIL/JS/javascript-function.html
    
tags: ["BOOSTCOURSE", "JS", "부스트코스 서포터즈 3기", "WEB"]
---

함수(Function) <Badge text="boostcourse" />
================

> 부스트코스 [자바스크립트의 시작](https://www.boostcourse.org/cs124/lecture/194628) 수업을 듣고 정리한 자료입니다.

## 함수란?

`함수(Function)` 란 프로그램을 구성하는 주요 요소로 어떠한 작업을 목적으로 만들어진 코드 블록이다.

함수는 아주 주요한 역할을 하는만큼 자주 쓰이는데, 예로 우리가 흔히 사용한 `alert` 나 `length` 도 자바스크립트에 내장된 **함수**이다.

비유하자면 우리가 어떠한 목적으로 폴더를 만들어 자료를 묶어두는 것처럼 함수도 길이를 반환한다거나 메시지를 화면에 뛰우는 등의 목적을 위해 만들어진 코드가 담긴 블록이라 생각하면 된다.

그럼 함수는 왜 필요할까?

## 함수가 필요한 이유

특정 코드가 반복될 때, 우리는 반복문을 이용해 코드를 효율적으로 바꾸곤 했다.

```js
// before
document.write('2');
document.write('3');
document.write('2');
document.write('3');
document.write('2');
document.write('3');

//after
let i = 0;
while(i<3){
document.write('2');
document.write('3');
++i;
}
```

하지만 아래와 같은 상황은 어떨까

```js
document.write('1');
document.write('2');
document.write('3');
document.write('4');
document.write('2');
document.write('3');
```

분명 2와 3이 두번 반복되긴 하지만 중간에 4가 들어가있어 조금 더 까다로워졌다. 이런 경우 반복문과 조건문을 섞어 사용하면 구현은 가능하지만

```js
document.write('1');
let i = 0;
while(i<3){
if(i == 1){
  document.write('4');
} else {
document.write('2');
document.write('3');
}
++i;
}
```

이런식으로 코드가 지저분해지고 상황에 맞게 유연하게 대처하기 어려워진다.   
그럼 특정 코드를 반복해서 동작하고 싶다면 어떻게 해야할까? 

이 때 필요한 것이 `함수` 이다.

## 함수의 사용방법

`함수` 는 다음과 같이 선언하며 이를 `함수 선언문`이라 부른다.

```js
function 함수이름(Parameter 1, Parameter 2, ...){
...
}
```

```js
function helloWorld(){
console.log("hello world");
}

```

여기서 `()` 엔 [파라미터](https://ko.m.wikipedia.org/wiki/매개변수_(컴퓨터_프로그래밍))를 넣지않아도 된다. 만약 복수의 파라미터를 사용한다면  `,` 로 꼭 구분을 해줘야한다.

또한 자바스크립트엔 다음과 같은 `함수 표현식`도 존재한다.

```js
const sum = function(a, b){
return a + b;
}
```

`함수 선언문`과는 [호이스팅(hoisting)](https://developer.mozilla.org/ko/docs/Glossary/Hoisting)의 관점에서 차이를 보이는데 이번 글에서는 그냥 그렇다~정도로만 이해하고 넘어가자 

> 둘의 차이점과 특징에 대해 나중에 따로 포스팅 하겠다.

## 함수 이용하기

다시 돌아와서!

아까의 코드를 함수를 이용해 바꿔보겠다.

```js
document.write('1');
document.write('2');
document.write('3');
document.write('4');
document.write('2');
document.write('3');
```

`함수 선언문` 과 같은 방식으로 다음과 같이 선언한다.

```js
function two(){
document.write('2');
document.write('3');
}
```

그러면 이제 `two` 라는 이름의 함수가 만들어진 것이다. 그럼 이 함수를 어떻게 사용할까?

다음과 같이 함수를 호출해주면 된다.

```js
two();
```

이제 마지막으로 배운걸 이용해 목적에 맞게 코드를 바꿔보자

```js
document.write('1');
two();
document.write('4');
two();
```

결과를 확인해보면 `two();` 를 호출함으로써  `two` 함수의 본문이 정상적으로 실행됐음을 알 수 있다.

이 처럼 어떠한 동작이 반복되는 경우엔 때에 따라 함수가 유용하게 쓰인다.

## 요약

- 함수는 코드 재사용이 가능하다.(반복적인 호출이 가능)
- 함수는 변수에 저장할 수 있다.
- 매개변수를 통해 값을 전달할 수 있다.

<br>


---
<TagLinks />
