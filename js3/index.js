const title = document.querySelector("#title");
const CLASS_CLICK = "clicked";

function changeClass() {
  if (title.classList.contains(CLASS_CLICK)) {
    title.classList.remove(CLASS_CLICK);
  } else {
    title.classList.add(CLASS_CLICK);
  }
}
function init() {
  title.addEventListener("click", changeClass);
}
init();
