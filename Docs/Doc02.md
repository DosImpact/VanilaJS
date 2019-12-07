# 이벤트리스너 | 클래스 리스트

- classList.contains | remove | add
- addEventListener

[참고](https://developer.mozilla.org/en-US/docs/Web/API/Element)

```js
const title = document.querySelector("#title");
const CLICKED_CN = "clicked";

function clickEvent() {
  if (title.classList.contains(CLICKED_CN)) {
    title.classList.remove(CLICKED_CN);
  } else {
    title.classList.add(CLICKED_CN);
  }
}
function resizeEvent() {
  console.log("ohohohohohohoho");
}
function init() {
  title.addEventListener("mouseenter", clickEvent);
  window.addEventListener("resize", resizeEvent);
}
init();
```
