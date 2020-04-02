정렬(sort) <Badge text="song" />
===================
> n개의 숫자를 사용자가 지정한 기준으로 순서대로 정렬하는 알고리즘


## 대표적인 정렬 알고리즘

간단하지만 느림   
- bubble   
- insertion   
- selection   

복잡하지만 빠름   
- quick   
- merge   

근복적으로 다름 
- heap   

비교하지않고 정렬을 함
- radix (o(n))
<br>   


## 기본적인 정렬 알고리즘

## 1.	Selection Sort 

수도코드

```java
slesction(arr[], n)
{
for last <- n downto 2
{
arr[1...last] 중 가장 큰 수 arr[k]를 찾는다;
arr[k] <--> arr[last]; arr[k]와 arr[last]의 값을 교환
}
}
```

시간복잡도는 큰 수를 찾기위한 비교횟수의 전체합과 같음
<br>   


## 2.	bubble Sort

수도코드

```java
bubble(arr[], n)
{
for last <- n downto 2
{
for i <- 1 to last-1
if(arr[i]>arr[i+1]) then arr[i] <-> arr[i+1]; arr[i] 바로 옆에 있는 값과 교환
}
}
```

셀렉션과같이 최악,최고,평균과 상관없이 시간복잡도는 같음
<br>   


## 3.	insertion Sort

수도코드

```java
insertion(arr[], n)
{
  for i <- 2 to n
  {
  arr[1...i]의 적당한 자리에 arr[i]를 삽입한다.
}
}
```

최악의 경우 i-1번까지 비교 시간복잡도는 최악: o(n제곱) 평균적으로는 셀렉션이나 버블보다 절반정도의 시간복잡도를 가짐
