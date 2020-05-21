Recursion의 응용 <Badge text="song" />
=============



## 1. 미로찾기 알고리즘

미로찾기는 Decision Problem이라 하여,   
결과가 yes or no로 나뉘는 문제로

- 현재 위치가 출구이거나 혹은
- 동서남북으로 이웃한 4개의 셀(cell)들 중 하나에서 **현재 위치를 지나지 않고** 출구까지 가는 경로가 있거나

둘 중 하나의 조건을 만족해야만 한다.


위 알고리즘을 수도코드로 표현한 예제이다.

```java
boolean findPath(x,y) // 2차원 배열
if (x,y) is the exit // 현재위치가 출구라면
    return true; // yes
else // 그렇지 않다면 
    for each neighbouring cell (x',y') of (x,y) do // 현재위치와 인접한 셀(x', y')이
     if (x',y') is one the pathway // 통로라면(벽이 아니고) 
      if findPath(x',y') // 현재위치가 출구일 때까지 반복
    return true; // yes
return false; // no
```

결론 먼저 이야기하자면 위 코드는 잘못된 코드이다.   
그 이유는,   

1. 현재위치가 출구일때 true를 리턴하는 base case
2. 현재위치와 인접한 셀이 조건을 만족할 때 자기자신을 다시 호출하는 recursive case

2개의 조건은 총족됐지만

3. recursive case를 반복했을 때 base case로 수렴하는 recursive case

마지막 조건을 총족시키지 못했기 때문이다.

만약, 이대로 코드를 구현한다면  
(x,y)가 조건을 만족하는 인접한 셀(x',y')로 이동하고 (x',y')가 또 다시 조건을 만족하는 인접한 셀(x,y)로 이동하면서
(x,y)와 (x',y')를 왔다갔다하는 상황이 발생할 확률이 크다.

재귀함수에서의 이러한 무한루프를 예방하기 위해서는 조건을 만들 때 신중할 필요가 있다.

다시 코드로 넘어가 수정해보겠다.

```java
boolean findPath(x,y) // 2차원 배열
if (x,y) is the exit // 현재위치가 출구라면
    return true; // yes
else // 그렇지 않다면 
   mark (x,y) as a visited cell; // 지난 경로의 위치를 표시
    for each neighbouring cell (x',y') of (x,y) do // 현재위치와 인접한 셀(x', y')이
     if (x',y') is one the pathway and not visited // 통로이고(벽이 아니고) 방문한 위치가 아니라면
      if findPath(x',y') // 현재위치가 출구일 때까지 반복
    return true; // yes
return false; // no
```

(x,y)가 지나온 위치를 표시함으로서 셀의 갯수는 유한하기 때문에 무한루프에 빠지지 않게된다.


```java
boolean findPath(x,y) // 2차원 배열
if (x,y) is either on the wall or a visited cell // 벽이거나 방문한 위치면
    return false; // no
else if (x,y) is the exit // 현재위치가 출구라면
    return true; // yes
else // 그렇지 않다면 
   mark (x,y) as a visited cell; // 지난 경로의 위치를 표시
    for each neighbouring cell (x',y') of (x,y) do // 현재위치와 인접한 셀(x', y')이
     if findPath(x',y') // 통로이고(벽이 아니고) 방문한 위치가 아니라면 현재위치가 출구일 때까지 반복
    return true; // yes
return false; // no
```

이런식으로 작성할 수도 있다. (recursion의 횟수가 좀 더 많아짐)


## 2. Java로 구현

위 수도코드를 자바로 구현한 모습이다.

```java
public class Maze {


    private static final int N = 8;
    private static int[][] maze = {

            { 0, 0, 0, 0, 0, 0, 0, 1 },
            { 0, 1, 1, 0, 1, 1, 0, 1 },
            { 0, 0, 0, 1, 0, 0, 0, 1 },
            { 0, 1, 0, 0, 1, 1, 0, 0 },
            { 0, 1, 1, 1, 0, 0, 1, 1 },
            { 0, 1, 0, 0, 0, 1, 0, 1 },
            { 0, 0, 0, 1, 0, 0, 0, 1 },
            { 0, 1, 1, 1, 0, 1, 0, 0 }
    };


    private static final int PATHWAY_COLOR = 0; // 지나다닐 수 있는 통로
    private static final int WALL_COLOR = 1; // 지나다닐 수 없는 벽
    private static final int BLOCKED_COLOR = 2; // visted이며 출구까지 가는 경로가 막혀있는 셀
    private static final int PATH_COLOR = 3; // visted이며 아직 출구로 가는 경로가 될 가능성이 있는 셀



    public static void main(String[] args) {
        findMazePath(0, 0); // int x, int y
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                System.out.print(maze[i][j] + " ");
            }
            System.out.println();
        }
    }

    public static boolean findMazePath(int x, int y) {
        if (x < 0 || y < 0 || x > N - 1 || y > N - 1) { // (x,y)가 유효한 범위인지 확인
            return false;
        } else if (maze[x][y] != PATHWAY_COLOR) { // 벽이거나 이미 방문한 위치거나 
            return false;
        } else if (x == N - 1 && y == N - 1) { // 현재위치가 출구라면
            maze[x][y] = PATH_COLOR; // 방문한 위치 표시
            return true;
        } else {
            maze[x][y] = PATH_COLOR;
            // 동서남북으로 인접한 셀에서 경로가 있는지
            if (findMazePath(x - 1, y) || findMazePath(x, y + 1) ||
                    findMazePath(x + 1, y) || findMazePath(x, y - 1)) {
                return true;
            }
            maze[x][y] = BLOCKED_COLOR; // 더 이상 갈 수 있는 경로가 없다면(dead end)
            return false;
        }


    }
}
```

::: details 결과     
3 2 2 2 2 2 2 1   
3 1 1 2 1 1 2 1    
3 2 2 1 2 2 2 1    
3 1 2 2 1 1 2 2    
3 1 1 1 2 2 1 1    
3 1 3 3 3 1 2 1    
3 3 3 1 3 3 3 1    
0 1 1 1 0 1 3 3         
:::


마지막으로 재귀함수가 어떻게 진행되는지 다시 정리해보면

(x,y)는 좌표 0,0에서 시작한다. 만약 (x,y)가 음수 혹은 미로의 범위를 벗어난 수 이거나, 벽 혹은 이미 방문한 위치거나, 현재 위치가 출구라면 false를 리턴한다. 반대로 아니라면, 서북동남 순으로 인접한 셀에 경로가 있는지 재귀호출을 한다.

재귀호출을 하는 동안에는 출구까지 도달할 가능성이 있는 경로를 PATH_COLOR로 바꾸고 출구까지 도달할 수 없다면(막혔다면) PATH_COLOR를 BLOCKED_COLOR 변경하여 더 이상의 길이 없음을 표시한다.   

위 과정을 반복하여 현재 위치가 출구(x == N-1. y == N-1)일 경우 true를 리턴하고 종료한다.