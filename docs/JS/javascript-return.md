---
title: 리턴
meta:
  - name: description
    content: 리턴
  - property: og:title
    content: 리턴
  - property: og:description
    content: 리턴
  - property: og:url
    content: https://butt3r.github.io/TIL/JS/javascript-return.html
    
tags: ["BOOSTCOURSE", "JS", "부스트코스 서포터즈 3기", "WEB"]
---


리턴(Return) <Badge text="boostcourse" />
================

> 부스트코스 [자바스크립트의 시작](https://www.boostcourse.org/cs124/lecture/194630) 수업을 듣고 정리한 자료입니다.


## 리턴이란

[이전 글](https://butt3r.github.io/TIL/JS/javascript-parameter.html)에서 함수의 입출력 중 입력을 담당하는 매개변수와 인자에 대해 알아보았다.
이번 글에서는 함수의 출력을 담당하는 `리턴`을 다뤄보려한다.

`리턴(return)` 은 함수를 호출한 곳에 결과값을 반환해주는 역할을 한다. 

```js
function 함수이름(매개변수1, 매개변수2...){
return 표현식;
}
```

이 때 결과값은 `return` 키워드 오른쪽 **표현식을 실행한 결과**이며 표현식이란 **값을 산출**하는 구문을 의미한다. 

그럼 표현식이란 뭘까? 

다음의 코드를 콘솔창에 입력해보자

```js
alert(3 + 3);
// 6
```

실행하면 3 + 3 이 연산된 결과값 ‘6’ 이 화면에 뛰워질 것이다. 이처럼 3 + 3과 같은 산술이나 문자열 그리고 true/false와 같은 논리연산자 등 역시 표현식의 범주에 해당한다.

## 리턴의 활용

그럼 리턴은 어떻게 사용할까?
두 값을 더해주는 다음의 예제를 보자

```js
function sum(a, b){
console.log(a + b);
}

sum(1, 2);
```

매개변수 a와 b에 값이 들어오면 두 값을 서로 더하고 그 결과를 `console.log`로 콘솔에 출력하게끔 작성했다.

::: details 결과    
3    
:::     

실행해보면 두 개의 값이 제대로 더해졌음을 알 수 있다.   
하지만 log가 아니라 alert를 써야한다거나 산출된 결과물을 각각 다르게 보여줘야한다면 어떻게 해야할까? 
이때는 매번 새로운 함수를 만들 필요없이 리턴문을 이용하면된다.

다음의 예제를 보자

```js
function sum(a, b) {
  return a + b;
}

var res = sum(1, 2);
console.log(res);
alert(res);
document.write(`<div style="color:red">${res}</div>`);

```

실행해보면 콘솔에 찍힌 3, Alert창에 뜬 3, 화면에 빨간색 글씨로 그려진 3을 각각 확인해볼 수 있다.   
이렇듯 오로지 결과값만 반환하도록 바꿔주면 함수를 새로 만들지않아도 다양한 결과를 낼 수 있다.

또한 리턴은 한 함수 안에서 여러개를 사용할 수 있으며 표현식이 없이 `return;` 만 있을 경우 `undefined` 가 반환된다.

```js
function isFive(num){
if(num === 5){
return "number is five";
}
else if(num > 5 || num < 5){
return "number is not five"
}
else{
return; 
}
}

console.log(isFive(5));
console.log(isFive(3));
console.log(isFive("hi"));
```

::: details 결과    
number is five    
number is not five    
undefined
::: 

그리고 마지막으로 한 가지, 리턴하는 순간 함수의 흐름은 종료된다는 점도 알아두자
다음의 예제를 보면
```js
function foo() {
  for (let i = 1; i < 10; ++i) {
    if(i === 5){
      return i;
    }
  }
}
console.log(foo());
```
::: details 결과    
5
::: 

i가 5가 될때 i를 리턴하도록 했고 그 결과로 5가 반환되며 반복문이 종료된 것을 알 수 있다.



<br>


---
<TagLinks />