자바스크립트의 자료형 <Badge text="boostcourse" />
================


> 부스트코스 [자바스크립트의 시작](https://www.boostcourse.org/cs124/lecture/194588) 수업을 듣고 정리한 자료입니다.


## 자료형(Data type)

컴퓨터 언어에는 데이터(data)를 종류별로 분류하는 자료형이 존재한다. 우리가 사용하고자하는 모든 값들은 언제나 특정 자료형에 속하게 되며 각 자료형에 따라 데이터의 의미, 데이터가 저장되어지는 공간의 크기 등이 달라진다.

자바스크립트의 대표적인 [원시 자료형(primitive)]([https://developer.mozilla.org/ko/docs/Glossary/Primitive](https://developer.mozilla.org/ko/docs/Glossary/Primitive))은 총 6가지가 있다.

```js
string, number, bigint, boolean, undefined, symbol
// 이외에도 객체형(Object)이라는 특수한 자료형이 존재하는데, 이 객체형은 다른 자료형들과 비교해서 복잡한 개체를 다루기 때문에 따로 포스팅하겠다.
```    

이번 글에서는 그 중 number와 string을 다루려한다.

## 숫자형(Number)

`Number` 는 간단하게말해 숫자를 나타내는 데이터 타입이다. 다른 프로그래밍 언어의 경우  `Integer` , `Float` , `Double`  등 다양하게 정의된 숫자형이 존재하지만 자바스크립트에서의 숫자형은 [IEEE 754]([https://ko.wikipedia.org/wiki/IEEE_754](https://ko.wikipedia.org/wiki/IEEE_754)) 표준에 따라 정수형(Integer Value)과 소수형(Floating Point Value)을 모두 나타낸다.

Number는 숫자 자료형이기 때문에 아래와 같이 덧셈 `+`, 뺄셈 `-` , 곱셈 `*` , 나눗셈 `/` 과 같은 기본적인 사칙연산이 가능하다. 

```js
console.log(10 + 10); // 20
console.log(10 - 5); // 5
console.log(10 * 10); // 100
console.log(10 / 5); // 2
```   

그 밖에 Number에는  `Infinity`, `NaN`  이라는 특수값이 존재한다. 간략하게 표현하면 Infinity는 무한대, NaN은 'Not a number'라는 뜻으로 유효하지 않은 값을 나타낸다.   

더 자세한건

참고 [infinity]([https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Infinity](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Infinity))   
참고 [NaN]([https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN))    

## 문자형(String)

`String` 은 간단하게 말해 문자열을 나타내는 데이터 타입이다.  문자열은 따옴표로 시작해서 따옴표로 끝나는데 항상 시작하는 따옴표의 종류와 끝나는 따옴표의 종류가 같아야 한다. 

자바스크립트의 따옴표 종류는 총 세 가지이다.

- 큰 따옴표 `""`
- 작은 따옴표 `''`
- 백틱(backtick) <code>``</code>

큰 따옴표와 작은 따옴표의 역할은 같다. 다만 백틱의 경우는 조금 특별한데 `${...}` 을 사용하여 손쉽게 특정 값이나 표현식을 문자열 안에 삽입할 수 있다.

```js
alert(`1+3 result is: ${1+3}`);
alert("1+3 result is: 1+3");
```


::: details 결과  
1+3 result is: 1+3
1+3 result is: 4    
:::     


결과를 확인해보면 알 수 있듯이 백틱을 사용한 경우에만 "1+3"이 연산된 것을 알 수 있다.    
만약 아래와 같이 그냥 문자열을 더한다면

```js
alert("1"+"3");
```

::: details 결과  
13   
:::     

4가 아니라 말 그대로 "1"과 "3"을 그대로 가져다붙인 13이 나온 것을 알 수 있다. 만약 문자로 입력된 값을 Number와 마찬가지로 연산하고 싶다면 [형변환]([https://opentutorials.org/course/1223/5330](https://opentutorials.org/course/1223/5330))이란 것을 해야한다. 이는 나중에 따로 포스팅 하도록 하겠다.

### 문자열의 활용

추가로 문자열 관련 내장함수들을 간략하게 알아보겠다.

```js
"Hello, world!".length; // 13
"Hello, world!".toUppercase(); // HELLO, WOLRD!
"Hello, world!".toLowercase(); // hello, wolrd!
"Hello, world!".indexOf("H"); // 0
```

문자열의 길이를 알려주는 `length` , 모든 문자를 대문자로 변환해주는 `toUppercase()` 그리고 반대로 모든 문자를 소문자로 변환해주는 `toLowercase()` , 마지막으로 해당 문자에 속한 인덱스의 위치를 알려주는 `indexOf` 를 알아봤다.

이 외에도 자바스크립트에는 강력한 기능의 문자열 내장함수들이 다수 포함되어 있다.   
자세한건 참고 [String]([https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String))

<br>

💚 **부스트코스 서포터즈 3기 활동의 일환으로 작성되었습니다.**