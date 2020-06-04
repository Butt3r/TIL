# Servlet이란? <Badge text="song" /><Badge text="beta" type="warning" />

## Servlet

`servlet` 은 동적 웹 어플리케이션 컴포넌트이다.
클라이언트 요청에 대해 동적인 처리가 가능하며, 요청에 따른 결과를 다시 전송해주는 역할을 한다.
그런 면에서 CGI(Common Gateway Interface)와 비슷해보이지만 Servlet은 WAS를 거쳐 프로세스가 실행된다는 점이 CGI와 다르다.

### Servlet 특징

- Java 확장자 프로그램(Server side)   
    - JVM위에서 동작하므로 플랫폼에 독립적
- Java thread 이용하여 동작   
- MVC 패턴에서 **Controller** 역할   
- html을 사용하여 요청에 응답

### CGI와 비교

`Servlet`은 Request가 올때마다 스레드(thread)를 생성하여 처리하는 `멀티 스레드` 방식으로 동작하기 때문에 CGI보다 빠르다. 다른 CGI 언어들은 Request가 들어올때마다 매번 객체를 생성하기때문에 서버 부하가 높다.
<br>   

 ## Servlet 동작 과정

`Servlet` 은 서버에서 실행되는 작은 조각(Server Application let)과 같다.
모든 웹 애플리케이션은 적어도 한 개 이상의 Servlet으로 구성되어 있으며
동적인 페이지를 작성하기 위해 Servlet을 필요로 한다.

그럼 어떻게 Servlet이 동적으로 페이지를 생성하는가?
동작 과정은 다음과 같다.

<br>
<img src="https://myblog.opendocs.co.kr/wp-content/uploads/2014/09/multithread.png" alt="서블릿" height="400px" />  
<br>
<br>


1. 클라이언트(broser)의 URL 요청

- URL 요청이 Servlet 요청이란 것을 알기위해 URL과 Servlet 클래스를 미리 매핑(mapping)시킨
배포 서술자(Deployment Desciptor)가 필요하다.(web.xml)

2. Web server가 HTTP Request를 Servlet Container로 전송한다.

- HTTP 요청을 처리하기 위해 HttpServletRequest 객체와 HttpServletResponse 객체를 생성한다.

3. web.xml을 보고 어떤 URL과 매핑(Mapping)되어있는지 확인한다.

- 요청 URL을 보고 어떤 Servlet 클래스를 필요로 하는지 알아냄

4. Servlet 객체와 스레드를 생성한다.

- 한번도 실행된 적이 없거나 메모리에 생성된 객체가 없다면 (새로 Servlet 객체 생성)메모리에 로드하고 init() 메소드를 실행하여 초기화한다.
- 만약 이전에 생성한 객체가 있다면 **객체를 다시 생성하지 않는다.**(객체 재활용)
- Web container에서 새로운 스레드를 만들거나 하나를 할당한다.

5. Web container에서 service() 메소드를 호출한다.

- 클라이언트의 POST,GET 여부에 따라 doGet()을 호출할지 doPost()를 호출할지 결정

6. Respons 객체 사용과 스레드 소멸

- doGet() 혹은 doPost() 메소드가 동적 페이지를 생성하면 그 결과물이 담긴 Respons 객체를
Web container가 웹 서버로 전송한다.
- service() 메소드가 끝나면 HttpServletRequest와 HttpServletResponse를 소멸하고 스레드 종료

> 여기서 WAS(Web Application Server)란 웹을 기반으로 실행되는 프로그램으로 Servlet의 life cycle을 담당한다.


  
## Servlet life cycle(생명주기)

어떤 객체의 생성부터 소멸까지의 과정을 life cycle라고 말한다.
간단하게 `Servlet`의 생명주기가 어떻게 돌아가는지 알아보겠다.


### 1. init()

- 최초 한번만 수행된다.
- Servlet이 메모리에 로드될 때 호출된다.
- Servlet이 변경될 경우 init()메소드를 재정의한다.
    - 재정의하지 않은 경우 GenericServlet()의 init()이 실행된다.
- 클라이언트 요청을 처리하기 전 Servlet 객체를 **초기화**하는 역할을 한다.

### 2. service()

- 최초 클라이언트의 요청을 받았을 때 수행된다.
    - Web container가 새로 스레드를 생성하거나 스레드 풀()로부터 가지고 올 때를 말한다.
- 클라이언트의 HTTP Method(GET, POST, PUT, DELETE 등)를 참조하여 적절한 메소드를 호출한다.
- service()메소드는 따로 재정의 할 필요없이 doGet()이나 doPost()와 같은 메소드를
재정의하면 HttpServlet의 service()메소드가 요청에 맞는 메소드를 알아서 호출한다.


### 3. destroy()

- 마지막 한번만 수행된다.
- Web container가 종료 요청을 할때 호출된다.
- Servlet 객체를 메모리에서 **제거**해주는 역할을 한다.
 

## HttpServletRequest와 HttpServletResponse


### HttpServletRequest

- Http프로토콜의 request 정보를 서블릿에게 전달하기 위한 목적으로 사용
- Header정보, Parameter, Cookie, URI, URL 등의 정보를 읽어들이는 메소드를 가진 클래스
- Body의 Stream을 읽어들이는 메소드를 가지고 있음

### HttpServletResponse

- Servlet은 HttpServletResponse객체에 Content Type, 응답코드, 응답 메시지등을 담아서 전송함


## Servlet 설정

### XML

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

### Annotation

```java
package org.example;

@WebServlet('/Home') 
public class HelloWorld extends HttpServlet
{
    System.out.println("Hello world!");
}
```



## HTML Form

`HTML Form` -> `Servle`t -> `HTML Page`   
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

---

참고 [edwith - boostcourse](https://www.edwith.org/boostcourse-web)   
참고 [java - Servlet](https://linuxism.ustd.ip.or.kr/1005)   
참고 [t실전 jsp 강좌](https://www.inflearn.com/course/%EC%8B%A4%EC%A0%84-jsp-%EA%B0%95%EC%A2%8C/dashboard)    
