(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{402:function(r,t,o){"use strict";o.r(t);var e=o(25),a=Object(e.a)({},(function(){var r=this,t=r.$createElement,o=r._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[o("h1",{attrs:{id:"port-forwarding이란"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#port-forwarding이란"}},[r._v("#")]),r._v(" Port forwarding이란? "),o("Badge",{attrs:{text:"song"}})],1),r._v(" "),o("blockquote",[o("p",[r._v("생활코딩 "),o("a",{attrs:{href:"https://opentutorials.org/course/3265/20038",target:"_blank",rel:"noopener noreferrer"}},[r._v("Home server"),o("OutboundLink")],1),r._v(" 수업을 듣고 정리한 자료입니다.")])]),r._v(" "),o("h2",{attrs:{id:"port"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#port"}},[r._v("#")]),r._v(" Port")]),r._v(" "),o("p",[o("code",[r._v("port")]),r._v(" 란 네트워크 서비스나 컴퓨터 내의 특정 프로세스를 구별/식별하는 '논리 단위'이다."),o("br"),r._v("\n쉽게 풀이하면 우편물을 배송할 때, 집 주소에 해당하는 것이 IP이고 받는 사람에 해당하는 것이 Port이다.")]),r._v(" "),o("h3",{attrs:{id:"well-known-port"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#well-known-port"}},[r._v("#")]),r._v(" Well-Known-Port")]),r._v(" "),o("p",[r._v("포트의 범위는 0~65535까지 있으며,"),o("br"),r._v("\n0 ~ 1023까지의 포트 번호를 잘 알려진 포트(Well-Known-Port)라 한다."),o("br"),r._v(" "),o("br")]),r._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[r._v("TIP")]),r._v(" "),o("p",[r._v("http의 포트는 80이므로 웹 서버는 기본적으로 80번 포트로 운영된다.")])]),r._v(" "),o("br"),r._v(" "),o("p",[r._v("참고 "),o("a",{attrs:{href:"https://ko.wikipedia.org/wiki/TCP/UDP%EC%9D%98_%ED%8F%AC%ED%8A%B8_%EB%AA%A9%EB%A1%9D",target:"_blank",rel:"noopener noreferrer"}},[r._v("포트 목록"),o("OutboundLink")],1)]),r._v(" "),o("h2",{attrs:{id:"port-forwarding"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#port-forwarding"}},[r._v("#")]),r._v(" Port forwarding")]),r._v(" "),o("p",[o("code",[r._v("Port forwarding")]),r._v(" 이란 특정 Port로 들어오는 패킷을 다른 Port로 바꿔서 재전송해 주는 기능이다."),o("br"),r._v("\n쉽게 풀이하면 우편부가 주소와 이름을 보고 정확한 장소로 우편을 배송할 수 있도록 하는 역할")]),r._v(" "),o("p",[r._v("예시로"),o("br"),r._v("\n사설망 C라는 PC에 웹 서버를 설치했다 가정한다. 사설IP는 지난 포스트에서 이야기했듯이 내부 네트워크라 외부 접속이 불가능하다. C가 클라이언트인 경우에는 NAT 기능을 통해 외부 네트워크로 접속이 가능했지만 반대로 C가 서버일 경우엔 NAT가 아닌 포트 포워딩을 통해야 한다.")]),r._v(" "),o("p",[r._v("포트포워딩은 여기서 외부 포트에서 내부 포트로 이동시키는 역할을 한다."),o("br"),r._v("\n사용자가 공인IP로 접속했을 때 C의 사설IP로 접속되게 게이트웨이 라우터 포트 -> 서브넷 디바이스 포트로 연결해주는 것")]),r._v(" "),o("blockquote",[o("p",[r._v("공인IP:10 -> 사설IP:80"),o("br"),r._v("\n공인IP:20 -> 사설IP:8080")])]),r._v(" "),o("p",[r._v("참고로 특정 도메인을 사용하고 있다면 공인IP가 아닌 도메인을 사용해도 무방하다.")]),r._v(" "),o("h2",{attrs:{id:"port-forwarding-설정"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#port-forwarding-설정"}},[r._v("#")]),r._v(" Port forwarding 설정")]),r._v(" "),o("p",[r._v("포트포워딩 설정은 공유기에서 이루어진다."),o("br"),r._v("\n어떤 공유기를 사용하냐에 따라 조금씩 방법이 다른데 iptime을 예로 설명하면")]),r._v(" "),o("p",[o("strong",[r._v("1. iptime 관리자 페이지에 접속한다.")])]),r._v(" "),o("p",[r._v("진입 방법은 cmd창에서 ipconfig을 치고 기본 게이트웨이 ip를 알아낸 후 해당 ip로 인터넷에 접속")]),r._v(" "),o("p",[o("strong",[r._v("2. NAT/라우터 관리 > 포트포워드 설정으로 들어간다.")])]),r._v(" "),o("p",[r._v("포트 포워드 설정에 들어가 새 규칙 추가를 클릭하고 외부포트와 내부포트를 원하는 설정에 맞게 입력")]),r._v(" "),o("p",[o("strong",[r._v("3. 마지막 확인")])]),r._v(" "),o("p",[r._v("cmd 창에 아래의 명령어를 입력하여 설정대로 됐는지 확인하거나")]),r._v(" "),o("div",{staticClass:"language- line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[r._v("netsh interface portproxy show v4tov4\n")])]),r._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[r._v("1")]),o("br")])]),o("p",[r._v("직접 "),o("a",{attrs:{href:"http://%EA%B3%B5%EC%9D%B8IP:(%ED%8F%AC%ED%8A%B8%EB%B2%88%ED%98%B8)",target:"_blank",rel:"noopener noreferrer"}},[r._v("http://공인IP:(포트번호)"),o("OutboundLink")],1),r._v(" 주소로 접속하여 포트포워딩이 됐는지 확인할 수 있다.")])])}),[],!1,null,null,null);t.default=a.exports}}]);