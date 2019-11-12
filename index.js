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
