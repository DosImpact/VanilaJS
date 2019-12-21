const today = document.querySelector(".today");

function displayTime() {
  const date = new Date();
  const h = date.getHours();
  const m = date.getMinutes();
  const s = date.getSeconds();
  today.innerHTML = ` ${h < 10 ? `0${h}` : h} : ${m < 10 ? `0${m}` : m} : ${
    s < 10 ? `0${s}` : s
  } `;
}
function init() {
  displayTime();
  setInterval(displayTime, 1000);
}
init();
