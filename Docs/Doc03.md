# 이름 입력하면 저장하고 새로고침해도 계속 나오게 하기.

- localStorage. setItem | getItem
- classList. remove | add | contains
- event.preventDefault()

```js
const form = document.querySelector(".js-greeting");
const formInput = document.querySelector(".js-greeting__input");
const formName = document.querySelector(".js-greeting__name");

const SHOWING_CN = "showing";
const USER_LS = "USER_NAME";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}
function handleSubmit(event) {
  event.preventDefault();
  const name = formInput.value;
  saveName(name);
  printName(name);
}
function printName(text) {
  form.classList.remove(SHOWING_CN);
  formName.innerHTML = text;
  formName.classList.add(SHOWING_CN);
}
function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}
function init() {
  const currentName = localStorage.getItem(USER_LS);
  if (currentName === null) {
    askForName();
  } else {
    printName(currentName);
  }
}
init();
```
