---
title: 매개변수와 인자
meta:
  - name: description
    content: 매개변수와 인자
  - property: og:title
    content: 매개변수와 인자
  - property: og:description
    content: 매개변수와 인자
  - property: og:url
    content: https://butt3r.github.io/TIL/JS/javascript-parameter.html
    
tags: ["BOOSTCOURSE", "JS", "부스트코스 서포터즈 3기", "WEB"]
---


매개변수와 인자 <Badge text="boostcourse" />
================

> 부스트코스 [자바스크립트의 시작](https://www.boostcourse.org/cs124/lecture/194629) 수업을 듣고 정리한 자료입니다.


## 함수의 입출력

일반적으로 함수는 다음과 같은 형태를 하고있다.

```js
function sayHi(name){
return `hi ${name}`
}
sayHi(hilda);

// hi hilda
```

예제를 살펴보면  `()` 안의 name 즉, `매개변수` 는 밖에서 들어온 **입력값**을 ****담아 사용하고 있고  `리턴` 은 연산된 결과값을 밖으로 **출력**하고 있는 것을 알 수 있다.

이처럼 함수는 입출력이 분명한 특징을 가지고 있기 때문에 이를 활용해 입력에 따라 다른 아웃풋을 만들어 내는 것이 가능하다. 쉽게 설명하면 함수는 자판기와 유사하여  `매개변수` 는 자판기의 동전과 버튼,  `리턴` 은 자판기에서 나온 음료수와 같다고 할 수 있다.

이번 글에서는 함수의 입력을 담당하는 `매개변수`와 `인자`를 중점적으로 다루려 한다.

## 매개변수란

`매개변수(Parameter)` 는 함수를 선언할 때에 정의되는 **변수(Variable)** 이다**.**

```js
function 함수이름(매개변수1, 매개변수2, ...) {
	...
}
```

매개변수 역시 말 그대로 변수이기 때문에 일반적인 변수와 똑같이 사용 가능하다.

두 개의 값을 서로 바꿔주는 swap 예제를 보자

```js
function swap(a, b){
 let temp = a;
 a = b;
 b = temp;

 console.log(a, b);
}
```

swap 함수의 괄호안에 a와 b라는 매개변수가 정의되어 있다. a와 b는 함수 안에서 선언된 temp 라는 지역변수와 똑같이 사용할 수 있으며 실제로 a와 b에 값을 전달하면 해당값이 a와 b에 복사되고 a와 b에 들어간 값은 함수 내부에서 변경이 가능해진다.

아래와 같이 swap 함수를 호출하여 3과 5를 매개변수 a와 b에 전달해보겠다.

```js
swap(3,5);
```

::: details 결과    
5 3    
:::     

실행해보면 성공적으로 a와 b의 값이 서로 교환됐음을 확인할 수 있다.   
만약 매개변수에 아무런 값도 전달하지않으면 해당 매개변수엔 기본적으로 undefined 값이 들어간다.

```js
swap(3);
// undefined 3
```

## 인자란

`인자(Argument)` 혹은 `인수`는 함수를 호출할 때에 전달되는 **값(Value)**이다.

```js
함수이름(인자1, 인자2...);
```

종종 매개변수와 한데 묶여 같은 의미로 통용되어지기도하지만 아시다시피 둘은 다르다.

아까의 예제를 다시 보자

```js
function swap(a, b){
 let temp = a;
 a = b;
 b = temp;

 console.log(a, b);
}

swap(3, 5);
```

매개변수는 swap 함수 괄호안에 정의된 a와 b라고 했다. 여기서 인자는 무엇일까? 그렇다. 함수 호출부에서 값 3과 5가 인자 즉, 함수의 전달인자이다.

여기서 전달인자는 value이기 때문에 함수를 호출할 때마다 다른 값을 전달할 수 있다.

```js
function sum(a, b){
console.log(a + b);
}

sum(1, 2);
sum(5, 5);
sum(3, 4);
```

::: details 결과    
3   
10   
7    
:::   

## 요약

- 매개변수(Variable)와 인자(Value)는 다르다.
- 매개변수의 기본값은 undefined 이다.
- 매개변수와 인자를 이용해 입력에 따라 아웃풋을 바꿀 수 있다.

<br>


---
<TagLinks />