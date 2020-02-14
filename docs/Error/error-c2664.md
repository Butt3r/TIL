# C2664 <Badge text="Error" type="error"/>
> IDE: Visual studio 2017
> language: C++
---

## 에러 발생 지점
---

```c++
void setStage(char Maze[21][21], _POINT pPlayerPos,  _POINT pStartPos, _POINT pEndPos)   
void Output(char Maze[21][21], _POINT pPlayerPos)   
void MoveChr(char Maze[21][21], _POINT pPlayerPos, char cinput)
```

## Error
---

```c++
error C2664: 'void setStage(char [][34],_POINT,_POINT,_POINT)': 인수 2을(를) 'POINT *'에서 '_POINT'(으)로 변환할 수 없습니다.   
error C2664: 'void Output(char [][34],_POINT)': 인수 2을(를) 'POINT *'에서 '_POINT'(으)로 변환할 수 없습니다.   
error C2664: 'void MoveChr(char [][34],_POINT,char)': 인수 2을(를) 'POINT *'에서 '_POINT'(으)로 변환할 수 없습니다.   
note: 가리킨 형식이 관련이 없습니다. 변환하려면 reinterpret_cast, C 스타일 캐스트 또는 함수 스타일 캐스트가 필요합니다.   
```

## 해결 방법
---

**1. 유니코드를 멀티 바이트로 변환하자.**


C2664는 유니코드로 인해 발생하는 대표적인 오류 중 하나이다.<br>
Visual studio 환경이 유니코드로 되어있는데 MBCS(Multi Byte Character Set)를 쓰진않았는지

프로젝트 -> 속성 -> 구성 -> 프로젝트 기본값 -> 문자 집합 에서 확인한다.

만약 유니코드로 되어있다면 멀티바이트 문자 집합 사용으로 변환<br>
혹은 유니코드에 맞춰 WBCS (Wide Byte Character Set)방식으로 코드를 수정한다.

[참고](https://docs.microsoft.com/ko-kr/windows/desktop/Intl/string-function-differences)   
<br>


::: tip 
이 선에서 오류가 해결된다면 다행이지만  C2664는 유니코드외에 다른 이유로도 발생할 수 있다.   
그때 필요한 것이 두번째 방법 즉, 에러의 원인이 되는 인수 부분에 const를 붙이는 것이다.
:::


**2. CONST 를 붙인다.**
---


```c++
error C2664: 'void setStage(char [][34],_POINT,_POINT,_POINT)': 인수 2을(를) 'POINT *'에서 '_POINT'(으)로 변환할 수 없습니다.
```

에러 C2664는 메세지가 가리키는 것처럼 생정자 함수에서 전달받을 인자의 형과 실제로 전달할 인자의 형이 맞지않아 발생한 오류이다. 이게 무슨 뜻이냐하면 변수,인수,문자열 등은 메모리공간의 data에 저장되는데 이 저장된 값은 임의로 바꿀 수 있을지언정 값이 저장된 메모리 공간의 주소는 바꿀 수 없는 '상수'라 _POINT라는 포인터는 적절하지않은 형이라는 것


따라서 _POINT를 상수를 담기에 적절한 그릇으로 바꿔주면 해결된다.<br>
앞에 **CONST를 붙여** 올바른 형태로 인자를 전달하게 하자




