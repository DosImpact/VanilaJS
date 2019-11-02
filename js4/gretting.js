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
  console.log(currentValue);
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
  greeting.innerText = `Hello ${text}`;
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
