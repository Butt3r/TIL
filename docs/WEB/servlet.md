# Servlet이란? <Badge text="song" /><Badge text="beta" type="warning" />


## Servlet

<code>servlet</code> 이란 동적 어플리케이션 컴포넌트이다.   
클라이언트 요청에 대해 동적인 처리를 하며, html로 응답한다.   

- Java 확장자 프로그램(Server side)   
- Java thread 이용하여 동작   
- MVC 패턴에서 Controller 역할   


<code>servlet mapping</code>
: 너무 길고 보안이 노출된 url을 간단하게 맴핑하는 것


 ## Servlet 작동 순서

 웹 브라우저 -> 웹 서버 -> was -> 서블릿 컨테이너 (스레드 생성, 서블릿 객체 생성)   


 **서블릿 장점**

 jvm 멀티 쓰레드      

 리퀘스트가 들어오면 쓰레드로 보내서 처리 플러스로 또 들어오면 또 다른 쓰레드를 만들어서 처리      
 다른 CGI 언어들은 리퀘스트가 들어올때마다 객체를 생성하기때문에 서버 부하가 높음


## 요청처리 객체 응답처리 객체


- GET

URL   
보안에 취약   

- POST

HEADER   
보안에 강함   



### XML로

```java
<!-- 서블릿 선언 -->
  <servlet>
      <servlet-name>HelloWorld</servlet-name>
      <servlet-class>org.example.HelloWorld</servlet-class>
  </servlet>
  
  <!-- 서블릿을 URL과 연결 -->
  <servlet-mapping>
      <servlet-name>HelloWorld</servlet-name>
      <url-pattern>/Home</url-pattern>
  </servlet-mapping>
```

### 어노테이션으로

```java
package org.example;

@WebServlet('/Home') 
public class HelloWorld extends HttpServlet
{
    System.out.println("Hello world!");
}
```


## 서블릿 라이프 사이클(생명주기)

서블릿 객체 생성(최초 한번) -> init() 호출(최초 한번) -> service(), doGet(), doPost() 호출(요청시 매번) -> destroy() 호출(마지막 한번)

서블릿이 사용도가 높은 이유는 빠른 속도 때문   
서블릿은 최초 요청 시 객체가 만들어져 메모리에 로딩되고 이후 요청 시에 기존의 객체 재활용함   

어플리케이션이 종료될때 객체 사라짐   
자바 클래스를 수정하면 객체 새로 생성됨   


## 서블릿 선처리, 후처리

@PostConstruct 선처리 (init 메소드 전)

@PreDestroy 후처리 (destroy 메소드 후에)




## HTML Form

HTML Form -> Servlet -> HTML Page


HTML의 form 태그는 서버쪽으로 정보를 전달할 때 사용하는 태그이다.


- input

속성(type,name,value)

type : 태그 종류 지정   
name : 태그의 이름   
value : name에 해당하는 값   


- type = text

사용자 입력을 받을 때 사용


- type = password

사용자 인터페이스(로그인 페이지 등)에서 비밀번호를 입력받을 때 사용



- type = submit

form내의 데이터를 전송할 때 사용


- type = reset

form내의 데이터를 초가화할 때 사용


- type = checkbox

데이터값을 여러 개 전송할 때 사용


- type = radio

checkbox와 달리 여러 개의 데이터 값 중 한 개의 값만을 전송할 때 사용

- select

리스트 형태의 데이터를 사용


### form tag

input 태그들의 값을 서버로 전송하기 위한 정보를 담고있다.

```
<form action = "join" method="post">
```

```
GET: http://IPAdress:portNumber/Context/Path/Memberjoin?id="id"&name="john doe"
```
```
POST: http://IPAdress:portNumber/Context/Path/Memberjoin
```

### Servlet Parameter

Form 태그의 submit 버튼을 클릭하여 데이터를 서버로 전송하면,   
servlet에서는 HttpServletRequest객체를 이용하여 parameter값을 얻을 수 있다.

- getParameter(name)   
- getParameterValues(name)   
- getParameterNames()   