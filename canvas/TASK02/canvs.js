const body = document.querySelector("body");
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

function canvasSettingImage() {
  let img = new Image();
  img.onload = function() {
    ctx.drawImage(img, 0, 0);
  };
  img.src = "target.jpg";
}

function canvasSettingDrawable() {
  let painting = false;
  function startPosition() {
    painting = true;
  }
  function finishedPosition() {
    painting = false;
    ctx.beginPath();
  }
  function draw(e) {
    if (!painting) {
      return;
    }
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.lineTo(e.clientX, e.clientY);
    ctx.strokeStyle = "whitesmoke";
    ctx.stroke();
  }
  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("mouseup", finishedPosition);
  canvas.addEventListener("mousemove", draw);
}
function canvasSetting() {
  //Resizing
  canvas.height = 650;
  canvas.width = 432;
  canvasSettingImage();
  canvasSettingDrawable();
}

function init() {
  window.addEventListener("load", canvasSetting);
}
init();
