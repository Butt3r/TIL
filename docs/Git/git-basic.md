# Git version controll <Badge text="song" />

> 생활코딩 [GIT2](https://opentutorials.org/course/3839) 수업을 듣고 정리한 자료입니다.


## 버전관리의 시작 (init, config)

깃(Git)을 사용하기 위해 가장 먼저 저장소(Repository)를 만든다.

1. 로컬 디렉토리를 깃 저장소로 사용하는 방법

```sh
$ mkdir testRepo # testRepo란 폴더를 생성

$ cd testRepo # testRepo로 이동

$ git init # 현재 폴더를 git에게 버젼관리를 시킴 
```

2. 깃 저장소를 로컬 디렉토리에 복사하는 방법

```sh
$ git clone <repo url> # 해당 저장소를 현재 위치에 복사
```

아래와 같이 폴더 속에 .git 디렉토리 파일이 있다면 성공!

```sh
$ ls -al # 현재 폴더의 내용을 출력

# 결과
drwxr-xr-x 1 user 197121 0 5월 29 23:06 .git
```

깃을 처음 사용한다면 다음과 같이 최초 설정을 해준다.

```sh
$ git config --global user.name "이름"
$ git config --global user.email "이메일"
```
<br>   

::: tip   
`.git` 폴더 내부엔 모든 변경 내용들이 담겨있다.   
따라서 삭제하거나 `.git` 이 중복되지 않도록 한다.
:::   


다음으로 버전 생성에대해 알아보기 전에 아래의 개념을 간단히 짚고 넘어가본다.

## Git의 세 가지 영역

### 1. Git Directory

- `.git`을 말한다. 
- 프로젝트의 변경 이력이 담겨있다.

### 2. Working Directory

- `working tree`를 말한다.
- 프로젝트 디렉토리이다.
- 파일을 개발 및 수정하는 작업 영역에 속한다.
    - 워킹 디렉토리의 모든 파일은 Tracked와 Untracked로 나뉜다.
    - Tracked(관리대상)는 깃에 의해 관리되는 파일을 말한다.
    - Tracked가 아닌 모든 파일은 Untracked(관리대상이 아님) 이다.
        
### 3. Staging Area

- `index`라고도 부른다.
- Git Directory 내부에 존재한다.
- 파일 상태를 staging 한다고 표현한다.
- woring Directory에서 작업한 내용을 원격 저장소로 commit하기 전 준비 영역에 속한다.   


## 버전 생성 (status, add, commit, push)

워킹 디렉토리(Working Directory) 내부에서 변경된 사항을 Commit 하기 위해   
필요한 명령어들을 알아본다.

```sh
$ git status # 현재 파일의 상태를 확인한다.
```

저장소를 생성한 직후에 `git status` 명령어를 쓰면 다음과 같은 메세지가 뜬다.

```sh
$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
nothing to commit, working directory clean
```
현재 작업 중인 브랜치가 master 브랜치로 체크아웃 됐으며,
아직 커밋된 파일이 없다는 뜻이다.   


파일을 만들어보고 다시 한번 `git status`를 해보겠다.   

```sh
$ echo 'hello' >> hello.txt # hello란 내용이 담긴 hello.txt 파일 생성

$ git status
Untracked files:
  (use "git add <file>..." to include in what will be committed)

    hello.txt

nothing added to commit but untracked files present (use "git add" to track)
```
이전과는 달리 hello.txt파일이 뜨며 현재 Untracked 상태임을 알려준다.   
hello.txt 파일을 Tracked로 바꾸기위해 `git add` 명령어로 Staging Area에 올린다.

```sh
$ git add hello.txt # hello.txt 파일을 Staging Area에 등록한다.

# 한번에 모든 파일을 추가하고 싶을 때
$ git add . 
$ git add --all
$ git add -A
```

`git status`를 해보니 다음과 같이 변경됐음을 알 수 있다.

```sh
$ git status
On branch master
No commits yet
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

    new file:   hello.txt
```

이제 `git commit` 명령어를 실행하여 변경 사항을 확정한다.

```sh
$ git commit -m "커밋 메세지"
[master a56147e] 커밋 메세지
1 file changed, 0 insertions(+), 0 deletions(-)

$ git status
On branch master
nothing to commit, working tree clean
```
유일한 파일이였던 hello.txt가 Tracked로 바뀌면서   
Untracked 파일이 없어졌다. (버전으로 만들 파일이 없는 상태) 

`git log` 명령어로 버전이 잘 만들어졌는지 확인한다.

```sh
$ git log # Commit history를 확인한다.

Author: user <email>
Date: Tue Jun 2 19:23:32 2020 +0900

    커밋 메세지

# Q를 누르면 나갈 수 있다.
```

`git diff` 명령어도 log와 비슷하게 변경사항을 확인할 수 있다.

```sh
$ git diff # unstaged된 수정사항 확인
```
<br>   