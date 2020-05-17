# MVC Architecture <Badge text="song" />

스프링 웹 개발에 자주 사용되는 MVC 패턴의 아키텍처를 알아보겠다.


## MVC Pattern

MVC 패턴이란  <code>Model</code> <code>View</code> <code>Controller</code> 를 세가지의 역할로 구분하여 개발하는 디자인패턴이다.

### Model

M에 해당하는 Model은 애플리케이션의 상태(date)를 나타낸다.   
데이터와 관련된 정보들을 정의하거나 가공하며 상태의 변화를 다른 요소에게 전달한다.   


- 프로그램이 "무엇"을 수행할지를 정의   
- DB 관련 로직 처리   
- 내부 비즈니스 로직 처리   
- 데이터가 변경됨을 View와 Controller에 전달   
- **java Beans**  
 

> 예시로 쇼핑몰 앱의 개발을 목표한다 가정한다면 제일 먼저 쇼핑몰의 데이터(품목, 가격, 결제수단 장바구니 등)를 정의해야한다.

### View

V에 해당하는 View는 실제 사용자에게 보여지는 화면을 담당한다. UI(User Interaction)와 같은 사용자 인터페이스를 나타내며 Model의 상태를 받아 렌더링하는 역할을 수행한다.


- 프로그램 화면에 "보여지는" 부분을 수행
- Model의 변화를 감지하여 업데이트함
- Controller에게 사용자 행위를 전달
- **Jsp**   


> 쇼핑몰 앱의 데이터를 디스플레이 하기 위해서는 Model의 정보를 전달받아야한다.
 

### Controller

C에 해당하는 Controller는 Model과 View 사이에서 매개체 역할을 한다.
자신을 제외한 구성 요소의 데이터나 동작을 알지못하는 Model, View와 달리 Controller는 Model과 View에 관해 알고있어야 한다.


- 이벤트를 감지하고 "어떻게" 처리할 지를 수행
- 애플리케이션의 메인 로직 담당
- View에서 전달된 정보로 Model을 변경해줌
- Model과 View를 독립적으로 관리 가능
- **Servlet**   
 

> 사용자가 장바구니에 항목을 추가하거나 제거하는 행위를 할 때, Controller는 View의 입력을 받아 Model을 변경시켜주고 업데이트된 정보를 다시 View로 전송하여 업데이트된 데이터를 화면에 표시하게 한다.


<br>   


## MVC Structure


<br>
<img src="https://mdn.mozillademos.org/files/16042/model-view-controller-light-blue.png" alt="mvc 패턴 구조2" height="400px" />  
<br>



---
- [디자인 패턴 - MVC 패턴](https://medium.com/@jang.wangsu/%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4-mvc-%ED%8C%A8%ED%84%B4%EC%9D%B4%EB%9E%80-1d74fac6e256)
- [MVC 패턴이란](https://m.blog.naver.com/jhc9639/220967034588)
- [MVC](https://developer.mozilla.org/ko/docs/Glossary/MVC)







