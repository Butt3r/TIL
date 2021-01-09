Recursion Alogrithm <Badge text="song" /><Badge text="pt2" type="warning" />
=============

Recursive thinking
------------------

재귀함수가 수학 계산에서만 쓰이는가?   
그렇지 않다.

for문 while문 등의 반복문이 쓰이는 것이라면 재귀힘수로 뭐든지 대체 가능하다.

그렇다면 어떤 예제가 있을까?   
아래의 예제를 살펴보자

## 1. 문자열의 길이 계산


```java
public class Stringlength {
    public static void main(String [] args)
    {
        String str = "hello world!";
        System.out.printf("str length is: %d",length(str));

    }
    public static int length(String str)
    {
        if(str.equals("")) // 문자열과 문자열을 비교할때는 equals를 사용해야함
        return 0;
        else
        return 1 + length(str.substring(1)); // substring은 문자열을 원하는 위치에서 잘라주는 메소드
    }
}
```

::: details 결과   
str length is: 12   
:::


## 2. 문자열의 프린트


```java
public class StringPrint {
    public static void main(String [] args)
    {
        String str = "12345!";
        PrintChars(str);

    }
    public static void PrintChars(String str)
    {
        if(str.length() == 0) // 문자열의 길이가 0이라면
            return; // 리턴
        else
        {
            System.out.print(str.charAt(0)); // 자바에서 str.charAt(0)은 문자열의 첫 글자/문자를 리턴해주는 메소드
            PrintChars(str.substring(1)); // substring(index)에서 index가 1이므로 String의 첫번째 문자를 제외한 앞문자를 자름
        }
    }
}
```


::: details 결과   
12345!     
:::

<br>


거꾸로 프린트 하는 것 역시 가능하다.



```java
public class StringPrint {
    public static void main(String [] args)
    {
        String str = "12345!";
        printCharsReverse(str);

    }
    public static void printCharsReverse(String str)
    {
        if(str.length() == 0) // 문자열의 길이가 0이라면
            return; // 리턴
        else
        {
            printCharsReverse(str.substring(1)); // 간단하게 순서를 바꿔주는 것만으로 문자열을 거꾸로 출력할 수 있다.
            System.out.print(str.charAt(0)); // 스택의 원리를 생각하면 간단하다. 
        }
    }
}
```

::: details 결과     
!54321     
:::


## 3. 배열의 합 (Linear Sum)

> data[0] ~ data[n-1]까지의

```java
public class SumArrtest {
    public static void main(String [] args)
    {
        int num = 9;
        int[] arr = new int[] { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
        System.out.println(sum(num, arr));
    }
    public static int sum(int n, int arr[])
    {
        if(n <=0)
            return 0;
        else
            return arr[n-1] + sum(n-1, arr); //data[0] ~ data[n-2]까지 계산(n이 아니라 n-1이니까 n-2) 하고 n-1을 더함
    }
}
```

::: details 결과   
45        
:::

## 4. 그 외

### 2진수로 바꾸기

```java
public static void binary(int n)
{
 if(n < 2)
{
 System.out.print(n);
}
 else
{
 binary(n/2);
 System.out.print(n%2);
			
}
	}
```

### 데이터파일로 부터 n개의 정수 읽어오기

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

## 재귀 단점

- 함수호출에 따른 오버헤드 있음
- 반복문보다 속도가 느림
- 스택오버플로우 발생 가능성 높음
