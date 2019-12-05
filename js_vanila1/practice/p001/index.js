const title = document.querySelector(".title");
const COLOR_GREEN_CN = "color__green";

function resizeEvent() {
  console.log("resize!!");
}
function clickEvent() {
  if (title.classList.contains(COLOR_GREEN_CN)) {
    title.classList.remove(COLOR_GREEN_CN);
  } else {
    title.classList.add(COLOR_GREEN_CN);
  }
}
function init() {
  window.addEventListener("resize", resizeEvent);
  title.addEventListener("mouseenter", clickEvent);
}
init();
