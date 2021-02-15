---
title: 조건문의 활용
meta:
  - name: description
    content: 조건문의 활용
  - property: og:title
    content: 조건문의 활용
  - property: og:description
    content: 조건문의 활용
  - property: og:url
    content: https://butt3r.github.io/TIL/javascript-Control-flow-2.html
    
tags: ["BOOSTCOURSE", "JS", "부스트코스 서포터즈 3기", "WEB"]
---

조건문의 활용 <Badge text="boostcourse" />
================


## 토글 만들기
저번 글에서 배운 `조건문`을 가지고 버튼을 누르면 **night Mode**가 on/off 되는 프로그램을 만들어보겠다.   
먼저 아래와 같이 버튼을 생성하고 버튼에 night이라는 `value` 값을 지정해준다.
```html
<input id="nigth_day" type="button" onclick="toggleBtn()" value="night">
```
그리고 if문을 이용해 클릭한 버튼의 `value` 값이 조건과 일치하면 해당 `value` 에 맞게 바탕화면과 글씨의 색상을 바꾸는 코드를 작성한다.
```html
<script>
    function toggleBtn() {
		if(document.querySelector("#nigth_day").value === 'day'){
			document.querySelector("body").style.backgroundColor = "white";
			document.querySelector("body").style.color = "black";
		} else {
			document.querySelector("body").style.backgroundColor = "black";
			document.querySelector("body").style.color = "white";
		}
      }
</script>
```
[document.querySelector](https://developer.mozilla.org/ko/docs/Web/API/Document/querySelector)를 통해 셀렉한 요소의 `value` 값을 가져와 day와 비교하고, 조건이 참이면 day모드로 조건이 거짓이면 night모드로 전환되게 했다. 하지만 실행해보면 원하는 바와 다르게 작동하는데 그 이유는 `value` 값은 계속 night으로 고정되어 있기 때문이다. 버튼을 누를 때마다 바탕화면과 글씨의 색상이 바뀔 수 있게 `value` 값을 변경해준다.

```html
<body>
	<div id="app"></div>
	<h3>Day/Night Toggle<h3>
    <input id="nigth_day" type="button" onclick="toggleBtn(event)" value="night">

    <script>
      function toggleBtn() {
		if(document.querySelector("#nigth_day").value === 'day'){
		    document.querySelector("body").style.backgroundColor = "white";
			document.querySelector("body").style.color = "black";
			document.querySelector("#nigth_day").value = "night";
	    } else {
			document.querySelector("body").style.backgroundColor = "black";
			document.querySelector("body").style.color = "white";
			document.querySelector("#nigth_day").value = "day";
		}
      }
    </script>
</body>
```
`value` 값을 마지막에 수정해줌으로써 night_day 토글이 정상적으로 작동하는 것을 확인할 수 있다.   
그런데 만약 다른 버튼을 눌렀을 때 night/day가 전환되게 하고싶다면 어떨까   
아마 새롭게 생성된 버튼의 `id`를 다시 일일이 바꿔줘야 할 것이다.

```html
<!-- 새로운 버튼 생성 -->
<input id="nigth_day2" type="button" onclick="toggleBtn(event)" value="night">
<script>
// 버튼의 id값을 다시 수정...
if(document.querySelector("#nigth_day2").value === 'day'){
    ...
}
</script>
```
무척 비효율적이다.   
위 코드를 리팩토링해서 좀 더 효율적으로 만들어보자



## 리팩토링
`리팩토링(Refactoring)` 은 프로그램의 외부 기능은 그대로 두고 **내부 구조를 더 나은 방향으로 정리하고 개선**하는 작업을 의미한다. 여기서 중요한건 리팩토링은 성능을 최적화시키는 것이 아닌 코드 품질을 향상시키는 프로세스라는 것 이다. 우리는 리팩토링을 통해 코드의 가독성을 높이고 유지보수가 용이해지는 등 많은 이익을 얻을 수 있다.


### 1. this 키워드 
[this](https://poiemaweb.com/js-this)는 **자기 자신**을 가리키는 키워드를 말한다.   
`this`는 호출되는 상황에 따라 바인딩되는 대상이 달라지므로 사용하는 방법에 따라 용이해진다.

이를 이용해 아까의 코드에 `this`를 적용하여 코드를 개선해보겠다.
```html
<script>
    function toggleBtn() {
	if(this.value === 'day'){
		document.querySelector("body").style.backgroundColor = "white";
		document.querySelector("body").style.color = "black";
		this.value = "night";
	} else {
		document.querySelector("body").style.backgroundColor = "black";
		document.querySelector("body").style.color = "white";
		this.value = "day";
	}
}
</script>
```
좀 더 읽기쉽게 간결해졌다.
이렇게 `this`를 통해 night_day의 `value` 값을 바꿀 수 있었던건 `this`가 이벤트가 발생된 객체 즉, 버튼에 바인딩 되었기 때문이다. 따라서 night_day가 아닌 다른 버튼, 다른 id로 수정한다해도 똑같이 작동하게 된다.


그리고 비슷하게 [event.target](https://www.w3schools.com/jsref/event_target.asp)을 이용하여 비슷한 결과를 낼 수 있다. 
```html
<input id="nigth_day3" type="button" onclick="toggleBtn(event)" value="night">
		
<script>
    function toggleBtn(e) {
	 if(e.target.value === 'day'){
		document.querySelector("body").style.backgroundColor = "white";
		document.querySelector("body").style.color = "black";
		e.target.value = "night";
	 } else {
		document.querySelector("body").style.backgroundColor = "black";
		document.querySelector("body").style.color = "white";
		e.target.value = "day";
	 }
}
</script>
```

### 2. 중복 제거
이 전에 `변수`를 사용하는 이유 중 하나는 코드의 의미가 명확해지기 때문이라고 했다. 이 처럼 코드의 가독성을 높이는데에는 적절한 변수명이 도움이 된다. 중복 제거 역시 비슷한 맥락이다.

우리는 바탕화면과 텍스트의 색상을 바꾸기 위해 `document.querySelector`를 반복적으로 사용했다. 하지만 `document.querySelector`는 일단 길이도 길 뿐더러 선택하려는 요소가 달라진다면 번거롭게 하나씩 바꿔줘야한다는 단점이 존재한다.

이러한 의미없는 코드의 반복을 줄이는 일은 리팩토링 과정에서 굉장히 중요하다.   
한번 변수를 사용해 중복을 제거해보자
```html
 <script>
    function toggleBtn(e) {
	let target = document.querySelector("body");
		if(this.value === 'day'){
			target.style.backgroundColor = "white";
			target.style.color = "black";
			this.value = "night";
		} else {
			target.style.backgroundColor = "black";
			target.style.color = "white";
		this.value = "day";
		}
      }
    </script>
```
중복된 부분이 사라져 처음과 비교해 훨씬 가독성이 좋아졌다. 또한 `target` 변수가 선언된 부분만 수정하면 변수가 사용된 코드들도 같이 수정되므로 굉장히 편리해진 것을 알 수 있다.

<br>


---
<TagLinks />