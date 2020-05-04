전략 패턴이란? <Badge text="song" />
================


## 전략(Strategy) 패턴 

전략 패턴은 [행위 패턴(Behavioral)](https://refactoring.guru/design-patterns/behavioral-patterns)에 해당되는 디자인 패턴(Design Pattern)중 하나로    
유사한 비즈니스 로직들을 각각 캡슐화하여 필요할 때마다 서로 교환해서 사용할 수 있게끔 하는 패턴이다.

요약하면   

    - 동일한 게열의 알고리즘군을 **정의**하고   
    - 각 알고리즘을 **캡슐화**하며   
    - 군 내의 알고리즘들을 **상호교환**하게 만드는 것   

이 바로 전략 패턴이다.   


### 장점

- 서브클래싱을 사용하지않아 재사용이 가능   
- 유지보수가 용이함   
- 알고리즘의 변경이 가능   
- 조건문을 없앨 수 있음   


### 단점

- 객체 수가 증가함   
- 결합도를 높임   

<br>   


## UML Diagram

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FcamOYZ%2FbtqDRwOXmxN%2FXSYAlD6Tg93phZ4t4VHBo1%2Fimg.png" alt="전략패턴" height="400px" />  
<br>
<br>

starUML로 그린 전략 패턴의 클래스 다이어그램이다.   

### 역할

Context: 인스턴스를 주입받아 이용하는 역할   
interface: Strategy 사용을 위해 생성된 인터페이스로 동일한 방식으로 알고리즘을 호출   
Strategy: 인터페이스를 구현(implement)한 실제 알고리즘   


## Example





