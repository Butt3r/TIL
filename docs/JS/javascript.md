자바스크립트(Javascript)란 <Badge text="song" type="warning"/><Badge text="boostcourse" />
================


> 부스트코스 [자바스크립트의 시작](https://www.boostcourse.org/cs124/joinLectures/52258) 수업을 듣고 정리한 자료입니다.


## 자바스크립트의 탄생
---
[처음 웹이 세상에 나왔을 때](https://butt3r.github.io/TIL/WEB/web-basic.html#%EC%9B%B9-web-%EC%9D%98-%ED%83%84%EC%83%9D), HTML(HyperText Markup Language )이라는 단 하나의 기술만 존재했다. HTML은 하이퍼 텍스트 방식으로 여러 문서들을 링크로 묶어 다양한 정보를 웹을 통해 제공하는 등 그 자체로 혁신적이였지만 **정적**이라는 단점이 존재했다.   
사람들은 다른 매체들과 마찬가지로 웹 페이지 역시 사용자와 상호작용할 수 있기를 바랬고, 그 바램으로 탄생한 것이 **동적**언어인 자바스크립트이다.


## 자바스크립트의 특징
---
자바스크립트는 대표적인 동적 언어(Dynamically Typed Language)이다. 여기서 동적의 의미는 웹 페이지 상에서 사용자와 상호작용(interaction)하거나 애니메이션(animation)과 같은 움직이는 콘텐츠의 구현과 같다. 더 정확하게 표현하자면 동적 언어는 컴파일이 아닌 런타임에 타입이 결정되는 언어란 뜻으로 이러한 특징이 A라는 행동을 하면 B라는 이벤트가 발생하게 한다.



## HTML과 자바스크립트의 만남 
---
HTML과 javascript 서로 다른 두 언어를 웹에서 어떻게 같이 사용할 수 있는지 알아본다.

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
우리가 보는 웹 사이트들은 위와 같은 형태의 html이 존재하며 <code>script</code>는 이러한 html 문서 안에서 자바스크립트를 동작할 수 있게 도와주는 태그이다.   
   

<code>script</code>를 사용하는 방법은 두 가지가 있다.     
첫번째는 직접 코드를 작성하는 방식이고 두번째는 외부 스크립트를 불러오는 방식이다. 이 글에서는 첫번째 방식을 사용해 간단한 텍스트를 웹 페이지에 띄워보겠다.

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
   
> 정적 언어와의 차이점을 보여주기 위해 html에도 똑같은 텍스트를 작성했다.

<br>
<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbUSFVI%2FbtqSZx5T0dZ%2Fbd2KjY3BMQN8vP0eOMdck1%2Fimg.png" alt="html과 js기초" height="400px" />  
<br>

결과화면을 보니 별다른 차이가 보이지않는다. 둘은 정말 차이점이 없을까? <code>script</code>에 들어간 코드를 조금 수정해보자   

<br>
<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FsMpvC%2FbtqSX70GuRI%2FQToL8WOf148px08r8rbAp1%2Fimg.png" alt="html과 js기초2" height="400px" />  
<br>

1+1을 집어넣으니 자바스크립트는 2, html은 1+1을 그대로 출력했다. 왜 이런 차이점이 존재할까? 그 이유는 앞에서 이야기했듯이 html은 정적이기 때문에 1+1을 문자 그대로 화면에 출력했지만 자바스크립트는 1+1을 동적으로 처리하여 2를 출력한 것을 알 수 있다.


더 자세한건 아래 참고
:link: [부스트코스 - 웹프로그래밍 DOMContentLoaded 이벤트](https://www.boostcourse.org/web316/lecture/20141)
:link: [HTML <script>태그](http://www.tcpschool.com/html-tags/script)


### 2. 이벤트
---

### 3. 콘솔
---





::: tip   
이 글은 부스트코스 서포터즈 3기 활동의 일환으로 작성했습니다.
:::  

---







  



