const canvas = document.getElementById("jsCanvas");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const save = document.getElementById("jsSave");

const DEFAULT_COLOR = "#2c2c2c",
  CANVAS_SIZE = 700;

let painting = false;
let filling = false;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;
const ctx = canvas.getContext("2d");

ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.strokeStyle = DEFAULT_COLOR;
ctx.fillStyle = DEFAULT_COLOR;
ctx.lineWidth = 2.5;

function stopPainting() {
  painting = false;
}
function startPainting() {
  painting = true;
}
function handleColorClick(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}
function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else if (painting && !filling) {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}
function handleInputRange(event) {
  //console.log(typeof event.target.value);
  ctx.lineWidth = parseInt(event.target.value);
}
function handleModeClick(event) {
  if (!filling) {
    filling = true;
    event.target.innerHTML = "paint";
  } else {
    filling = false;
    event.target.innerHTML = "fill";
  }
}
function handleCanvasClick(evnet) {
  if (filling) {
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  }
}
function handleCM(event) {
  event.preventDefault();
}
function handleSaveClick(event) {
  const a = document.createElement("a");
  a.href = canvas.toDataURL();
  a.download = "Paint";
  a.click();
}
function init() {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
  canvas.addEventListener("contextmenu", handleCM);
  Array.from(colors).forEach(e => {
    e.addEventListener("click", handleColorClick);
  });
  range.addEventListener("input", handleInputRange);
  jsMode.addEventListener("click", handleModeClick);
  save.addEventListener("click", handleSaveClick);
}
init();
