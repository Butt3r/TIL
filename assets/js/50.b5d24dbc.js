(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{415:function(t,e,s){"use strict";s.r(e);var a=s(25),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"servlet이란"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#servlet이란"}},[t._v("#")]),t._v(" Servlet이란? "),s("Badge",{attrs:{text:"song"}}),s("Badge",{attrs:{text:"beta",type:"warning"}})],1),t._v(" "),s("h2",{attrs:{id:"servlet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#servlet"}},[t._v("#")]),t._v(" Servlet")]),t._v(" "),s("p",[s("code",[t._v("servlet")]),t._v(" 은 동적 웹 어플리케이션 컴포넌트이다.\n클라이언트 요청에 대해 동적인 처리가 가능하며, 요청에 따른 결과를 다시 전송해주는 역할을 한다.\n그런 면에서 CGI(Common Gateway Interface)와 비슷해보이지만 Servlet은 WAS를 거쳐 프로세스가 실행된다는 점이 CGI와 다르다.")]),t._v(" "),s("h3",{attrs:{id:"servlet-특징"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#servlet-특징"}},[t._v("#")]),t._v(" Servlet 특징")]),t._v(" "),s("ul",[s("li",[t._v("Java 확장자 프로그램(Server side)")]),t._v(" "),s("li",[t._v("JVM위에서 동작하므로 플랫폼에 독립적")]),t._v(" "),s("li",[t._v("Java thread 이용하여 동작")]),t._v(" "),s("li",[t._v("MVC 패턴에서 "),s("strong",[t._v("Controller")]),t._v(" 역할")]),t._v(" "),s("li",[t._v("html을 사용하여 요청에 응답")])]),t._v(" "),s("h3",{attrs:{id:"cgi와-비교"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cgi와-비교"}},[t._v("#")]),t._v(" CGI와 비교")]),t._v(" "),s("p",[s("code",[t._v("Servlet")]),t._v("은 Request가 올때마다 스레드(thread)를 생성하여 처리하는 "),s("code",[t._v("멀티 스레드")]),t._v(" 방식으로 동작하기 때문에 CGI보다 빠르다. 다른 CGI 언어들은 Request가 들어올때마다 매번 객체를 생성하기때문에 서버 부하가 높다.\n"),s("br")]),t._v(" "),s("h2",{attrs:{id:"servlet-동작-과정"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#servlet-동작-과정"}},[t._v("#")]),t._v(" Servlet 동작 과정")]),t._v(" "),s("p",[s("code",[t._v("Servlet")]),t._v(" 은 서버에서 실행되는 작은 조각(Server Application let)과 같다."),s("br"),t._v("\n모든 웹 애플리케이션은 적어도 한 개 이상의 Servlet으로 구성되어 있으며\n동적인 페이지를 작성하기 위해 Servlet을 필요로 한다.")]),t._v(" "),s("p",[t._v("그럼 어떻게 Servlet이 동적으로 페이지를 생성하는가?\n동작 과정은 다음과 같다.")]),t._v(" "),s("br"),t._v(" "),s("img",{attrs:{src:"https://myblog.opendocs.co.kr/wp-content/uploads/2014/09/multithread.png",alt:"서블릿",height:"330px"}}),t._v(" "),s("br"),t._v(" "),s("ol",[s("li",[t._v("클라이언트(broser)의 URL 요청")])]),t._v(" "),s("ul",[s("li",[t._v("URL 요청이 Servlet 요청이란 것을 알기위해 URL과 Servlet 클래스를 미리 매핑(mapping)시킨"),s("br"),t._v("\n배포 서술자(Deployment Desciptor)가 필요하다.(web.xml)")])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("Web server가 HTTP Request를 Servlet Container로 전송한다.")])]),t._v(" "),s("ul",[s("li",[t._v("HTTP 요청을 처리하기 위해 HttpServletRequest 객체와 HttpServletResponse 객체를 생성한다.")])]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("web.xml을 보고 어떤 URL과 매핑(Mapping)되어있는지 확인한다.")])]),t._v(" "),s("ul",[s("li",[t._v("요청 URL을 보고 어떤 Servlet 클래스를 필요로 하는지 알아낸다.")])]),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[t._v("Servlet 객체와 스레드를 생성한다.")])]),t._v(" "),s("ul",[s("li",[t._v("한번도 실행된 적이 없거나 메모리에 생성된 객체가 없다면 (새로 Servlet 객체 생성)메모리에 로드하고 init() 메소드를 실행하여 초기화한다.")]),t._v(" "),s("li",[t._v("만약 이전에 생성한 객체가 있다면 "),s("strong",[t._v("객체를 다시 생성하지 않는다.")]),t._v(" (객체 재활용)")]),t._v(" "),s("li",[t._v("Web container에서 새로운 스레드를 만들거나 하나를 할당한다.")])]),t._v(" "),s("ol",{attrs:{start:"5"}},[s("li",[t._v("Web container에서 service() 메소드를 호출한다.")])]),t._v(" "),s("ul",[s("li",[t._v("클라이언트의 POST,GET 여부에 따라 doGet()을 호출할지 doPost()를 호출할지 결정")])]),t._v(" "),s("ol",{attrs:{start:"6"}},[s("li",[t._v("Respons 객체 사용과 스레드 소멸")])]),t._v(" "),s("ul",[s("li",[t._v("doGet() 혹은 doPost() 메소드가 동적 페이지를 생성하면 그 결과물이 담긴 Respons 객체를\nWeb container가 웹 서버로 전송한다.")]),t._v(" "),s("li",[t._v("service() 메소드가 끝나면 HttpServletRequest와 HttpServletResponse를 소멸하고 스레드 종료")])]),t._v(" "),s("br"),t._v(" "),s("blockquote",[s("p",[t._v("여기서 WAS(Web Application Server)란 웹을 기반으로 실행되는 프로그램으로 Servlet의 life cycle을 담당한다.")])]),t._v(" "),s("h2",{attrs:{id:"servlet-life-cycle-생명주기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#servlet-life-cycle-생명주기"}},[t._v("#")]),t._v(" Servlet life cycle(생명주기)")]),t._v(" "),s("p",[t._v("어떤 객체의 생성부터 소멸까지의 과정을 life cycle라고 말한다."),s("br"),t._v("\n간단하게 "),s("code",[t._v("Servlet")]),t._v("의 생명주기가 어떻게 돌아가는지 알아보겠다.")]),t._v(" "),s("h3",{attrs:{id:"_1-init"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-init"}},[t._v("#")]),t._v(" 1. init()")]),t._v(" "),s("ul",[s("li",[t._v("최초 한번만 수행된다.")]),t._v(" "),s("li",[t._v("Servlet이 메모리에 로드될 때 호출된다.")]),t._v(" "),s("li",[t._v("Servlet이 변경될 경우 init()메소드를 재정의한다.\n"),s("ul",[s("li",[t._v("재정의하지 않은 경우 GenericServlet()의 init()이 실행된다.")])])]),t._v(" "),s("li",[t._v("클라이언트 요청을 처리하기 전 Servlet 객체를 "),s("strong",[t._v("초기화")]),t._v("하는 역할을 한다.")])]),t._v(" "),s("h3",{attrs:{id:"_2-service"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-service"}},[t._v("#")]),t._v(" 2. service()")]),t._v(" "),s("ul",[s("li",[t._v("최초 클라이언트의 요청을 받았을 때 수행된다.\n"),s("ul",[s("li",[t._v("Web container가 새로 스레드를 생성하거나 스레드 풀()로부터 가지고 올 때를 말한다.")])])]),t._v(" "),s("li",[t._v("클라이언트의 HTTP Method(GET, POST, PUT, DELETE 등)를 참조하여 적절한 메소드를 호출한다.")]),t._v(" "),s("li",[t._v("service()메소드는 따로 재정의 할 필요없이 doGet()이나 doPost()와 같은 메소드를\n재정의하면 HttpServlet의 service()메소드가 요청에 맞는 메소드를 알아서 호출한다.")])]),t._v(" "),s("h3",{attrs:{id:"_3-destroy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-destroy"}},[t._v("#")]),t._v(" 3. destroy()")]),t._v(" "),s("ul",[s("li",[t._v("마지막 한번만 수행된다.")]),t._v(" "),s("li",[t._v("Web container가 종료 요청을 할때 호출된다.")]),t._v(" "),s("li",[t._v("Servlet 객체를 메모리에서 "),s("strong",[t._v("제거")]),t._v("해주는 역할을 한다.")])]),t._v(" "),s("h2",{attrs:{id:"httpservletrequest와-httpservletresponse"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#httpservletrequest와-httpservletresponse"}},[t._v("#")]),t._v(" HttpServletRequest와 HttpServletResponse")]),t._v(" "),s("h3",{attrs:{id:"httpservletrequest"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#httpservletrequest"}},[t._v("#")]),t._v(" HttpServletRequest")]),t._v(" "),s("ul",[s("li",[t._v("Http프로토콜의 request 정보를 서블릿에게 전달하기 위한 목적으로 사용한다.")]),t._v(" "),s("li",[t._v("Header정보, Parameter, Cookie, URI, URL 등의 정보를 읽어들이는 메소드를 가진 클래스")]),t._v(" "),s("li",[t._v("Body의 Stream을 읽어들이는 메소드를 가지고 있다.")])]),t._v(" "),s("h3",{attrs:{id:"httpservletresponse"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#httpservletresponse"}},[t._v("#")]),t._v(" HttpServletResponse")]),t._v(" "),s("ul",[s("li",[t._v("Servlet은 HttpServletResponse객체에 Content Type, 응답코드, 응답 메시지등을 담아서 전송한다.")])]),t._v(" "),s("h2",{attrs:{id:"servlet-설정"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#servlet-설정"}},[t._v("#")]),t._v(" Servlet 설정")]),t._v(" "),s("h3",{attrs:{id:"xml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xml"}},[t._v("#")]),t._v(" XML")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" 서블릿 선언 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("servlet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("servlet"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HelloWorld")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("servlet"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("servlet"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("example"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("HelloWorld")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("servlet"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("servlet"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  \n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" 서블릿을 URL과 연결 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("servlet"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("mapping"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("servlet"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HelloWorld")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("servlet"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("pattern"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Home")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("pattern"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("servlet"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("mapping"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])]),s("h3",{attrs:{id:"annotation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#annotation"}},[t._v("#")]),t._v(" Annotation")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("example")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@WebServlet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/Home'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HelloWorld")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServlet")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello world!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("h2",{attrs:{id:"html-form"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#html-form"}},[t._v("#")]),t._v(" HTML Form")]),t._v(" "),s("p",[s("code",[t._v("HTML Form")]),t._v(" -> "),s("code",[t._v("Servlet")]),t._v(" -> "),s("code",[t._v("HTML Page")]),s("br"),t._v("\nHTML의 form 태그는 서버쪽으로 정보를 전달할 때 사용하는 태그이다.")]),t._v(" "),s("ul",[s("li",[t._v("input")])]),t._v(" "),s("p",[t._v("속성(type,name,value)")]),t._v(" "),s("p",[t._v("type : 태그 종류 지정"),s("br"),t._v("\nname : 태그의 이름"),s("br"),t._v("\nvalue : name에 해당하는 값")]),t._v(" "),s("ul",[s("li",[t._v("type = text")])]),t._v(" "),s("p",[t._v("사용자 입력을 받을 때 사용")]),t._v(" "),s("ul",[s("li",[t._v("type = password")])]),t._v(" "),s("p",[t._v("사용자 인터페이스(로그인 페이지 등)에서 비밀번호를 입력받을 때 사용")]),t._v(" "),s("ul",[s("li",[t._v("type = submit")])]),t._v(" "),s("p",[t._v("form내의 데이터를 전송할 때 사용")]),t._v(" "),s("ul",[s("li",[t._v("type = reset")])]),t._v(" "),s("p",[t._v("form내의 데이터를 초가화할 때 사용")]),t._v(" "),s("ul",[s("li",[t._v("type = checkbox")])]),t._v(" "),s("p",[t._v("데이터값을 여러 개 전송할 때 사용")]),t._v(" "),s("ul",[s("li",[t._v("type = radio")])]),t._v(" "),s("p",[t._v("checkbox와 달리 여러 개의 데이터 값 중 한 개의 값만을 전송할 때 사용")]),t._v(" "),s("ul",[s("li",[t._v("select")])]),t._v(" "),s("p",[t._v("리스트 형태의 데이터를 사용")]),t._v(" "),s("h3",{attrs:{id:"form-tag"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#form-tag"}},[t._v("#")]),t._v(" form tag")]),t._v(" "),s("p",[t._v("input 태그들의 값을 서버로 전송하기 위한 정보를 담고있다.")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<form action = "join" method="post">\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('GET: http://IPAdress:portNumber/Context/Path/Memberjoin?id="id"&name="john doe"\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("POST: http://IPAdress:portNumber/Context/Path/Memberjoin\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("hr"),t._v(" "),s("p",[t._v("참고 "),s("a",{attrs:{href:"https://www.edwith.org/boostcourse-web",target:"_blank",rel:"noopener noreferrer"}},[t._v("edwith - boostcourse"),s("OutboundLink")],1),s("br"),t._v("\n참고 "),s("a",{attrs:{href:"https://linuxism.ustd.ip.or.kr/1005",target:"_blank",rel:"noopener noreferrer"}},[t._v("java - Servlet"),s("OutboundLink")],1),s("br"),t._v("\n참고 "),s("a",{attrs:{href:"https://www.inflearn.com/course/%EC%8B%A4%EC%A0%84-jsp-%EA%B0%95%EC%A2%8C/dashboard",target:"_blank",rel:"noopener noreferrer"}},[t._v("t실전 jsp 강좌"),s("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=r.exports}}]);