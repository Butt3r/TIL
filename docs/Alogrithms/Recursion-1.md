Recursion - 1 <Badge text="song" />
=========

> 자기자신을 호출하는 함수


순환의 개념
-----------

Recursion이란 순환을 의미하고 Recursion 함수라함은 재귀함수를 말한다.   

#### Recursion 예제

```Java
public class Recursion {
  public static void main(String [] args) {
  func();
  }

  public static void func() {
    System.out.println("hello world!");
    func();
  }
}
```

::: detalis 결과   
hello world!  
hello world!  
.  
.  
.  
:::

컴파일 결과를 통해 재귀함수는 무한 루프에 빠진다는 점을 알 수 있다. 
즉, 재귀함수란 **항상 자기자신을 호출하는 함수의 형태** 이다. 


무한루프를 막는 방법
--------------------


```Java
public class Recursion {
  public static void main(String [] args) {

    int num = 5;
    func(num);
  }

  public static void func(int n) {
    if (n <= 0) return;
    else
    {
    System.out.println("hello world!");
    func(n-1);
    }
  }
}
```

::: detalis 결과   
hello world!  
hello world!  
hello world!  
hello world!   
hello world!  
:::

이번 예제에서는
더 이상 무한루프에 빠지지않고  
오로지 다섯번만 출력됨을 확인할 수 있다.

어떻게 가능하느냐  
 - base case :if문으로 Recursion에 빠지지 않는 경우를 만듦  
 - recursive case: Recursion을 반복했을 때 base case로 수렴하게함     

그럼 재귀함수는 어떤 상황에서 쓰이는가?

재귀함수로 가능한 것 대표적인 세가지
------------------------------------


1.	0부터 n까지의 합

```Java
public class Recursion {
    public static void main(String [] args) {
int num = 5;
int sum = func(num);
System.out.println("sum result: " + sum);
}
public static int func(int n) { // 0부터 n까지의 합을 구하는 함수
  if (n == 0) return 0; // n이 0과 같으면 0으로 리턴
  else
  return n + func(n-1); // n이 0보다 크면 0에서 n-1까지의 합에 n을 더함
}
}
```

::: detalis 결과   
15  
:::

2.	Factorial

```Java
public class Factorial {
  public static void main(String [] args) {
    int sum = clac(5);
    System.out.println("factorial result: " + sum);
  }
public static int clac(int n) { // n의 팩토리얼 값을 구하는 함수
  if (n==0) return 1; // n이 0이면 1로 리턴 (0팩토리얼은 1이기 때문)
  else
  return n*clac(n-1); // n이 0보다 크면 n!을 계산
}
}
```

::: detalis 결과   
120   
:::

3.	Fibonacci 


```Java
public class Fibonacci {
  public static void main(String [] args) {
    int sum = clac(10);
    System.out.println("fibonacci result: " + sum);
  }
  public static int clac(int n){
  if (n<2) return n; // f0 = 0이고 f1 = 1 이기 때문에 n이 2보다 작은 수 1혹은 0이면 그에 맞게 반환하게
  else
  return clac(n-1) + clac(n-2); //n이 2보다 크면 fn = fn -1 + fn -2를 계산한다.
}
}
```

::: detalis 결과    
55   
:::

4.	그 외 

### x의 n승 구하기

```Java
public static double power (double x, int n) {
  if (n==0) return 1; // n이 0이면 1로 리턴 (x의 0승은 1이기 때문)
  else
  return x*power(x, n-1); // n이 0보다 크면 x의 n승을 계산
}
```

### 최대공약수 구하기 (유클리드 호제법)

```Java
public static double gcd(int m, int n){
  if(m<n){ // 보통 m을 큰 수라 정하는데 만약 n이 더 클 경우 m과 n을 swap한다
    int temp = m;
    m = n;
    n = temp;
  }
  if (m%n == 0) return n; // m이 n으로 나누어 떨어지면 최대공약수는 n
  else
  return gcd(n-m, m); // m이 n으로 나누어 떨어지지 않는다면 m에 m-n을 대입하여 나온 값이 최대공약수
}
```

### 더 최적화한 최대공약수 구하기

> 불필요한 swqp을 없앰

```Java
public static int gcd(int p, int q){
  if(q==0) return p; // p가 q보다 큰 값이 들어왔을 경우 p%q = p이므로 자동으로 gcd(q,p)를 호출하게끔
  else
  return gcd(q, p%q); // q가 0보다 크면 p를 q로 나눈 나머지가 최대공약수
}
```
