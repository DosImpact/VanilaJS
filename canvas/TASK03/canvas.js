const body = document.querySelector("body");
const canvas_mask = document.querySelector("#canvas_mask");
const ctx = canvas_mask.getContext("2d");
const CANVA_W = 432,
  CANVA_H = 650;

function canvasSettingImage() {
  let img = new Image();
  img.onload = function() {
    ctx.drawImage(img, 0, 0);
  };
  // img.src = "target.jpg";
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
    ctx.strokeStyle = "white";
    ctx.stroke();
  }
  canvas_mask.addEventListener("mousedown", startPosition);
  canvas_mask.addEventListener("mouseup", finishedPosition);
  canvas_mask.addEventListener("mousemove", draw);
}
function canvasMakeMask() {
  ctx.globalCompositeOperation = "xor";
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, CANVA_W, CANVA_H);
}
function canvasSetting() {
  //Resizing
  canvas_mask.height = CANVA_H;
  canvas_mask.width = CANVA_W;
  canvasSettingImage();
  canvasSettingDrawable();
}

function init() {
  window.addEventListener("load", canvasSetting);
  const makeMaskbtn = document.querySelector("#js-makeMask");
  makeMaskbtn.addEventListener("click", canvasMakeMask);
}
init();
