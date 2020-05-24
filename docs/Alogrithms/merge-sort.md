Merge sort <Badge text="song" />
================

## 합병 정렬이란

합병 정렬(merge sort)은 존 폰 노이만(John von Neumann)이 고안한 방법으로   
분할정복법 전략을 사용하는 정렬 알고리즘 중 하나이다.   
여기서 분할정복법이란 <code>Divide</code> <code>Conquer</code> <code>Combine</code> 의 단계를 거쳐 주어진 문제를 작은 단위로 나누어 해결하는 전략을 말한다. 


#### 1. 분할(Divide)     

해결하고자 하는 문제를 **작은 크기의 동일한 문제**들로 분할 

#### 2. 정복(Conquer)   

각각의 작은 문제를 **순환적**으로 해결 (재귀 사용)

#### 3. 결합(Combine)    

작은 문제에 대한 해답을 **합하여** 원래 문제에 대한 해답을 구함 


## 합병 정렬 구현

수도코드

```
mergeSort(arr[], p, r) // arr[p...r]을 정렬함
{
    if(p < r) then
    {
        q <- (p+q)/2; // p, q의 중간 지점 계산
        mergeSort(arr, p, q); // 전반부 정렬
        mergeSort(arr. q+1. r); // 후반부 정렬
        mergeSort(arr, p, q, r); // 합병
    }
}

merge(arr[], p, q, r)
{
    정렬되어있는 두 배열을 합하여
    정렬된 하나의 배열 arr[p...r]을 만든다.
}
```


자바로 구현한 코드

```java
public class MergeSort {

    public static int[] tmp;

    public static void main(String[] args) {

        int A[] = {5, 22, 10, 7, 23, 11, 3, 9, 14, 32};
        tmp = new int[A.length];
        mergeSort(A, 0, A.length-1);
        System.out.println(Arrays.toString(A));

    }


    public static void mergeSort(int arr[], int start, int end)
    {
        int mid;
        if(start < end)
        {
            mid = (start+end)/2;
            mergeSort(arr, start, mid);
            mergeSort(arr, mid+1, end);
            merge(arr, start, mid, end);
        }

    }

    public static void merge(int arr[], int start, int mid, int end)
    {

        int i=start;
        int j=mid+1;
        int k=start;

        while(i<=mid && j<=end)
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
        while(i<=mid)
            tmp[k++] = arr[i++];
        while(j<=end)
            tmp[k++] = arr[j++];

        for(int index=start; index<k; index++)
            arr[index] = tmp[index];

    }
    

}

```


::: details 결과     
[3, 5, 7, 9, 10, 11, 14, 22, 23, 32]    
:::   
<br>   

### Divide(분할)

<br>  
<img src="https://www.globalsoftwaresupport.com/wp-content/uploads/2019/09/ezgif.com-video-to-gif-15.gif" alt="병합정렬_나누기"  height="122px" />  
<br>

### Conquer(정복)

<br> 
<img src="https://www.globalsoftwaresupport.com/wp-content/uploads/2019/09/ezgif.com-crop-5-1.gif" alt="병합정렬_정복" height="193px" />  
<br>
<br> 
<br> 


## 시간복잡도

합병 정렬은 결과적으로 이야기해서 **Θ(nlog2​n)**의 시간복잡도를 가졌다.
<code>분할</code> <code>정복</code> <code>결합</code>의 세가지 단계를 거쳐 소요되는 시간을 알아보겠다.

- 분할 단계   

분할 단계는 입력 배열의 중간을 계산한다. <code>Θ(1)</code>의 실행시간   

  - Θ(1)의 의미

  Θ(1)이란 constant time을 의미하며 부분 배열에 크기와 상관없이 일정한 시간이 소요된다.   


- 정복 단계   

정복 단계는 n/2개의 요소를 가진 부분 배열들을 재귀적으로 정렬한다. <code>2T(n/2)</code>의 실행시간   


- 결합 단계   

부분 집합들을 하나로 합치는 단계로, 최대 n번의 비교 연산이 필요하다. <code>Θ(n)<code>의 실행시간   



따라서, T(n) = 2T(n/2)+Θ(n) = <code>Θ(nlog2​n)<code>


<br>
 <img src="https://i.stack.imgur.com/33vP2.jpg" alt="시간복잡도1" width= "442px" height="166px" />  
<br>
<br>

:link: 참고[춤으로 이해하는 merge sort](https://www.youtube.com/watch?v=dENca26N6V4&feature=emb_title)


---

이미지 출처 [sorting-algorithms-fundamentals](https://www.globalsoftwaresupport.com/sorting-algorithms-fundamentals)   
이미지 출처 [stack overflow](https://www.globalsoftwaresupport.com/sorting-algorithms-fundamentals)   
참고 [KhanAcademy-merge-sort](https://ko.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/overview-of-merge-sort)

