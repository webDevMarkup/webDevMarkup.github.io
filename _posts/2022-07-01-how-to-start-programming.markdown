---
layout: post
title: GIT blog 만들기 (1. Jekyll 세팅)
description: Jekyll을 활용해 Git 블로그 만들기 시리즈 - 1. Jekyll 세팅
date: 2022-07-01
img: jekyll.jpeg
tags: [programming, learn, test] # add tag
author: One-punch man
---


# 1. Overview
회사에서 일을 하면서 단순히 개인 PC에 스킬을 정리하여 보관을 하였던 많은 정보들을 나와 같은 고민이 있는 사람들에게 공유하면 어떨까? 라는 생각으로 개인 홈페이지 제작 시도해봤다. 하지만, 막상 홈페이지를 만들기 위해 구글링을 하면서 '기술 블로그'라는 개발자 노트를 보게되었다.

내가 원하던 정보만 공유하기에는 홈페이지보다는 기술 블로그가 더욱 목적에 부합하였으며, 다른 사람들과 소통을 위해 git을 이용하여 제작을 해보기로 결심하였다. 

# 2. Jekyll ?

### 1. Git과 Jekyll의 관계
GithubPage는 Github에서 공식적으로 운영하는 블로그 서비스이다. 많은 개발자들의 자신들의 코드를 뽐내고 테스트를 하는 개발자들의 인스타그램이라고 보면 좋을거 같다.
처음의 Git을 이용한 블로그는 개발자의 냄새(?)가 풍기는 디자인이라곤 하나도 찾아볼 수 없는 블로그가 즐비했다. 시간이 지나면서 어느덧 자신의 개성을 뽐내는 개발자들이 등장을하고, 그에 맞춰 미적감각이 1도 없는 개발자들을 위해 블로그 테마를 자동으로 세팅해주는 프레임워크가 생기게 되었다.

대표적으로 `Jekyll`, `HEXO`, `HUGO` 가 있다.

## 2. 왜 Jekyll를 선택하였는가?
### 1. HUGO
이 녀석은 `Go` 기반으로 만들어져서 빠르다. 하지만 나는 `Go`를 모른다.
그래서 빠르게 **Pass~!**

### 2. HEXO
`HEXO`는 `Javascript` 기반으로 기본 테마도 이쁘고 사용하는 사람이 많다. 하지만, **치명적인 단점**이 있다
> Git으로 프스트 버전관리가 안된다.

### 3. Jekyll
`Jekyll`는 `HEXO`의 단점을 상쇄시키는 장점이 있다. 하지만, Ruby기반이라 속도가 느리다는 단점이 있다.


# 3. Jekyll 설치 !
## 1. [사전세팅] rbenv 설치
`rbenv`는 `Ruby` 버전을 독립적으로 사용할 수 있도록 도와주는 패키지이다.
기본적으로 Mac은 `Ruby`가 설치가 되어 있다.
![](https://velog.velcdn.com/images/planic324/post/68b002bc-d1bc-446e-b3a2-6051ec85eb56/image.png)

Mac의 설치된 `Ruby`는 기본적으로 OS에 의존되다 보니 각 프로젝트별 Ruby 버전이 다를 수 있다.
이런 경우 각 프로젝트를 옮길때 마다 `Ruby` 버전을 지우고 재설치를 해야되는데, 이를 이러한 번거로움을 줄이기 위해 탄생한 것이 `rbenv` 이다.

### 1. brew 업데이트
작업 시작전 `brew`를 최신화 시켜준다
``` 
brew update
```
![](https://velog.velcdn.com/images/planic324/post/029a15a6-f961-4aeb-ac74-a0413026b767/image.png)

### 2. rbenv 설치
```
brew install rbenv ruby-build
```
![](https://velog.velcdn.com/images/planic324/post/c02bf026-ce3f-4385-a707-f4c79c5e6294/image.png)

### 3. rbenv 설치확인 및 버전확인
설치가 완료되어 버전을 확인하면 아래의 이미지와 같은 `system` 문구가 보인다.
![](https://velog.velcdn.com/images/planic324/post/8841824b-7e42-481a-9339-bf4ab1d6fff0/image.png)

'22.06.24 기준으로 최신버전은 `3.1.2` 버전이다.
버전 리스트를 확인하는 명령어는 다음과 같다.
```
rbenv instal -l
```

### 4. rbenv 업데이트
최신화를 시켜준다.
```
rbenv install 3.1.2
```
![](https://velog.velcdn.com/images/planic324/post/a8a89cc0-ac01-402e-a93a-26d4dd173489/image.png)

### 5. rbenv의 global로 변경
local 에서 global로 변경을 진행한다.
```
rbenv global 버전
ex) rbenv global 3.1.2
```
다시 버전을 확인
![](https://velog.velcdn.com/images/planic324/post/3263626f-6df7-45b7-aa6d-6e9925bd6891/image.png)

### 6. rbenv에 PATH 추가
본인의 쉘 설정 파일을 열어 다음의 코드 추가
```
vim ~/.zshrc
```
생성된 파일에 아래의 코드를 추가
```
[[ -d ~/.rbenv  ]] && \
  export PATH=${HOME}/.rbenv/bin:${PATH} && \
  eval "$(rbenv init -)"
```
코드를 추가 후 source로 코드 적용
```
source ~/.zshrc
```

## 2. [사전세팅] gem
> gem : Ruby에서 사용하는 패키지

### 1. bundler 설치하기
gem의 의존성관리를 위해 `Bundler` 라는 의존성관리 도구가 사용된다.

```
gem install bundler
```
![](https://velog.velcdn.com/images/planic324/post/10fcbe82-c8f0-40d7-a333-a53624b92eb1/image.png)

## 3. [본세팅]Jekyll 세팅

### 1. Jekyll 설치
이제 남은 건 Jekyll 만 설치하면된다. OS별 설치 방법은 아래의 링크에서 자세히 확인 할 수 있다.

[**OS별 설치방법 확인**](https://jekyllrb-ko.github.io/docs/installation/)

나는 Mac을 사용하기에 Mac버전(global)로 설치를 진행하였다.
명령어는 사이트에서 제공하여 쉽게 찾을 수 있다.
![](https://velog.velcdn.com/images/planic324/post/5f536b6f-b07d-424f-9635-cdbcb63f5209/image.png)

```
sudo gem install -n /usr/local/bin/ jekyll 
```

### 2. local 폴더 생성
Jekyll이 설치가 되었으면, local에 블로그 저장소(폴더)를 생성한다.

### 3. Jekyll 최초 실행
생성된 저장소(폴더)로 접근하여 Jekyll을 실행 할 폴더를 생성한다.
```
jekyll new (폴더명)
ex) jekyll new myblog
```
![](https://velog.velcdn.com/images/planic324/post/9047f397-4ae2-47ea-8c82-fdc4148d1665/image.png)

### 4. 오류발생(feat.webrick)
오류가 발생했다. 오류의 내용을 확인해보자.
```
Auto-regeneration: enabled for '/Users/no-eunchan/test_blog/myblog'
                    ------------------------------------------------
      Jekyll 4.2.2   Please append `--trace` to the `serve` command 
                     for any additional information or backtrace. 
                    ------------------------------------------------
/Users/no-eunchan/.rbenv/versions/3.1.2/lib/ruby/gems/3.1.0/gems/jekyll-4.2.2/lib/jekyll/commands/serve/servlet.rb:3:in `require': cannot load such file -- webrick (LoadError)
```

![](https://velog.velcdn.com/images/planic324/post/001ebf3f-4383-4987-b632-ce9e1354034e/image.png)

구글링하여 원인을 찾아보니, `webrick`를 로드할는데 문제가 발생한다고 한다.

> 해결 : `webrick`를 추가하자. 아래의 코드를 입력한다.

```
bundle add webrick
```



### 5. Jekyll 실행
Jekyll을 실행해보자.
```
jekyll serve = 실행
bundle exec jekyll serve = 사이트를 빌드하고 로컬 서버에 적용
```

### 6. 확인하기
이제 올바르게 jekyll가 실행되는지 확인해보자
주소는 설정한 `localhost:4000` 이다.
![](https://velog.velcdn.com/images/planic324/post/3d94c1a2-a38a-4ea8-a7d4-15c0c869d0de/image.png)

**성공 ! 했습니다 :)**

# 4. 참고문헌 및 URL
1. https://jekyllrb-ko.github.io/ (Jekyll 홈페이지)
2. https://frhyme.github.io/blog/install_jekyll_again/ (frhyme.code님 블로그)
3. https://smartbase.tistory.com/43 (조묵헌님 블로그)