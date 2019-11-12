/*
-로컬스토리지는 string을 저장 불러오기가 가능하다.!
localStorage.setItem(USER_LS, text)
localStoruage.getItem(USER_LS)
-form에서 submit 세로고침 막기
form.addEventListener("submit",handleSubmit)
event.preventDefault();

-css .showing{display:black}은
cascading되므로 class추가 순서에 상관없이. 보이게 된다.
즉, 기본적으로 form이랑, greetings를 안보이게 하고,
showing을 추가한 경우만 보이게 한다.
*/

const form = document.querySelector(".js-form"),
  input = document.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}
function handleSubmit(event) {
  //원래는 form을 제출하면 페이지가 세로 고침이 되는 이벤트가 발생한다. 그러면서
  //백단으로 데이터가 넘어가는데, 그러한 새로고침 이벤트(기본값)을 막고자 한다.
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}
function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}
function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ! ${text}`;
}
function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}
function init() {
  loadName();
}
init();
