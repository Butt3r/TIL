JS(자바스크립트)란 <Badge text="boostcourse" />
================


> 부스트코스 [자바스크립트의 시작](https://www.boostcourse.org/cs124/joinLectures/52258) 수업을 듣고 정리한 자료입니다.


## 자바스크립트의 탄생

[처음 웹이 세상에 나왔을 때](https://butt3r.github.io/TIL/WEB/web-basic.html#%EC%9B%B9-web-%EC%9D%98-%ED%83%84%EC%83%9D), HTML(HyperText Markup Language )이라는 단 하나의 기술만 존재했다. HTML은 하이퍼 텍스트 방식으로 여러 문서들을 연결시켜 웹에 다양한 정보를 제공하는 등 그 자체로 혁신적이였지만 **정적**이라는 단점이 존재했다.     
사람들은 다른 매체들과 마찬가지로 웹 페이지 역시 사용자와 상호작용할 수 있기를 바랬고, 그 바램으로 탄생한 것이 **동적언어**인 자바스크립트이다.


## 자바스크립트의 특징

자바스크립트는 대표적인 동적 언어(Dynamically Typed Language)이다. 여기서 동적의 의미는 웹 페이지 상에서 사용자와 상호작용(interaction)하거나 애니메이션(animation)과 같이 움직이는 콘텐츠의 구현을 말한다. 더 정확하게 표현하자면 동적 언어는 컴파일이 아닌 런타임에 타입이 결정되는 언어란 뜻으로 이러한 특징이 A라는 행동을 했을 때 B라는 이벤트가 발생하게 한다.



## HTML과 자바스크립트 

<code>HTML</code>과 <code>javascript</code> 서로 다른 두 언어를 웹에서 어떻게 같이 사용할 수 있는지 알아본다.

### 1. script 태그
---

먼저 기본적인 HTML 코드는 다음과 같다.
```html
<!-- html5 설정 -->
<!DOCTYPE html> 
<html>

    <!-- html의 컨테이너 역할  -->
    <head> 
        <!-- 문자 셋을 UTF-8로 렌더링 -->
	    <meta charset="UTF-8" />
         <!-- 웹 페이지의 제목 -->
        <title></title>
    </head>

    <body>
    <!-- 웹 페이지에 담을 모든 콘텐츠 -->
    </body>

</html>
```
우리가 보는 웹 사이트들은 위와 같은 형태의 html이 존재하며 `<script>`는 이러한 html 문서 안에서 자바스크립트를 동작할 수 있게 도와주는 태그이다.   
   

`<script>`를 사용하는 방법은 두 가지가 있다.     
첫번째는 직접 코드를 작성하는 방식이고 두번째는 외부 스크립트를 불러오는 방식이다.   
이 글에서는 첫번째 방식을 사용해 간단한 텍스트를 웹 페이지에 띄워보겠다.

```html
 <body>
    <h1>javascript</h1>
    <script>
      document.write("Hello world");
    </script>

    <h1>html</h1>
    Hello world
  </body>
```
   
> 두 언어간의 차이점을 보여주기 위해 html에 같은 텍스트를 작성했다.

   
::: details 결과  
<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbYU2Bp%2FbtqS4Nz7tqB%2FEUr8tg4gsJ1Lfz65pC8iX0%2Fimg.png" alt="html과 js기초" height="350px" />   
:::   
    


결과화면을 보니 둘 사이의 별다른 차이가 보이지않는다.   
둘은 정말 같은걸까? `<script>`에 들어간 코드를 조금 수정해보자      

```html
 <body>
    <h1>javascript</h1>
    <script>
      document.write(1+1);
    </script>

    <h1>html</h1>
    1+1
  </body>
```


::: details 결과  
<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdoN62P%2FbtqSV9ybptd%2FtddEJDil5fHcZjjvDwgKM0%2Fimg.png" alt="html과 js기초2" height="350px" />
:::        
     

1+1을 집어넣으니 자바스크립트는 2, html은 1+1을 그대로 출력했다. 왜 이런 차이점이 존재할까? 그 이유는 앞에서 이야기했듯이 html은 **정적**이기 때문에 1+1을 문자 그대로 화면에 출력했지만 자바스크립트는 1+1을 **동적**으로 처리하여 2를 출력한 것을 알 수 있다.


### 2. 이벤트(Event)
---

이벤트는 브라우저 상에서 사용자가 클릭을 하거나, 스크롤을 내리거나, 입력한 값을 제출할 때와 같이 사용자 동작에서 일어나는 어떠한 사건을 의미한다.
자바스크립트에서 이벤트는 사용자와 상호작용하는데에 핵심적인 역할을 하며 웹 애플리케이션을 보다 사용자 친화적으로 만들어 준다.   

이번 글에서는 그 중에서 자주 사용되는 대표적인 [DOM](https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model/%EC%86%8C%EA%B0%9C) 이벤트 몇가지를 알아보겠다.

#### onClick 

`click` 이벤트는 마우스로 특정 요소를 클릭했을 때 발생한다.   
그리고 `onClick` 은 이러한 이벤트를 리스닝하는 이벤트 리스너이다. 

어떻게 동작하는지 예제로 알아보자
```html
  <body>
    <h1>onClick</h1>
    <input type="button" value="sayHi" onclick="alert('Hi!')">
  </body>
</html>
```
위 코드를 실행해보면 버튼을 클릭했을 때 "Hi!"라는 메세지가 [alert](https://developer.mozilla.org/ko/docs/Web/API/Window/alert)경고창과 함께 뜨는 것을 확인할 수 있다.

::: details 결과  
<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FlyMZm%2FbtqSXkl3DT9%2Fg9vt5SxIeHTFZ3UBihjEC1%2Fimg.png" alt="html과 js기초2" height="350px" />
:::   

어떻게 가능할까? 먼저, 이벤트 리스너는 말 그대로 어떠한 이벤트를 듣고 있는 대기 상태를 말한다. 그리고 웹 브라우저는 해당 이벤트 리스너의 속성을 기억하고 있다가 특정 이벤트가 발생하면 리스너에 등록된 코드를 실행한다.

여기서는 onClick이 곧 이벤트 리스너이고 웹 브라우저는 onClick에 등록된 코드 즉, `"alert('Hi!')"`을 자바스크립트 문법에 맞게 해석하여 코드를 실행시킨 것이다.

이외에도 자주 접하게 될 onSubmit, onChange, onKeydown 등도 동일한 과정을 거친다.   
더 많은 이벤트가 궁금하다면 아래 참고
[이벤트](https://developer.mozilla.org/ko/docs/Web/Events)


### 3. 콘솔(Console)
---

자바스크립트를 사용하기 위해서 매번 파일을 만들며 번거로운 과정을 거쳐야할까? 사실 그렇지않다.   
우리는 웹 브라우저만 있다면 언제든지 자바스크립트를 사용할 수 있다. `콘솔`을 통해서 말이다.

콘솔은 F12 혹은 마우스 우클릭 -> 요소검사를 눌렀을 때 나오는 개발자 도구의 Console 탭에 있다.
이 콘솔을 이용하면 바로 자바스크립트 코드를 실행할 수 있다.
아래의 코드를 콘솔창에 입력해보자

```js
// console.log는 콘솔에 메세지를 출력하라는 것을 의미한다.
console.log('Hello, World!'.length);
```
   
::: details 결과  
13
:::  

결과를 확인해보면 로그에 "13"이 찍힌 것을 알 수 있다. 이는 우리가 "Hello, World!"라는 문자열의 길이를 물어봤기 때문이다. 
> 참고로 문자열의 길이는 공백까지 포함하고 있다.

```js
console.log(10 + 20);
```
그럼 위 코드는 어떤 결과가 나올까

::: details 결과  
30
:::  

그렇다. 30이 나온다.   
콘솔에서는 이렇듯 자바스크립트를 통한 연산도 가능하다.   

정리하면 콘솔은 입력된 코드를 현재 웹 브라우저에서 **즉석으로 실행**해주고 이를 활용하여 간단한 문제는 별도의 js 파일없이 콘솔을 통해 해결할 수 있다.

<br>
<br>


::: tip
부스트코스 서포터즈 3기 활동의 일환으로 작성되었습니다.
:::



---
참고 [부스트코스 - 웹프로그래밍 DOMContentLoaded 이벤트](https://www.boostcourse.org/web316/lecture/20141)   
참고 [HTML <script>태그](http://www.tcpschool.com/html-tags/script)   














  



