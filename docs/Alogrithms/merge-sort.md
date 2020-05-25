Merge sort <Badge text="song" />
================

## 합병 정렬이란

합병 정렬(merge sort)은 존 폰 노이만(John von Neumann)이 고안한 방법으로   
분할정복법 전략을 사용하는 정렬 알고리즘 중 하나이다. 여기서 분할정복법이란,         
<code>Divide</code> <code>Conquer</code> <code>Combine</code> 의 단계를 거쳐 주어진 문제를 작은 단위로 나누어 해결하는 전략을 말한다. 


## 합병 정렬 과정


### 1. 분할(Divide)           

 - 해결하고자 하는 문제를 **작은 크기의 동일한 문제**들로 분할      
    - list의 길이가 1을 넘을 경우, list를 **절반 크기**로 나눔   

### 2. 정복(Conquer)          

- 각각의 작은 문제를 **순환적**으로 해결 (재귀 사용)     
    -  부분 list를 **재귀**를 이용하여 정렬    

### 3. 결합(Combine)          

 - 작은 문제에 대한 해답을 **합병하여** 원래 문제에 대한 해답을 구함      
    - 정렬된 **두 개의 부분 list를 합쳐** 하나로 정렬        




## 합병 정렬 구현

#### Pseudo Code

```java
mergeSort(arr[], p, r) 
{
    
    if(p < r) then
    {
        q <- (p+r)/2; 
        mergeSort(arr, p, q); 
        mergeSort(arr. q+1. r); 
        mergeSort(arr, p, q, r); 
    }
}

merge(arr[], p, q, r)
{
    정렬되어있는 두 배열을 합하여
    정렬된 하나의 배열 arr[p...r]을 만든다.
}
```


#### JAVA

```java
public class MergeSort {

    public static int[] tmp;

    public static void main(String[] args) {

        int A[] = {5, 22, 10, 7, 23, 11, 3, 9, 14, 32};
        tmp = new int[A.length]; // 임시 배열 생성
        mergeSort(A, 0, A.length-1);
        System.out.println(Arrays.toString(A));

    }


    public static void mergeSort(int arr[], int left, int right)
    {
        // base case
        if (left == right) // list의 길이가 1이면
        return; // 리턴

        // divide (분할)
        int mid;
        mid = (left+right)/2; // 인덱스 left와 right의 중간점 찾기

        // conquer (정복)
        mergeSort(arr, left, mid); // 전반부 정렬
        mergeSort(arr, mid+1, right); // 후반부 정렬

        // combine (결합)
        merge(arr, left, mid, right);
        

    }

    public static void merge(int arr[], int left, int mid, int right)
    {

        int i=left; // 첫번째 리스트의 첫번째 요소
        int j=mid+1; // 두번째 리스트의 첫번째 요소
        int k=left; // 전체 리스트의 첫번째 요소

        // 두 정렬된 리스트 합병
        while(i<=mid && j<=right) 
        {
            if(arr[i]<=arr[j]) 
            {
                tmp[k++] = arr[i++]; 
            }
            else 
            {
                tmp[k++] = arr[j++]; 
            }
        }

        // 남은 요소들 자동 정렬
        while(i<=mid)
            tmp[k++] = arr[i++];
        while(j<=right)
            tmp[k++] = arr[j++];


        // 임시 배열에 정렬된 데이터 복사
        for(int index=left; index<k; index++)
            arr[index] = tmp[index];

    }
    

}

```

::: details 결과     
[3, 5, 7, 9, 10, 11, 14, 22, 23, 32]    
:::   


쉽게 이해가지 않을 땐 아래 참고

알고리즘을 시각화해서 보여주는 사이트   
:link: [visualgo](https://visualgo.net/en/sorting)   
합병 정렬을 춤으로 표현한 영상   
:link: [merge sort dance](https://www.youtube.com/watch?v=dENca26N6V4&feature=emb_title)


## 시간복잡도

합병 정렬은 `Θ(nlog​n)` 의 시간복잡도를 가진다.


### 분할 단계 

> `Θ(1)`   

- n이 1인 경우엔 비교 연산을 하지 않는다.
- 그렇지 않은 경우엔 입력 배열의 중간을 계산한다.  
- `Θ(1)`은 constant time을 의미하기 때문에 부분 배열에 크기와 상관없이 일정한 시간이 소요된다.     


### 정복 단계   

> `2T(n/2)`

- 정복 단계는 n/2개의 요소를 가진 부분 배열들을 재귀적으로 정렬한다.
- 왼쪽 정렬(T(n/2)) + 오른쪽 정렬(T(n/2)) 


### 결합 단계   

> `Θ(n)` 

- 호출 레벨은 자료의 수가 n개일 때 logn을 유지하게된다. (k = logn)
- 자료의 수가 16개라면 2^4므로 호출레벨은 4가 된다.
- 부분 집합들을 하나로 합치는 단계로, 최대 n번의 비교 연산이 필요하다.

  

### 복사 & 최종

> `T(n) = 0(if n == 1), 2T(n/2) + Θ(n)`

- nlogn(비교 연산) + 2nlogn(이동 연산) = O(n * log(n))




<br>


---
 
참고 [wiki](https://ko.wikipedia.org/wiki/%ED%95%A9%EB%B3%91_%EC%A0%95%EB%A0%AC)
참고 [KhanAcademy-merge-sort](https://ko.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/overview-of-merge-sort)   
참고 [합병 정렬](https://chayan-memorias.tistory.com/110)

