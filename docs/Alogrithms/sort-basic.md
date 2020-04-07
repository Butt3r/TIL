정렬(sort) <Badge text="song" />
================================

> n개의 숫자를 사용자가 지정한 기준으로 순서대로 정렬하는 알고리즘

### 정렬 알고리즘 요약

간단하지만 느림  
- bubble  
- insertion  
- selection

복잡하지만 빠름  
- quick  
- merge - heap

비교하지않고 정렬을 함 - radix (o(n))<br>

### 기본적인 정렬 알고리즘

1. Selection Sort (선택 정렬)
-----------------------------

수도코드

```java
slesction(arr[], n)
{
for(last <- n down to 2)
{
find arr[1...last] 중 가장 큰 수 arr[k]를 찾는다;
swap arr[k] <--> arr[last]; //arr[k]와 arr[last]의 값을 교환
}
}
```

<br>

자바로 구현한 코드 (최대값)

```java
public class Selection {


    public static void swap(int arr[], int a, int b)
    {
        int temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }


    public static void selectionSort(int[] arr, int n) {

      // n 대신에 arr.length를 써도 가능하다. 수도 코드와 비슷하게 할려고 매개변수를 사용

        for (int i = n-1; i > 0; i--) { // n-1을 하는 이유는 마지막 숫자는 자동으로 정렬되기 때문에
            int MaxIndex = 0;
            for(int j = 1; j <= i; j++) {
                if (arr[j] > arr[MaxIndex]) // 더 큰 값을 발견하면
                    MaxIndex = j; // 저장
                    swap(arr, MaxIndex, i); // 마지막 요소와 최대값의 위치를 바꿔준다

        }
    }
}

    public static void main(String[] args) {

        int[] A = {1, 2, 10, 5, 30, 27, 19, 36, 21, 13};
        int maxSize = 10;
        selectionSort(A, maxSize);
        System.out.println(Arrays.toString(A));
    }

}
```

(최소값)

```java

    public static void selectionSort(int[] arr) {

        int len = arr.length; // 배열의 길이

        for (int i = 0; i < len; i++) {
            int MinIndex = i; // 최소값을 배열의 첫번째 요소라 가정함
            for(int j = i + 1; j < len; j++) {
                if (arr[j] < arr[MinIndex]) // 더 작은 값을 발견하면
                  MinIndex = j; // 저장
                   swap(arr, MinIndex, i); // 첫번째 요소와 최소값의 위치를 바꿔준다

        }
    }
}

```

::: details 결과  
[1, 2, 5, 10, 13, 19, 21, 27, 30, 36]  
:::

시간복잡도는 큰 수를 찾기위한 비교횟수의 전체합과 같다.  
(n-1) + (n-2) + … + 2 + 1 = n(n-1)/2 = O(n^2)

<br>  
&nbsp;<img src="https://www.globalsoftwaresupport.com/wp-content/uploads/2019/09/ezgif.com-video-to-gif-12.gif" alt="선택정렬" height="90px" />  
<br>

2. bubble Sort (거품 정렬)
--------------------------

수도코드

```java
bubble(arr[], n)
{
for(last <- n down to 2)
{
for(i <- 1 to last-1)
if(arr[i]>arr[i+1]) then swap arr[i] <-> arr[i+1]; // arr[i] 바로 옆에 있는 값과 교환
}
}
```

<br>

자바로 구현한 코드

```java
public static void bubbleSort(int[] arr, int n) {

        for (int i = n-1; i > 0; i--) { // 버블정렬은 선택 정렬과 기본 개념이 유사하다
            for(int j = 0; j < i; j++) {
                if (arr[j] > arr[j+1]) { // 오른쪽에 있는 요소가 왼쪽에 있는 요소보다 작다면
                    swap(arr, j, j+1); // 둘의 위치를 바꿔준다

              }
        }
    }
}
```

::: details 결과  
[1, 2, 5, 10, 13, 19, 21, 27, 30, 36]  
:::

selection sort와 같이 최악, 최고, 평균과 상관없이 시간복잡도는 같다.  
(n-1) + (n-2) + … + 2 + 1 = n(n-1)/2 = O(n^2)

<br>  
<img src="https://www.globalsoftwaresupport.com/wp-content/uploads/2012/07/bubble_gif.gif" alt="버블정렬" height="150px" />  
<br>

3. insertion Sort (삽입 정렬)
-----------------------------

수도코드

```java
insertion(arr[], n)
{
  for(i <- 2 to n)
  {
  arr[1...i]의 적당한 자리에 arr[i]를 삽입한다.
}
}
```

<br>

자바로 구현한 코드

```java
public static void insertionSort(int[] arr, int n) {


        for (int i = 1; i < n; i++) {
            int key = arr[i]; // 삽입 요소를 key 변수에 저장
            int j = i-1; // i-1번까지 역순으로 탐색
            while(j >= 0 && arr[j] > key ){ // j값이 음수가 아니고 key가 왼쪽에 있는 요소보다 작다면
               arr[j + 1] = arr[j]; // 오른쪽으로 한 칸 움직임
               j--; // 반복
           }
               arr[j+1] = key; // key가 왼쪽에 있는 요소보다 크면 그 자리에 삽입

        }
    }
```

::: details 결과  
[1, 2, 5, 10, 13, 19, 21, 27, 30, 36]  
:::

최악의 경우 i-1번까지 비교하게되어 (n-1) + (n-2) + … + 2 + 1 = n(n-1)/2 = O(n^2)  
평균적으로는 셀렉션이나 버블보다 절반정도의 시간복잡도를 가짐  
최선의 경우 O(n)

<br>  
<img src="https://www.globalsoftwaresupport.com/wp-content/uploads/2017/02/ezgif.com-video-to-gif-13-1.gif" alt="선택정렬" height="200px" />  
<br>

---

[이미지 참고](https://www.globalsoftwaresupport.com/sorting-algorithms-fundamentals)
