//getElemnetId등도 있지만, querySelector기능을 자주 사용할거임;
const clockContainer = document.querySelector(".js-clock"),
  clockTitle = document.querySelector("h1");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  //
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}
function init() {
  getTime();
  //해당 함수를 1000ms마다 계속 실행 시켜준다.~~
  setInterval(getTime, 1000);
}
init();
