---
title: 자바스크립트의 배열
meta:
  - name: description
    content: 자바스크립트의 배열
  - property: og:title
    content: 자바스크립트의 배열
  - property: og:description
    content: 자바스크립트의 배열
  - property: og:url
    content: https://butt3r.github.io/TIL/JS/javascript-control-flow-3.html
    
tags: ["BOOSTCOURSE", "JS", "부스트코스 서포터즈 3기", "WEB"]
---


제어문 - 반복문 <Badge text="boostcourse" />
================

> 부스트코스 [자바스크립트의 시작](https://www.boostcourse.org/cs124/lecture/194614) 수업을 듣고 정리한 자료입니다.


## 반복문

`반복문(Loop)`  은 특정 코드를 **반복적**으로 수행하는 명령문이다. 반복문에는 `if` 문처럼 조건식이 존재하지만 오로지 참일 동안에만 실행된다는 점이 `조건문` 과 명백히 다르다.

그럼 반복문은 어떤 상황에서 사용할까?

### 반복문이 필요한 이유

다음의 코드에서 2번 3번이 반복되어야한다고 가정해보겠다.

```js
document.write('<li>1</li>');
document.write('<li>2</li>');
document.write('<li>3</li>');
document.write('<li>4</li>');
```

가장 단순하게는 복사 + 붙여넣기로 코드를 늘리면 된다.

```js
document.write('<li>1</li>');
document.write('<li>2</li>');
document.write('<li>3</li>');
document.write('<li>2</li>');
document.write('<li>3</li>');
document.write('<li>4</li>');
```

그런데 만약 반복되는 횟수가 크거나 반복 횟수를 유동적으로 처리하고 싶다면, 위 방법은 그다지 적절하지 못하다. 그럼 어떻게 다뤄야할까? 이 때 필요한게 바로 `반복문` 이다.

## while문

`while` 문은 반복문 중에 하나로 말 그대로 **~하는 동안에** 라는 의미를 지녔다.

```js
while(조건식){
명령문
}
```

이 `while` 문을 이용하여 아까의 코드를 개선해보자 

```js
while(???){
document.write('<li>2</li>');
document.write('<li>3</li>');
}
```

반복문은 조건식이 참일 동안에만 실행된다 했다. 여기선 아직 조건이 주어지지 않아서 아무것도 실행되지 않는다.  딱 세번만 코드가 반복되게 조건식을 수정해보겠다.

```js
let i = 3;
while(i > 0){
document.write('<li>2</li>');
document.write('<li>3</li>');
--i;
}
```

변수 `i` 에 3을 대입하고 `while` 문의 조건식에는 `i` 가 0보다 클동안에 코드가 반복되게 했다. 처음 `i` 는 3이므로 3 > 0이 성립된다.  따라서 **한번** 돌고 코드 마지막에 `--i` 가 있으므로 `i`를 2로 만든다. 다음 턴 역시 마찬가지로 2 > 0 이므로 **두번** 돌고 `i` 에서 -1을 하여 1로 만든다. 1은 아직까지는 0보다 크므로 **세번** 돌게되고 비로소  `i`가 0과 같아질 때  `while`문을 종료한다.

```js
let i = 3;
while(i){
document.write('<li>2</li>');
document.write('<li>3</li>');
--i;
}
```

이런 식으로 표현해도 결과는 같다. 반복문의 조건식은 조건문과 마찬가지로 결과값이 불리언 형태이기 때문이다. 

한가지 주의할 점은 `while` 문은 다음과 같은 코드에서 **무한 반복**이 발생하니 필수적으로 [break](http://codingnuri.com/javascript-tutorial/javascript-break-statement.html) 와 같은 종료문을 넣어줘야한다.

```js
while(true){
명령문 
}

while(1){
명령문
}

while(1<3){
명령문
}

```

무한 반복은 프로그램을 멈추게 하는 대표적 요인 중 하나이므로 가급적 이런 상황은 피하는 것이 좋다.

## while과 배열

[배열]()은 반복문과 주로 함께 사용된다. 예시로 다음과 같은 배열에서 요소를 꺼내야할 때

```js
let animal = ["kitty", "bunny", "pony"];
```

인덱스를 활용하여 직접 꺼낼 수 있지만

```js
console.log(animal[0]); // kitty
```

반목문을 사용하면 일일히 타이핑 할 필요없이 한번에 모든 요소를 꺼낼 수 있다.

```js
let i = 0;
while(i < animal.length){
console.log(animal[i]);
++i;
}
```

이게 가능한 이유는 인덱스의 역할을 하는 `i` 가 반복문의 조건이 참이라면 +1씩 증가하기로 되어있기 때문이다. 여기서 `animal.length` 는 3이므로 아래와 같은 형태로 `i` 는 증가한다.

```jsx
console.log(animal[0]);
console.log(animal[1]);
console.log(animal[2]);
```

::: details 결과       
kitty
bunny
pony  
::: 

실행해보면 정상적으로 animal 배열의 모든 요소들이 출력됐음을 알 수 있다. 게다가 조건식에 숫자를 대신해 `animal.length` 를 넣었기 때문에 설령 배열의 요소가 변동된다해도 자동으로 반복 횟수를 맞출 것이다.

### 요약

정리하면, `배열`은 순서대로 연관된 데이터를 저장할 수 있고, `반복문` 은 순서대로 배열의 원소를 하나씩 꺼내어 처리할 수 있다. 따라서 배열의 값을 가져와 활용해야한다면 반복문을 사용하도록 하자 둘은 찰떡궁합이다.

<br>


---
<TagLinks />