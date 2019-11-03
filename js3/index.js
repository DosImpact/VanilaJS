const title = document.querySelector("#title");
const CLASS_CM = "btn clicked";

function changeClass() {
  const currentClassName = title.className;
  if (currentClassName === CLASS_CM) {
    title.className = "";
  } else {
    title.className = CLASS_CM;
  }
}
function init() {
  title.addEventListener("click", changeClass);
}
init();
