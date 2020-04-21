어노테이션이란? <Badge text="song" />
================


## 어노테이션(annotation)

어노테이션은 클래스나 메소드 위에 붙여 사용하는 메타데이터(Meta-Data)이다.   
JAVA 5(JEE5) 부터 새롭게 추가된 기능으로 컴파일러에게 소스 코드를 어떻게 컴파일하고 처리할지를 알려준다.   
> 메타데이터: 메타데이터는 데이터(data)에 대한 데이터로, 자신의 정보를 설명하기 위한 데이터로 정의할 수 있다.

일반적으로 어노테이션을 사용하는 형태는 아래와 같다.

```java
@Override // 오버라이드 어노테이션
public String toString() // 메소드 위에 붙여 사용하고 있다.
{
    return "hello world!";
}
```

## 어노테이션 장점

@Override와 같이 어노테이션은 흔히 상속이나 인터페이스 함수를 구현할 때 사용된다.  
흥미로운 점은 어노테이션을 쓰던 지우던 눈에 보여지는 큰 차이는 없다는 점인데 사실 그 안에 분명한 차이는 존재한다.

어노테이션은 일종의 안정장치이다.    
예로 @Override를 붙인 메소드가 부모 메소드를 제대로 오버라이드 하지 않았을 때 컴파일러는 에러를 발생시켜   
다르게 동작함을 사용자에게 알린다. 반면, 어노테이션이 붙지 않은 메소드의 경우엔 어노테이션이 제공하는   
메타데이터가 없기 때문에 잘못된 사용을 감지하지 못한다.

이외에도 어노테이션은 주석처럼 사용되어 코드를 깔끔하게 하고   
복잡한 XML을 대신하여 간편한 설정을 가능케한다.   

요악하면

- 컴파일러가 특정 오류를 억제하도록 도와줌   
- 코드의 가독성 증대   
- 개발 효율성 증대   



## 내장(built-in) 어노테이션

자바에서는 기본적으로 5개의 어노테이션을 제공한다.

### 1. @Override

- 해당 메소드가 상위 클래스에 정의된 메소드를 오버라이드 했음을 알림
- 상위 클래스 혹은 인터페이스에서 해당 메소드를 찾을 수 없을 때 컴파일 오류를 발생시킴

### 2. @Deprecated

- 해당 메소드를 사용하지 않도록 알림
- 만약 사용한다면 컴파일 경고를 발생시킴

### 3. @SuppressWarnings

- 컴파일 경고를 무시하기 위해 사용

### 4. @SafeVarargs

- 제너릭과 같은 가변인자 매개변수가 안전하게 사용되고 있음을 알림(JAVA 7 이상)

### 5. @FunctionalInterface

- 람다 함수등을 위한 인터페이스를 지정함
- 메소드가 없거나 두개 이상이 되면 컴파일 오류를 발생시킴(JAVA 8 이상)



## 커스텀(custom) 어노테이션
> 커스텀 어노테이션은 자바 중급 강의를 참고했습니다.

내장된 어노테이션 이외에도 사용자가 직접 원하는 형태의 어노테이션을 만들 수 있다.
커스텀 어노테이션을 사용하는 방법은 아래와 같다.

1. 어노테이션을 정의한다.
2. 어노테이션을 클래스에서 사용한다. (타겟에 적용)
3. 어노테이션을 이용하여 실행한다.


### 어노테이션 생성

어노테이션을 만들기 위해   
첫번째로, interface 키워드 앞에 @를 붙여 annotaiton interface를 선언한다.

```java
public @interface TestAnnotation // @interface 어노테이션명
{
    String value();
}
```

그 다음 두번째로, PrintAnnotaion이 JVM(Java Virtual Machine) 실행 시에 감지할 수 있게   
@Retention(RetentionPolicy.RUNTIME)을 붙여준다.


```java
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

@Retention(RetentionPolicy.RUNTIME) // 실행 시에 reflection으로 접근 가능
public @interface TestAnnotation
{
    String value();
}
```

아주 기본적인 형태의 어노테이션이 생성됐다.
이렇게 만들어진 어노테이션은 아래와 같이 default값을 할당할 수 있다.

```java
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

@Retention(RetentionPolicy.RUNTIME) 
public @interface TestAnnotation
{
    String value() default "nothing";
    int num() default 3;
}
```


### 어노테이션 사용

정의한 어노테이션은 메소드 위에 붙여 사용한다.
"do something"을 출력하는 doing() 메소드를 만들어 그 위에 @PrintAnnotation을 붙인다.

```java
public class Mytest {

    @TestAnnotaion // default값을 할당했기 때문에 기본값인 "nothing"과 3이 출력된다.
    public void doing()
    {
        System.out.println("do nothing");
    }

    @TestAnnotaion("hello") // value값에 "hello"가 들어가 "hello"와 3이 출력된다.
    public void doing2()
    {
        System.out.println("do greeting");
    }

    @TestAnnotaion(num = 10) // num값에 10이 들어가 "nothing"과 10이 출력된다.
    public void doing3()
    {
        System.out.println("do counting");
    }

    @TestAnnotaion(value = "knock", num = 10) // value값에 "knock"이 num 값에 10이 들어가 "knock"과 10이 출력된다.
    public void doing4()
    {
        System.out.println("do knocking");
    }

}
```

### 어노테이션 실행

위 코드에 쓰여진대로 실행하기 위해 Mytest를 이용하는 MytestExam 클래스를 작성한다.

```java
import java.lang.reflect.Method;

public class MytestExam {
    public static void main(String[] args) {
        Mytest test = new Mytest();

    try {
        Method method[] = test.getClass().getDeclaredMethods();
        for (int i = 0; i < method.length; i++) {
            System.out.println(method[i].getName());
        if (method[i].isAnnotationPresent(TestAnnotaion.class)) {
            TestAnnotaion testAnnotaion = method[i].getAnnotation(TestAnnotaion.class);
            System.out.println("value: " + testAnnotaion.value());
            System.out.println("num: " + testAnnotaion.num());

            }
            System.out.println();
            }

        } catch (SecurityException e) {
            e.printStackTrace();
        }
    }
}
```

::: details 결과  
doing   
value: nothing   
num: 3   

doing2   
value: hello   
num: 3   

doing3   
value: nothing   
num: 10   

doing4   
value: knock   
num: 10    
:::


---
참고[자바 중금 - 어노테이션](https://programmers.co.kr/learn/courses/9/lessons/269)
참고[Annotaiaon value - stackoverflow](https://stackoverflow.com/questions/10682935/get-annotation-value)
참고[Annotation과 Reflection이란?](https://qssdev.tistory.com/27)