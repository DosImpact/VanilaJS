const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

window.addEventListener("load", () => {
  //Resizing
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  //   //1 Draw filled rect
  //   ctx.fillRect(100, 100, 200, 100);
  //   //2 Draw rect line with styles
  //   ctx.strokeStyle = "red";
  //   ctx.strokeRect(200, 200, 100, 100);
  //   ctx.strokeStyle = "blue";
  //   ctx.strokeRect(210, 210, 100, 100);
  //3. canvas pointer basic
  //   ctx.beginPath();
  //   ctx.moveTo(100, 100);
  //   ctx.lineTo(200, 200);
  //   ctx.lineTo(200, 250);
  //   ctx.closePath();
  //   ctx.stroke();

  //4. variables
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
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
  }
  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("mouseup", finishedPosition);
  canvas.addEventListener("mousemove", draw);
});

//Resizing when resizewindow
// window.addEventListener("resize", () => {
//   canvas.height = window.innerHeight;
//   canvas.width = window.innerWidth;
// });
