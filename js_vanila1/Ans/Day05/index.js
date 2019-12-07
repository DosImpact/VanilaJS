
const clockTitle = document.querySelector(".js-clock");
const NINE_HOURS_MILLISECONDS = 32400000;//UTC와 KST(한국표준시)와의 차이는 9시간 => ms로 표현

function getTime() {
  const xmasDay = new Date("2019-12-24:00:00:00+0900"); //GMT+09:00 으로 KST를 표현하게된다.
  const now = new Date(); //그냥 Date객체를 만들경우 UTC기준 날짜.
  const difference = new Date(xmasDay - now - NINE_HOURS_MILLISECONDS); // UTC에 9시긴을더해 KST로 만든후 offset를 구한다.
  const days = difference.getDate();
  const minutes = difference.getMinutes();
  const hours = difference.getHours();
  const seconds = difference.getSeconds();
  clockTitle.innerText = `${days < 10 ? `0${days}` : days}d ${
    hours < 10 ? `0${hours}` : hours
  }h ${minutes < 10 ? `0${minutes}` : minutes}m ${
    seconds < 10 ? `0${seconds}` : seconds
  }s`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
