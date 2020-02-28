Recursive - 2
=============

Recursive thinking
------------------

재귀함수가 수학 계산에서만 쓰이는가?   
그렇지 않다.

for문 while문 등의 반복문이 쓰이는 것이라면 재귀힘수로 뭐든지 대체 가능하다.

그렇다면 어떤 예제가 있을까?   
아래의 예제를 살펴보자

문자열의 길이 계산
------------------



```java
public static int length(String str)
{
if(str.equals("")) // 문자열과 문자열을 비교할때는 equals를 사용해야함
return 0;
else
return 1 + length(str.substring(1)) // substring은 문자열을 원하는 위치에서 잘라주는 메소드
} // 맨 앞 1번째 문자를 제외한 나머지 문자열
```

문자열의 프린트
---------------



```java
public static void pringChars(String str)
{
if(str.length() == 0) // 문자열의 길이가 0이라면
return; // 리턴
else
{
System.out.print(str.charAt(0)); // 자바에서 str.charAt(0)은 문자열의 첫 글자/문자를 리턴해주는 메소드
printChars(str.substring(1));
}
}
```

거꾸로 프린트 하는 것 역시 가능하다.

```java
public static void printCharsReverse(String str)
{
if(str.length() == 0) // 문자열의 길이가 0이라면
return; // 리턴
else
{
printCharsReverse(str.substring(1));
System.out.print(str.charAt(0));
}
}
```

배열의 합 (Linear Sum (순차합))
-------------------------------



> data[0] ~ data[n-1]까지의

```java
public static int sum(int n, int [] data)
{
if(n <=0)
return 0;
else
return sum(n-1, data) + data[n-1]; //data[0] ~ data[n-2]까지 계산(n이 아니라 n-1이니까 n-2) 하고 n-1을 더함
}
```

[참고](https://ledgku.tistory.com/64)

데이터파일로 부터 n개의 정수 읽어오기(잘 쓰지않음)
--------------------------------------------------


> scanner input이 참조하는 파일로부터 n개의 정수를 입력받아 배열 data의 data[0]~data[n-1]에 저장한다.

```java
public void readFrom(int n, int [] data, Scanner input)
{
if(n==0)
return;
else
{
readFrom(n-1, data, input); // data[0]~data[n-2]에 저장한 후
data[n-1] = in.nextInt(); //마지막 입력을 n-1에 저장
}
}
```

재귀 단점
---------


함수호출에 따른 오버해드 있음 (속도 면에서 손해볼 수 있음)
