Vuepress 시작하기 <Badge text="song" />
=================


Vuepress란?
---

-	vuepress는 jekyll, gatsby 와 같은 정적 사이트 생성기(SSG)이다.
-	vuepress는 Vue.js로 개발되어 vue 컴포넌트 사용이 가능하다.
-	vuepress는 공식 [Plugin-API](https://vuepress.vuejs.org/plugin/#examples)을 제공한다.
-	vuepress를 사용하여 쉽고 간단하게 기술 문서를 만들 수 있다!


설치방법
---


앞서 vuepress를 설치하기 전 Github 계정을 생성한다.

1.	[Github](https://github.com/join?source=header-home)
2.	리포지토리를 만든다.
3.	생성한 리포지토리의 주소를 복사한다.
4.	CMD창을 실행한다.

아래의 명령어로 로컬 저장소에 해당 리포지토리를 다운한다.

```sh
git clone <리포지토리 클론 주소>
cd <클론한 프로젝트 폴더명>
```

yarn 혹은 npm으로 vuepress를 설치한다.

```sh
yarn init
yarn add vuepress -D

# or npm init -y
# npm install -D vuepress
```

실행 시 커맨드에서 "은(는) 내부 또는 외부 명령, 실행할 수 있는 프로그램, 또는 배치 파일이 아닙니다.” 라는 메세지가 뜰 수 있다. 그럴땐 yarn 혹은 npm을 설치 후 진행한다.


::: warning
정상적인 설치 후에도 위 메세지가 뜬다면 환경변수에서 path를 설정해준다.
:::


설치가 완료되면 해당 프로젝트 폴더 내부의 package.json을 열어 scripts 부분을 다음과 같이 수정한다.

```json
 "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  },
```

아래의 명령어로 docs 폴더를 생성한다.

```sh
mkdir docs
```

docs폴더에 README 파일을 생성한다.

```sh
echo '#vuepress 시작!' > docs/README.md
```

Development Mode를 실행하여 정상적으로 작동되는지 확인한다.

```sh
yarn docs:dev # or npm run docs:dev
```


디렉토리 구조
---


기본적인 트리 구조는 아래와 같다.

참고[VuepressDirectory](https://vuepress.vuejs.org/guide/directory-structure.html#default-page-routing)

```
├─ docs
│  ├─ README.md
│  └─ .vuepress
│     └─ config.js
└─ package.json

```


Configuration
---



심심한 화면을 꾸며주기위해선 config이 필요하다.

위 디렉토리 구조대로 파일을 생성했다면 config.js 파일을 열어 다음과 같이 작성한다.

```javascript
module.exports = {
  title: 'VuePress world!',
  description: 'hello Vue'
}
```


README 파일도 root에 있는 경우엔 YAML Front matter로 작성해야한다.

README 파일을 열어 다음과 같이 수정한다. 
참고[DefaultTheme](https://vuepress.vuejs.org/theme/default-theme-config.html#homepage)

```
---
home: true
heroText: <홈페이지 타이틀>
tagline: <홈페이지 섭타이틀>
features:
- title: Simplicity First
  details: Minimal setup with markdown-centered project structure helps you focus on writing.
- title: Vue-Powered
  details: Enjoy the dev experience of Vue + webpack, use Vue components in markdown, and develop custom themes with Vue.
- title: Performant
  details: VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.
---

```

Deploy하는 방법
---


배포는 깃헙 페이지를 통한 수동 배포와 호스팅 서비스를 통한 자동 배포 방법이 있다.

### Github pages 배포

프로젝트 폴더(docs 폴더 바깥)에 deploy .sh파일을 생성 후 다음과 같이 작성한다.

```py
#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy’

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f <클론한 리포지토리 주소>

cd -
```

그리고 pakage.json을 열어 scripts에 다음 내용을 추가한다.

```json
"deploy": "sh deploy.sh"
```

마지막으로 아래의 명령어로 배포를 실행한다.

```sh
yarn deploy # or npm run deploy
```

::: warning
윈도우 유저라면 cmder, git bash와 같은 콘솔 프로그램을 이용한다.
:::



정상적으로 배포가 완료됐다면 생성했던 리포지토리의 gh-pages 브랜치에서 dist 폴더에 빌드된 프로젝트 파일이 있는지 체크한다.
그리고 리포지토리 -> Setting -> github page로 가서 브랜치를 gh-pages로 맞춰주고

<code>https:'USERNAME'.github.io/'REPO'</code>

위 주소로 접속하여 최종 결과물을 확인한다.


> 페이지가 로드되는데 시간이 좀 걸리니 기다린다.


### 자동 배포

자동 배포가 가능한 사이트들은 여러가지이다.

-	Surge
-	Netlify
-	Travis CI
-	Google firebase
-	Heroku
-	Now

자동배포 방법은 Netlify을 기준으로 나중에 따로 쓰겠다.

간략한 자동배포 방법은 [VuepressDeploy](https://v1.vuepress.vuejs.org/guide/deploy.html#heroku) 여기서 확인할 수 있다.


