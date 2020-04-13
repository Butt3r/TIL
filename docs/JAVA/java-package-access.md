자바의 기본 구조 - 2 <Badge text="song" />
================

[[toc]]


## 패키지(pakage)란?

자바에서 패키지란 비슷한 성격의 클래스나 인터페이스들을 모아 구성한 자바의 디렉토리이다.   
컴퓨터 파일을 정리할 때 폴더를 만들어 분류했던 걸 연상해보면 이해하기 쉽다.

패키지는 큰 규모의 프로젝트에서 클래스들이 늘어남에따라 효율적인 관리를 위해 고안됐다. 
서로 다른 그룹에 속한 클래스간의 이름 충돌을 사전에 방지하고, 패키지 단위로 접근 권한을 제어하기 위함이다.


## 패키지 정의와 구성

패키지는 계층적 구조(디렉토리 구조)로 만들어지기 때문에 패키지를 정의할 때 구분자(.)를 이용해서 역순으로 폴더명을 배열한다.

```   
package 폴더명.폴더명.폴더명;   
```   

일반적으로는 소문자로 도메인 이름을 거꾸로 적거나 프로젝트명이나 회사명을 사용한다.
권장하는 방법은 도메인을 역순으로 적는 것이다.

```java
package com.example.test; // good   
```     

주의할 점

1. 폴더명의 시작을 숫자로 쓰지않는다. 숫자는 첫 글자로 허용되지않는다.

```java
package 123.example.test; // wrong!   
```   
2. 폴더명의 시작을 java로 하지않는다.

```java
package java.test; // wrong!   
```   

3. 하나의 소스 코드에서 여러개를 패키지를 선언하지않는다.

```java
package com.example.test;
package com.example.test2; // wrong!
package com.example.test3;
``` 


> 여담으로 Spring과 같은 자바 프레임워크에서도 처음 프로젝트를 구성할 때 groupid(프로젝트 식별자)에 패키지 네이밍룰을 사용한다.


## 패키지 사용법

패지키를 사용하는 법은 이 전 포스팅 [자바의 기본 구조](https://butt3r.github.io/TIL/JAVA/java-file-structure.html#_3-explicit-import-implicit-import)에서 자세하게 다루고있다.

다시한번 간단하게 설명하겠다.
패지키가 필요한 경우는 대부분 프로젝트 내부가 아닌 외부에 존재하는 클래스를 사용하기 위해서이다.
예로 date 클래스가 필요하다 가정해보자
date 클래스는 내부에 존재하지 않기 때문에 아래와 같이 import문으로 해당 클래스를 프로젝트에 포함시켜야한다.

```java
import java.util.date; //import 패키지명.패키지명.클래스명
```

이렇게 improt문을 사용함으로써 컴파일러에게 date 클래스를 사용하겠다고 알릴 수 있다.


## 접근제어자(access modifier)란?

접근제어자란 말 그대로 클래스의 멤버인 변수나 메소드의 접근 가능 여부를 나타내는 것이다.   
자바는 접근제어자를 객체지향프로그램에서의 캡슐화를 지원하기 위해 제공하였고 그 결과 은닉이 필요한
데이터를 효과적으로 보호하고 보안의 취약점을 미리 예방할 수 있게됐다.

자바엔 총 4가지의 접근 제어자가 존재한다.
하나씩 살펴보도록하자

## 1. public

일반적으로 영어에서 public은 공공이란 뜻을 지니고 있다.   
자바에서의 의미 또한 크게 다르지않은데, public 접근제어자가 붙었다는 것은     
어떤 클래스에서라도 접근이 가능하다는 뜻이기 때문이다.

아래 예제를 보자

```java
package pak2;

public class PublicModifier
{
    public void pMethod()
    {
        System.out.println("public method is called");
    }
}
```

```java
package pak;

import pak2.PublicModifier;

public class callingMethod
{
    public static void main(String [] args)
    {
        PublicModifier pb = new PublicModifier();
       
        pb.pMethod();
    }
}
```

::: details 결과        
public method is called      
:::      

결과를 통해 다른 클래스에서의 public클래스 접근이 가능함을 알 수 있다.


## 2. private

private은 이름으로 유추 가능하듯 public보다 좀 더 비밀스럽다.
그래서 private은 모든 클래스가 아닌 private과 같은 동일한 클래스 내에서만 접근이 가능하다.

```java
package pak2;

public class PrivateModifier
{

        private void pMethod()
        {
            System.out.println("private method is called");
        }

}

```

```java
package pak;

import pak2.PrivateModifier;

public class callingMethod
{
    public static void main(String [] args)
    {
        PrivateModifier pv = new PrivateModifier();

        pv.pMethod();
    }
}

```

::: danger         
Error:(11, 11) java: pMethod() has private access in pak2.PrivateModifier   
:::      

public과 다르게 에러가 뜬 것을 확인할 수 있다.
private은 오로지! 동일 클래스에서만 접근이 가능하다.

## 3. protected

protected는 일반적인 경우에서는 포지션이 살짝 애매하다 느낄 수 있지만 추상클래스와 상속에서는 진가를 발휘한다.
protected는 자식클래스(child class)가 변경될 것을 고려하여 만들어진 modifier이다.
따라서 동일한 패지키내의 클래스와 자신을 상속하는 자식 클래스에서만 접근이 가능하다.

자세한 사용법은 상속을 다룰 때 포스팅 하겠다.


## 4. default

default는 별다른 키워드 없이 자동으로 설정되는 접근제어자다.
default는 동일 클래스와 같은 패키지안에서 접근이 가능하다.
아래 예제를 보자

```java
package pak2;

public class DefaultModifier
{

        void dMethod() // 접근제어자 키워드가 없을 경우 자동으로 default가 된다.
        {
            System.out.println("default method is called");
        }

}
```

```java
package pak;

import pak2.DefaultModifier;

public class callingMethod
{
    public static void main(String [] args)
    {
        DefaultModifier df = new DefaultModifier();

        df.dMethod();
    }
}

```

::: danger    
Error:(11, 11) java: dMethod() is not public in pak2.DefaultModifier; cannot be accessed from outside package   
:::   

서로 다른 패키지에 존재하기 때문에 에러가 뜬다.


## 요약

접근권한   

```
private < default < protected < public
```

| 접근제어자     | 동일 클래스    | 동일 패키지    | 상속받은 클래스  | 그 외(import)   |
| ------------- |:-------------:|:-------------:|:---------------:|:---------------:|
| public        |       ○       |       ○       |       ○         |       ○         |
| protected     |       ○       |       ○       |       ○         |       X         |
| default       |       ○       |       ○       |       X         |       X         |
| private       |       ○       |       X       |       X         |       X         |


