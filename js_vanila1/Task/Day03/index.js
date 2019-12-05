const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const superEventHandler = {
  mouseenterEvent: function mouseenterEvent(event) {
    title.innerHTML = "The mouse is here!";
    title.style.color = colors[0];
  },
  mouseleaveEvent: function mouseleaveEvent(event) {
    title.innerHTML = "The mouse is gone!";
    title.style.color = colors[1];
  },
  resizeEvent: function resizeEvent(event) {
    title.innerHTML = "You just resized!";
    title.style.color = colors[2];
  },
  contextmenuEvent: function contextmenuEvent(event) {
    title.innerHTML = "That was a right click";
    title.style.color = colors[3];
  }
};

const title = document.querySelector(".title");

function init() {
  title.addEventListener("mouseenter", superEventHandler.mouseenterEvent);
  title.addEventListener("mouseleave", superEventHandler.mouseleaveEvent);
  window.addEventListener("resize", superEventHandler.resizeEvent);
  window.addEventListener("contextmenu", superEventHandler.contextmenuEvent);
}
init();
