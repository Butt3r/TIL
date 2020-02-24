JAVA(자바)란? <Badge text="song" />
=============

출신 배경
---------


자바의 역사는 최초의 탄생이였던 1991년으로 거슬러 올라간다.   

1991년, 썬 마이크로시스템즈(Sun Microsystems)사에서 일하던 제임스 고슬링은 가전제품용 소프트웨어 개발 언어를 하나 고안했다. 그 언어의 이름은 Oak로 당시엔 가전제품을 제어하는 목적으로 만들어졌지만 후에 인터넷이 보급되면서 웹 애플리케이션 개발 언어로 작은 성장을 거두었다. 그리고 1995년 5월, Oak는 이때의 성장을 발판으로 Sun World 컨퍼런스에서 Java라는 새로운 이름으로 공식적으로 세상에 발표되었고 이후 자바는 많은 사람들의 관심을 이끌었다.

> JAVA는 커피 이름을 따온게 맞다. 인터넷에 활력을 불어넣자는 의미로 지었다고 한다.

특징
----


### 1. 플랫폼에 독립적이다.   

자바는 과거의 여타 다른 네이티브 언어들과 다르게 하나의 플랫폼에 종속되어있지 않다.   

자바는 모든 플랫폼에서 실행이 가능하며 이는 Java와 플랫폼 사이에서 중재자 역할을 수행해주는 JVM(Java Virtual Machine) 가상머신이 존재하기 때문이다. Java는 모두 동일한 JVM 환경에서 돌아가며 이것이 바로 제임스 고슬링이 강조한 **”Write Once Run Anywhere”** 가 가능한 이유이다.
<br>

### 2. 객체지향 언어이다.

OOP(Object Oriented Programing)   
객체지향이란 컴퓨터 프로그래밍의 패러다임 중 하나이다.      

프로그램의 기능들을 객체화하고   
이 들을 결합하여 조립식으로 프로그램을 구축하는 것을 객체지향이라 부른다.   
자바는 이러한 객체지향 언어 중 하나로 객체지향 언어의 특징을 잘 담고있다.   

특징은 아래와 같다.   

-	캡슐화
-	상속성
-	다형성
-	추상화


::: warning
특징들은 나중에 OOP로 따로 포스팅
:::


### 3. 가비지 컬렉션

자바는 가비지 컬렉션이 자동으로 메모리를 관리해준다.   

C++과 비교했을 때, C++은 개발자가 직접 메모리에 생성된 객체를 관리하고 제거해줘야했지만 자바는 자바 스스로 동적으로 할당했던 객체들 중에서 사용이 완료된 객체들을 알아서 제거한다.   

> 즉, Heap 영역의 오브젝트 중 stack 에서 도달 불가능한 (Unreachable) 오브젝트들을 제거한다.


그렇다면 이러한 메모리 제거가 왜 필요할까?   

그 이유는 메모리 누수를 방지하기 위함이다.   
메모리는 유한하기 때문에 사용이 끝난 메모리는 반드시 해제해줘야한다.   
만약 제때에 해제하지 못하면 필요하지않은 메모리가 컴퓨터를 계속 점유하는 문제가 발생한다.   
이러한 현상을 우리는 메모리 누수(Memory Leak)라 부르며 자바의 경우 가비지 컬렉션이 메모리를 알아서 관리함으로써 잠정적인 메모리 누수(Memory Leak)문제를 해결해준다.


