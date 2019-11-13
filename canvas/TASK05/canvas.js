const canvasBackLayerimg = document.querySelector("#canvas_img");
const canvas_mask = document.querySelector("#canvas_mask");
const ctx = canvas_mask.getContext("2d");
const CANVA_W = 432,
  CANVA_H = 650,
  SHOWING_CN = "showing";

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
  const dataURI = canvas_mask.toDataURL("image/png");
  console.log(dataURI);
}
function canvasSaveMask() {
  //저장되는 이미지 타입을 결정.
  // const dataURI = canvas_mask.toDataURL("image/png");
  // console.log(dataURI);
  // const img__result = document.querySelector("#img__result");
  // img__result.src = dataURI;

  if (window.navigator.msSaveBlob) {
    window.navigator.msSaveBlob(canvas_mask.msToBlob(), "canvas-image.jpeg");
  } else {
    const a = document.createElement("a");
    document.body.appendChild(a);
    a.href = canvas_mask.toDataURL("image/jpeg");
    a.download = "canvas-image.png";
    a.click();
    document.body.removeChild(a);
  }
}
function canvasSetting() {
  canvas_mask.height = CANVA_H;
  canvas_mask.width = CANVA_W;
  canvasSettingDrawable();
}
function canvasSaveImgMask() {
  canvasBackLayerimg.classList.remove(SHOWING_CN);
  ctx.globalCompositeOperation = "destination-atop";

  let img = new Image();
  img.src = "target.jpg";
  ctx.drawImage(img, 0, 0);

  if (window.navigator.msSaveBlob) {
    window.navigator.msSaveBlob(
      canvas_mask.msToBlob(),
      "canvas-image_masked.png"
    );
  } else {
    const a = document.createElement("a");
    document.body.appendChild(a);
    a.href = canvas_mask.toDataURL("image/jpeg");
    a.download = "canvas-image_masked.png";
    a.click();
    document.body.removeChild(a);
  }
}
function init() {
  window.addEventListener("load", canvasSetting);

  const makeMaskbtn = document.querySelector("#js-makeMask");
  makeMaskbtn.addEventListener("click", canvasMakeMask);
  const saveMaskbtn = document.querySelector("#js-saveMask");
  saveMaskbtn.addEventListener("click", canvasSaveMask);
  const saveIMG_Maskbtn = document.querySelector("#js-saveimg_Mask");
  saveIMG_Maskbtn.addEventListener("click", canvasSaveImgMask);

  canvasBackLayerimg.classList.add(SHOWING_CN);
}
init();
