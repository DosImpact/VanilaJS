const body = document.querySelector("body");
const canvas_img = document.querySelector("#canvas_img");
const ctx = canvas_img.getContext("2d");

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
    ctx.lineTo(e.clientX - 100, e.clientY - 100);
    ctx.strokeStyle = "whitesmoke";
    ctx.stroke();
  }
  canvas_img.addEventListener("mousedown", startPosition);
  canvas_img.addEventListener("mouseup", finishedPosition);
  canvas_img.addEventListener("mousemove", draw);
}
function canvasSetting() {
  //Resizing
  canvas_img.height = 650;
  canvas_img.width = 432;
  canvasSettingImage();
  canvasSettingDrawable();
}

function init() {
  window.addEventListener("load", canvasSetting);
}
init();
