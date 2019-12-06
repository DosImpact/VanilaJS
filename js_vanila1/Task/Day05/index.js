const timecounter = document.querySelector(".timecounter");

function setTime() {
  const date = new Date();
  const date2 = new Date("2019-12-25T00:00:00");
  const ddate = date2.getTime() - date.getTime();

  var days = Math.floor(ddate / (1000 * 60 * 60 * 24));
  var hours = Math.floor((ddate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((ddate % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((ddate % (1000 * 60)) / 1000);

  timecounter.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
function init() {
  setTime();
  setInterval(setTime, 1000);
}
init();
