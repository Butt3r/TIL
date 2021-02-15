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
    content: https://butt3r.github.io/TIL/JS/javascript-array.html
    
tags: ["BOOSTCOURSE", "JS", "부스트코스 서포터즈 3기", "WEB"]
---


배열(Array) <Badge text="boostcourse" />
================

> 부스트코스 [자바스크립트의 시작](https://www.boostcourse.org/cs124/lecture/194613) 수업을 듣고 정리한 자료입니다.



## 배열이란?

`배열` 은 순차적으로 동일한 타입의 데이터들을 저장하는 자료구조를 말한다. 비슷하게 서로 연관된 물건들을 순서대로 담아둔 수납상자를 떠올리면 된다.

배열의 선언 방법은 다음과 같다.

```js
let animal = ["kitty", "bunny", "pony"]; 
```

`[]` 를 사용하여 데이터를 담을 공간을 만들고 데이터들을 `,` 로 구분하여 그 안에 넣어준다. 그리고 이 모든 것을  animal이라는 하나의 변수에 저장하여 최종적으로 bunny, kitty, pony가 담긴 animal이라는 상자를 만든다.

만약, 아무것도 담기지 않은 빈 배열을 만들고 싶다며 아래와 같은 방법으로 선언하면 된다.

```js
let array = []; // 주로 이 방법을 사용한다.
let array = new Array();
```

## 배열 요소에 접근하기

`배열` 은 순차적이라고 했다. 이 말은 즉, 배열 요소엔 0부터 순서대로 숫자가 매겨져있다는 뜻이다. 우리는 이를 활용하여 인덱스(Index)를 통해 특정 요소들에 접근할 수 있다.

아까의 animal 배열의 값을 꺼내보겠다.

```js
console.log(animal[0]);
console.log(animal[1]);
console.log(animal[2]);
```
::: details 결과       
kitty   
bunny   
pony     
::: 


해당 인덱스의 위치한 값이 정상적으로 출력됐음을 알 수 있다. 또한 같은 방법으로 배열의 요소를 수정하거나 추가하는 것 역시 가능하다.

```js
// 기존 요소를 수정
animal[0] = "cat";
animal[1] = "dog";
// 새로운 요소 추가 
animal[3] = "fox";

// 배열의 전체 값을 꺼냄
console.log(animal);
```

::: details 결과       
["cat", "dog", "pony", "fox"] 
::: 


animal 배열에 들어간 값들이 달라진 것을 알 수 있다. 

## 배열의 활용

자바스크립트엔 다양한 배열 관려한 [내장 함수](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#)들이 존재한다.   
이번 글에서는 그 중에 자주 쓰이는 몇가지를 알아보고자 한다.

### Array.length

```js
let array = [1, 2, 3, 4, 5];
console.log(array.length);
```

::: details 결과       
5
::: 

[length](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/length)는 배열의 길이를 알려준다. 결과를 확인해보면 array의 길이인 5가 나온 것을 확인할 수 있다. 여기서 왜 6이 아니라 5가 나왔는지 의문을 품을 수 있는데 배열의 길이는 순서를 매길때와 달리 1부터 시작한다. 따라서 배열의 길이는 항상 최대 인덱스보다 하나 더 크다.

### Array.push()

```js
// 빈 배열 선언
let array = [];
array.push("hello");
array.push("world");

console.log(array);
```

::: details 결과       
["hello", "world"]
::: 



[push()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/push)는 배열의 끝에 요소를 삽입한다. 배열의 끝이기 때문에 `push()` 는 `array[array.length]` 와 같다고 볼 수 있다. 만약 `push()` 가 어떻게 동작하는지 알고싶다면 [stack](https://ko.wikipedia.org/wiki/%EC%8A%A4%ED%83%9D) 에 대해 알아보는 것을 추천한다.

### Array.pop()

```jsx
let array = ["hello", "world"];
let popped = array.pop();

console.log(array, popped);
```

::: details 결과       
["hello"] "world"
::: 


[pop()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) 은 `push()` 와 반대로 배열의 끝에 존재하는 요소를 제거하고 그 요소를 반환한다. 결과를 보면 array 배열에 마지막 요소가 삭제된 것과 해당 요소가 반환된 것을 알 수 있다.   `pop()` 의 동작구조를 알고싶다면 `push()` 와 마찬가지로  `stack` 에 대해 알아보면 된다. 이번 글에서는 간단하게 이러한 기능을 한다 정도만 소개하기로 하겠다.


<br>


---
<TagLinks />