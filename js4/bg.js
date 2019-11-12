const body = document.querySelector("body");
const container = document.querySelector(".changeBG");

const IMG_NUMBER = 8;

function BackgroundChange() {
  const img = document.querySelector("img");
  const imageNumber = genRandom();
  img.src = `images/${imageNumber + 1}.jpg`;
}

//이미지 API에서 불러온다면, 이 기능이 필요할거다.
function handleImgLoad() {
  console.log("image loaded");
}
function paintImage(imageNumber) {
  const image = new Image();
  image.src = `images/${imageNumber + 1}.jpg`;
  image.addEventListener("loadend", handleImgLoad);
  image.classList.add("bgImage");
  body.prepend(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}
function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
  container.addEventListener("click", BackgroundChange);
}
init();
