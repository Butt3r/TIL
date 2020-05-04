전략 패턴이란? <Badge text="song" />
================


## 전략(Strategy) 패턴 

전략 패턴은 [행위 패턴(Behavioral)](https://refactoring.guru/design-patterns/behavioral-patterns)에 해당되는 디자인 패턴(Design Pattern)중 하나로    
유사한 비즈니스 로직들을 각각 캡슐화하여 필요할 때 마다 서로 교환해서 사용할 수 있게끔 하는 패턴이다.

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



## UML Diagram

<br>
<img src="https://i2.wp.com/www.e4developer.com/wp-content/uploads/2018/10/strategy-pattern.png?w=669&ssl=1" alt="Strategy pattern" height="400px" />  
<br>
<br>


## Example





