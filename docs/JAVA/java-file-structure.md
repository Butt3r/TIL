자바의 기본 구조 <Badge text="song" />
================

본격적으로 자바 문법을 공부하기에 앞서  
자바 프로그램의 기본 구조는 어떻게 이루어지는지 살펴보겠다.

## 1. 구성 요소

Hello java!를 출력하는 예제이다.

```java
class Test // 클래스
{ 
    public static void main (String[] args) // 메인메소드
    {
        System.out.println("Hello java!"); 
        // Hello java! 를 화면에 출력하는 프린트메소드
    }

}       
```

::: details 결과     
Hello java!   
:::   

이 예제는 아주 짧은 코드로 이루어졌지만 충실하게 아래의 기본 구조를 갖추고있다.   

- 한 개 이상의 클래스(class)
- 자바 프로그램을 실행하기 위한 **시작 메소드**(메인메소드)
- 메소드(method)라는 **특정한 기능을 구현**하는 함수

모든 자바 프로그램들은 코드의 길이가 길던 짧던 클래스 단위로 시작한다는 점을 기억해야한다.


## 2. Public 클래스

다른 언어들이 그러하듯 자바 역시 몇가지 규칙들이 존재한다.

먼저 아래 예제를 보자

```java
class A 
{

}
public class B
{

}
class C
{

}
class D
{

}

// 파일명은 Test.java 이다.
```

컴파일 결과는 어떨까? 아마 대부분이 예상했듯이 컴파일 에러가 뜰것이다.

::: danger    
error: class B is public should be declared in a file named B.java      
:::      

에러 메세지는 파일명과 클래스 이름이 다르니 소스 파일명을 B.java 로 바꾸라 말하고있다.       
그 이유는 위 코드가 **public 클래스는 프로그램 파일명과 동일해야한다는 규칙**에 위반됐기 때문이다.

```java
class A 
{

}
public class B
{

}
public class C
{

}
class D
{

}

// 파일명은 B.java 이다.
```

그럼 이건 어떨까?   
에러났던 부분을 수정해 파일명을 public 클래스와 동일하게 바꾸었다. 문제가 없을까?   
이것 역시 아래와 같은 컴파일 에러가 뜬다.

::: danger   
error: class C is public should be declared in a file named C.java   
:::     


그 이유는 public 접근 지정자는 오로지 **파일명과 동일한 클래스** 앞에만 붙이는게 가능하며
자바 프로그램은 단 하나의 public 클래스만 가질 수 있기 때문이다.


요약하면

1. 프로그램 파일명의 확장자는 **.java** 여야 한다.
2. 첫 클래스명은 **프로그램 파일명과 동일**해야하며 대소문자를 구분한다.
3. 첫 클래스명은 대문자로 시작하는게 일반적이다.
4. 프로그램 파일명과 동일한 클래스 앞에만 **public 접근 지정자를 붙일 수 있다.**


## 3. Explicit import & implicit import

ArrayList를 사용한다 가정하겠다.

```java
class Test
{
    public void main (String [] args)
    {
        ArrayList<String> L = new ArrayList<>();
    }
}
```

위 코드 그대로 컴파일을 하면 어떻게될까?
아마 대략 이런 에러가 뜰 것이다.   

::: danger    
error: cannot find symbol symbol: class ArrayList      
:::     

cannot find symbol은 해당 클래스를 찾지 못했다는 뜻으로 ArrayList 클래스가 프로그램에 포함되어있지 않아 생긴 에러이다.
해결 방법은 컴파일러에게 ArrayList 클래스가 존재하는 경로를 명시해주면 된다.

한번 수정해보자    

```java
class Test
{
    public void main (String [] args)
    {
        java.util.ArrayList<String> L = new java.util.ArrayList<>();
    }
}
```

분명 컴파일 에러는 생기지 않겠지만

```java
class Test
{
    public void main (String [] args)
    {
        java.util.ArrayList<String> L = new java.util.ArrayList<>();
        java.util.ArrayList<String> L1 = new java.util.ArrayList<>();
        java.util.ArrayList<String> L2 = new java.util.ArrayList<>();
        java.util.ArrayList<String> L3 = new java.util.ArrayList<>();
        ...
    }
}
```
이렇게 여러군데에서 클래스가 사용되는 경우 효율이 떨어지게된다.


다행히 코드 내에서 사용되는 패키지명을 생략할 수 있는 방법이 있다.   
바로 import문으로 외부에 존재하는 클래스를 단 한번의 명시로 사용할 수 있게 한다.

패키지가 아직 뭔지 모른다면
참고 [java-package](http://www.incodom.kr/Java/Package)

### implicit import (암시적 임포트)

아래의 import문을 보자   
```java
import java.util.*; // import 패키지명.*;
```
이러한 import문은 implicit import라 불리며 java.util에 속한 모든 클래스를 참조한다.   
사용해야하는 클래스의 수가 많을시엔 유용하지만 반대로 수가 적다면 추천하지않는 방법이다.

자세한건 참고 [import](https://help.semmle.com/wiki/display/JAVA/Implicit+import)

추가로 이렇게 사용하지않게 주의하자   

```java
import java.*; // 잘못된 선언
```
구분지정자 dot(.)을 사용하는 것이 하위 패키지의 클래스까지 포함한다는 뜻은 아니다.


### Explicit import (명시적 임포트)

```java
import java.util.ArrayList; // import 패키지명.클래스명*;
```
위 import문은 Explicit import라 불리며 implicit import랑은 다르게 필요한 해당 클래스만을 참조한다.   
사용해야하는 클래스의 수가 적을 때 추천한다.


최종 코드

```java
// import java.util.*;
import java.util.ArrayList; // 이 경우엔 명시적으로 하는걸 더 권장한다.

class Test
{
    public void main (String [] args)
    {
        ArrayList<String> L = new ArrayList<>();
    }
}
```

요약하면

1. 외부 클래스를 써야한다면 **import문**을 사용한다.
2. implicit import문은 **import 패키지명.*;** 을 따라 명시한다.
3. Explicit import문은 **import 패키지명.클래스명;** 을 따라 명시한다.
4. import문은 몇개든 사용 가능하다.
5. import문의 위치는 패키지 아래 클래스 위 이다.


## 4. java.lang 

java.lang 패키지는 별다른 import문 없이도 자동으로 import되는 기본패키지이다.   
기본 패키지에 포함된 클래스는 따로 명시하지 않아도 최상위 클래스가 된다.

### java.lang 에 포함된 클래스들

- String
- StringBuffer
- Thread
- Class
- Wrapper
- System
- Stream

등등 더 많은 클래스를 포함하고있다.

자세한건 참고 [java.lang](https://docs.oracle.com/javase/7/docs/api/java/lang/package-summary.html)


## 5. Compile & Run

### cmd로 컴파일하는 방법

```cmd
$ javac Test.java
```

컴파일 후 Test.class 가 생성된다.

### 실행 방법

```cmd
$ java Test
```
<br>
---
참고 [Durga Software Solutions](https://www.youtube.com/watch?v=DaAJIMakWKU&list=PLd3UqWTnYXOkwluXExifmJWKkvGa1ywWp&index=1)