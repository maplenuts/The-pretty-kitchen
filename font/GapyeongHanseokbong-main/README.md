# 가평한석봉

[배포처 바로가기](https://www.gp.go.kr/portal/contents.do?key=2410)

&nbsp;

## 웹 폰트

사용하는 `font-family`의 이름은 `Gapyeong Hanseokbong`입니다.

### HTML

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fonts-archive/GapyeongHanseokbong/GapyeongHanseokbong.css" type="text/css"/>
```

### CSS `@Import`

```css
@import url('https://cdn.jsdelivr.net/gh/fonts-archive/GapyeongHanseokbong/GapyeongHanseokbong.css');
```

### CSS `@font-face`

```css
@font-face {
    font-family: 'Gapyeong Hanseokbong';
    font-weight: 300;
    font-style: normal;
    font-display: swap;
    src: url('https://cdn.jsdelivr.net/gh/fonts-archive/GapyeongHanseokbong/GapyeongHanseokbong-Light.woff2') format('woff2'),
         url('https://cdn.jsdelivr.net/gh/fonts-archive/GapyeongHanseokbong/GapyeongHanseokbong-Light.woff') format('woff'),
         url('https://cdn.jsdelivr.net/gh/fonts-archive/GapyeongHanseokbong/GapyeongHanseokbong-Light.otf') format('opentype'),
         url('https://cdn.jsdelivr.net/gh/fonts-archive/GapyeongHanseokbong/GapyeongHanseokbong-Light.ttf') format('truetype');
}
@font-face {
    font-family: 'Gapyeong Hanseokbong';
    font-weight: 400;
    font-style: normal;
    font-display: swap;
    src: url('https://cdn.jsdelivr.net/gh/fonts-archive/GapyeongHanseokbong/GapyeongHanseokbong-Regular.woff2') format('woff2'),
         url('https://cdn.jsdelivr.net/gh/fonts-archive/GapyeongHanseokbong/GapyeongHanseokbong-Regular.woff') format('woff'),
         url('https://cdn.jsdelivr.net/gh/fonts-archive/GapyeongHanseokbong/GapyeongHanseokbong-Regular.otf') format('opentype'),
         url('https://cdn.jsdelivr.net/gh/fonts-archive/GapyeongHanseokbong/GapyeongHanseokbong-Regular.ttf') format('truetype');
}
@font-face {
    font-family: 'Gapyeong Hanseokbong';
    font-weight: 700;
    font-style: normal;
    font-display: swap;
    src: url('https://cdn.jsdelivr.net/gh/fonts-archive/GapyeongHanseokbong/GapyeongHanseokbong-Bold.woff2') format('woff2'),
         url('https://cdn.jsdelivr.net/gh/fonts-archive/GapyeongHanseokbong/GapyeongHanseokbong-Bold.woff') format('woff'),
         url('https://cdn.jsdelivr.net/gh/fonts-archive/GapyeongHanseokbong/GapyeongHanseokbong-Bold.otf') format('opentype'),
         url('https://cdn.jsdelivr.net/gh/fonts-archive/GapyeongHanseokbong/GapyeongHanseokbong-Bold.ttf') format('truetype');
}
```

&nbsp;

## 다이나믹 서브셋

웹폰트의 최적화를 위해 모던 브라우저에서는 글리프를 여러개로 나누어 필요한 부분만 동적으로 파싱하는 다이나믹 서브셋을 제공합니다. 폰트의 용량이 부담된다면 아래 코드를 사용하는 걸 추천합니다.

### HTML

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fonts-archive/GapyeongHanseokbong/subsets/GapyeongHanseokbong-dynamic-subset.css" type="text/css"/>
```

### CSS

```css
@import url('https://cdn.jsdelivr.net/gh/fonts-archive/GapyeongHanseokbong/subsets/GapyeongHanseokbong-dynamic-subset.css');
```

&nbsp;

## font-family

어느 브라우저나 시스템 환경에서도 동일한 폰트가 적용되어야 한다면 아래와 같이 구성하는 걸 추천합니다. `-apple-system`과 `BlinkMacSystemFont`는 맥, `Segoe UI`는 윈도우, `Roboto`는 안드로이드의 기본 폰트입니다.


```css
font-family: "Gapyeong Hanseokbong", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
```

&nbsp;

## 라이선스

라이선스는 언제든지 변경될 수 있습니다. 변경사항을 확인하려면 배포처를 방문해 주세요.

```
- 사용범위
가평군 서체 4종(가평물결, 가평한석봉 큰붓B, 가평한석봉 중간붓R, 가평한석봉 가는붓L)의 지식재산권은 가평군 소유로 저작권법 제24조의2(공공저작물의 자유이용) 및 문화체육관광부 고시 「공공저작물 저작권 관리 및 이용 지침」에 따라 누구나 무료로 사용하실 수 있습니다.
다만, 가평군 서체 4종은 유료로 양도하거나 판매할 수 없으며 배포되는 형태 그대로(원본 글씨 형태의 변형 없이) 사용해야 합니다.

- 출처 표시 안내
인쇄·출판물, 홈페이지, 블로그 등에 사용 시 저작권자를 밝히고 사용하여 주시기 바랍니다.
예) 이 인쇄물(본문)은 가평한석봉 큰붓B를 사용하여 작성되었습니다.
```
