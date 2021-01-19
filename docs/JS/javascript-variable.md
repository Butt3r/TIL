---
tags: ["boostcourse", "js"]
---



변수와 상수 <Badge text="boostcourse" />
================

> 부스트코스 [자바스크립트의 시작](https://www.boostcourse.org/cs124/lecture/194589) 수업을 듣고 정리한 자료입니다.

## 변수의 효율성

이전 강의에서 우리는 어떤한 연산을 할 때 아래와 같이 직접 값을 기입하는 방법을 사용했다. 

```js
alert(1+1);
```

이러한 방법을 사용한다해서 작동이 안되는 것은 아니지만 만약 위와 같은 코드가 한줄이 아니라 10줄, 100줄, 1000줄이 된다면 이야기가 달라진다.    

예를 들어서 구구단 2단을 구현한다고 가정해보자 지금까지 배운 것만을 이용한다면 아래와 같은 형태의 코드가 완성될 것이다.

```js
console.log(2*1);
console.log(2*2);
console.log(2*3);
console.log(2*4);
console.log(2*5);
console.log(2*6);
console.log(2*7);
console.log(2*8);
console.log(2*9);
```

여기까지는 어렵지 않게 작성할 수 있다. 그런데 만약 구현해야하는게 2단뿐이 아니라면,   
그리고 중간에 값을 수정해야할 일이 계속 계속 생긴다면 어떨까?

```js
console.log(2*1);
console.log(2*2);
console.log(2*3);
.
.
.
console.log(9*7);
console.log(9*8);
console.log(9*9);

```

복붙으로 어떻게든 해결할 수 있지만 굉장히 번거로울 뿐더러 코드의 가독성은 떨어지고 장황해진걸 알 수 있다. 그럼 어떻게 바꿀 수 있을까? 정답은 `변수` 사용에 있다. 변수를 이용해서 구구단 프로그램을 개선해보자

```js
for(var i = 2; i <= 9; ++i){
  for(var j = 1; j <= 9; ++j){
  console.log(`${i}x${j} = ${i*j}`);
  }
}
```

::: details 결과    
2x1 = 2

2x2 = 4

2x3 = 6

.

.

9x7 = 63

9x8 = 72

9x9 = 81
:::    


`i` 라는 변수는 단을,  `j` 라는 변수는 1부터 9까지 증가하는 숫자를 표현하고 있다. 해당 코드는 2단에서 9단까지 구현하기 위해  `반복문` 을 같이 사용했는데 지금 당장은 이해하지 못해도 괜찮다. 그저 `변수` 를 사용하면 값의 사용 의미가 명확해지고 프로그램을 더 추상적이고 간결화할 수 있다는 점을 알아두면 된다.

## 변수

`변수(variable)` 는 말 그대로 **변화하는 수**, 다시 말해 **정해지지 않은 값**을 의미한다.   

예로 `recentMovie`라는 네임택이 붙은 상자를 떠올려보자. 나는 해당 상자에 가장 마지막으로 본 최신 영화를 담으려한다. 가장 최근에 본 영화인 1917을 상자에 저장한다.

```js
var recentMovie = "1917";
console.log(`my recently watched movie is ${recentMovie}`);
```

::: details 결과    
my recently watched movie is 1917  
:::   

그런데 시간이 지나고 새로운 영화를 보게되면서 1917 은 더 이상 가장 최근에 본 영화가 아니게 되었다. 나는 테넷을 새롭게 추가하여 선언한다.

```js
var recentMovie = "1917";
recentMovie = "테넷";
console.log(`my recently watched movie is ${recentMovie}`);
```

::: details 결과       
my recently watched movie is 테넷
:::   

코드를 실행하면 1917에서 테넷으로 정상적으로 변경되어 출력된 것을 확인할 수 있다.

요약하면 상자는 `메모리`, recentMovie는 `변수명`, 1917 과 테넷은 `변수값`으로 이렇게 고정된 값이 아니라 **변경될 여지가 있는** 값들을 담는 저장소를 `변수`라 한다.   

### 변수 요약

```js
var maxNum = 500;
maxNum = 1000;
// output: 1000
```   


- `var` 혹은 `let` 키워드를 사용하여 선언한다.
- 키워드 다음으로 변수명을 쓴다. 이때 변수명은 대소문자를 구분한다.
- 변수명의 첫 글자로 숫자가 올 수 없다.
- 변수명에 `-` 를 포함할 수 없다.
- 변수명은 [예약어](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) 와 같을 수 없다.
- 대입 연산자 `=` 를 사용하여 변수에 변수값을 대입시킨다.
- 값이 변경되면, 이전의 저장된 값들은 삭제된다.
- 변수에는 지역변수(Local Variable)와 전역변수(Global Variable)가 존재한다.

<br>   

참고 [scope](https://poiemaweb.com/es6-block-scope)   
참고 [지역변수와 전역변수](https://velog.io/@rememberme_jhk/JS-Scope-%EC%A7%80%EC%97%AD-%EB%B3%80%EC%88%98-%EC%A0%84%EC%97%AD-%EB%B3%80%EC%88%98)   

## 상수

`상수(constant)` 는 변수와 정반대로 **변화하지 않는 수**를 의미한다.       

아까의 예제를 그대로 가져와 변수를 상수로 바꿔보자

```js
const recentMovie = "1917";
recentMovie = "테넷";
console.log(`my recently watched movie is ${recentMovie}`);
```

::: danger         
TypeError
"recentMovie" is read-only   
:::      


[read-only](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Errors/Read-only)라는 에러가 뜬다.    

이렇듯 상수는 말 그대로 **고정된 수**이므로 재할당하려는 시도엔 에러가 발생한다.
상수는 오로지 **읽기**만 가능하고 대입을 통한 수정이 불가능 한 점을 기억하자

그럼 상수는 언제 사용할까?

상수는 프로그램에 절대로 변화하면 안되는 데이터가 있을 때 유용하다. 데이터를 상수로 생성하면 개발자의 실수 혹은 고의적으로 데이터가 변경될 상황을 미연에 방지할 수 있고 데이터의 사용 의미가 명확해진다.

### 상수 요약

```js
const MAX_NUM = 500;
MAX_NUM = 1000;
// output: error invalid assignment to const 'MAX_NUM'
```

- `const` 키워드를 사용하여 선언한다.
- 변수의 식별자(변수명) 규칙과 같다.
- 하드코딩된 값일 경우 대문자를 사용하고, 두단어 이상의 결합은 `_` 으로 구분한다.
- 대입 연산자 혹은 재선언을 통해 값을 변경할 수 없다.
- 재할당 할 경우 에러가 발생한다.

<br>      

참고 [상수](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Values,_variables,_and_literals#%EC%83%81%EC%88%98)      
참고 [상수 - c언어](http://www.tcpschool.com/c/c_datatype_constant)   

<br>

💚 **부스트코스 서포터즈 3기 활동의 일환으로 작성되었습니다.**

<TagLinks />