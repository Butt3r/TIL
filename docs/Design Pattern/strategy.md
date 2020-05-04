전략 패턴이란? <Badge text="song" />
================


## 전략(Strategy) 패턴 

전략 패턴은 [행위 패턴(Behavioral)](https://refactoring.guru/design-patterns/behavioral-patterns)에 해당되는 디자인 패턴(Design Pattern)중 하나로    
유사한 비즈니스 로직들을 각각 캡슐화하여 필요할 때마다 서로 교환해서 사용할 수 있게끔 하는 패턴이다.

즉, 동일한 계열의 알고리즘군을 **정의**하고   
각 알고리즘을 **캡슐화**하며   
군 내의 알고리즘들을 **상호교환**하게 만드는 것이 바로 전략 패턴이다.      


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

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FdavNtU%2FbtqDVdGYBTO%2F4T2W9pkoVLjQtWY1ZCAmc1%2Fimg.png" alt="전략패턴" height="500px" />  
<br>   

starUML로 그린 전략 패턴의 클래스 다이어그램이다.   
<br>

### 역할

Context: 인스턴스를 주입받아 이용하는 역할   
interface: Strategy 사용을 위해 생성된 인터페이스로 동일한 방식으로 알고리즘을 호출   
Strategy: 인터페이스를 구현(implement)한 실제 알고리즘   


## Example

게임 회사에서 RPG 게임을 개발한다 가정하고 마법사 캐릭터를 구현해보겠다.


<br> 
<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FeeMESB%2FbtqDTjg7cPn%2FPnS5hNvlsUK0KeyxrA7lW0%2Fimg.png" alt="전략패턴" height="500px" />  
<br>  



> Spell.interface
```java
package strategy;

// 마법 주문에 관한 Spell 인터페이스 정의
public interface Spell {
    void doMagic();
}
```

> FiraBall.java
```java
package strategy;

//spell 인터페이스를 구현한 전략
public class FireBall implements Spell {
    @Override
    public void doMagic() {
        System.out.println("Fireball Attack!!");
    }
}
```

> WaterBall.java
```java
package strategy;

//spell 인터페이스를 구현한 전략
public class WaterBall implements Spell{
    @Override
    public void doMagic() {
        System.out.println("WaterBall Attack!!");
    }
}
```

> Heal.java
```java
package strategy;

//spell 인터페이스를 구현한 전략
public class Heal implements Spell {
    @Override
    public void doMagic() {
        System.out.println("Energy Healing...");
    }
}
```

> MyCharacter.java
```java
package strategy;

// 전략을 사용하는 컨텍스트
public class MyCharacter {

    private Spell spell;
    private boolean bCanUseSkill;

    public void setSpell(Spell spell) { this.spell = spell;}

    public void doMagic()
    {
        if(!(spell == null)) { bCanUseSkill = true;}

        if (!bCanUseSkill) { System.out.println("Mana is not enough" + "\n" + "GAME OVER...");}
        else {spell.doMagic();}

    }

}
```



> Client.java
```java
package strategy;

// 전략을 선택해 컨텍스트에게 주입시키는 클라이언트
public class Client {
    public static void main(String[] args) {
        MyCharacter character = new MyCharacter();

        System.out.println("fight!");
        System.out.println();

        //do nothing
        character.doMagic();
        System.out.println();

        //do fireball attack
        character.setSpell(new FireBall());
        character.doMagic();
        System.out.println();

        //do waterball attack
        character.setSpell(new WaterBall());
        character.doMagic();
        System.out.println();

        //do energy healing
        character.setSpell(new Heal());
        character.doMagic();
        System.out.println();
    }
}
```

::: details 결과        
fight!   

Mana is not enough   
GAME OVER...   

Fireball Attack!!   

WaterBall Attack!!   

Energy Healing...     
:::      




