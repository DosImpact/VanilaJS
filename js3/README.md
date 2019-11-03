## 1. 모든 이벤트를 기다릴순없다. 느려진다. window-> resize

```javascript
function handleResize() {
  console.log("I have been resized");
}
//윈도우의 크기가 바뀌면 다음과 같은 함수를 호출한다.
window.addEventListener("resize", handleResize);
```

## 2. js는 자동적으로 함수에 event 객체를 붙인다. window-> resize

```javascript
function handleResize(event) {
  console.log(event);
}
window.addEventListener("resize", handleResize);
```

## 3.특정 id를 클릭했을때 색깔이 변하게 ~ element -> click

```javascript
const title = document.querySelector("#title");
function handleClick() {
  title.style.color = "red";
}
title.addEventListener("click", handleClick);
```

## 4. ask something

```javascript
const ans = prompt("How old are you?");
if (ans > 18) {
  console.log("you can drink");
} else {
  console.log("you cannot");
}
```

## 클릭하면 색깔을 토글하는 코드 element -> click

```javascript
const title = document.querySelector("#title");
const BASE_COLOR = "red";
const OTHER_COLOR = "#7f8c8d";

function handleClick() {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}
function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("click", handleClick);
}
init();
```

## 마우스가 들어가면 색이 변하게 element -> mouseenter

```javascript
const title = document.querySelector("#title");
const BASE_COLOR = "red";
const OTHER_COLOR = "#7f8c8d";

function handleClick() {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}
function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("mouseenter", handleClick);
}
init();
```

## 온라인 오프라인 이벤트 핸들 window -> online

```javascript
function handleOnline() {
  console.log("This is on network!!");
}
window.addEventListener("online", handleOnline);
```

## 4. js로 클래스 주기 element.className

```javascript
const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked btn";
function handleClick() {
  const currentClass = title.className;
  if (currentClass !== CLICKED_CLASS) {
    title.className = CLICKED_CLASS;
  } else {
    title.className = ""; //empty
  }
}
function init() {
  title.addEventListener("click", handleClick);
}
init();
```

## 4. CLASS 여러개중 일부만 추가 삭제 하기.

```c++
element.classList.[contains | add | remove]
```

```javascript
const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";

function handleClick() {
  const hasClass = title.classList.contains(CLICKED_CLASS);
  if (!hasClass) {
    //title.className = CLICKED_CLASS;
    title.classList.add(CLICKED_CLASS);
  } else {
    //title.className = ""; //empty
    title.classList.remove(CLICKED_CLASS);
  }
}

function init() {
  title.addEventListener("click", handleClick);
}

init();
```
