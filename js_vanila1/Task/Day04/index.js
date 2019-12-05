const title = document.querySelector(".title");
const html = document.querySelector("html");
function resizeEvent() {
  title.innerHTML = `${window.innerHeight} | ${window.innerWidth}`;
  if (window.innerWidth > 1300) {
    html.style.backgroundColor = "red";
  } else if (window.innerWidth > 900) {
    html.style.backgroundColor = "blue";
  } else {
    html.style.backgroundColor = "green";
  }
}
function init() {
  window.onresize = resizeEvent;
}

init();
