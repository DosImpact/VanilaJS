const indexJsFrom = document.querySelector(".js-from");
const indexJsFromInput = document.querySelector(".js-from__input");
const indexPendingList = document.querySelector(".pending__list");
const indexFinishedList = document.querySelector(".finished__list");

const PENDING_LS = "PENDING";
const FINISHED_LS = "FINISHED";

let pendings = [];
let finisheds = [];

function saveDate() {
  localStorage.setItem(PENDING_LS, JSON.stringify(pendings));
  localStorage.setItem(FINISHED_LS, JSON.stringify(finisheds));
}
//프린프 + RAM 상의 데이터 올리기.
function printFinished(Element) {}
function printPending(Element) {
  pendings.push(Element);
  const li = document.createElement("li"),
    span = document.createElement("span"),
    btnDel = document.createElement("button"),
    btnMove = document.createElement("button");
  li.id = Element.id;
  span.innerText = Element.text;
  btnDel.innerText = "X";
  btnDel.addEventListener("click", handlePendingDelete);
  btnMove.innerText = "DOWN";
  btnMove.addEventListener("click", handleClickDown);
  li.appendChild(span);
  li.appendChild(btnDel);
  indexPendingList.appendChild(li);
}
//폼엔터시 패딩에 추가
function handleSubmit(event) {
  event.preventDefault();
  const id = pendings.length + finisheds.length;
  const Element = {
    id: id,
    text: indexJsFromInput.value
  };
  printPending(Element);
  indexJsFromInput.value = "";
  saveDate();
}
function handleClickDown(event) {
  saveDate();
}
//패딩에서만 지워진다.
function handlePendingDelete(event) {
  const btn = event.target;
  console.dir(btn);
  const li = btn.parentNode;
  indexPendingList.removeChild(li);
  const clearedArray = pendings.filter(e => {
    return e.id !== parseInt(li.id);
  });
  pendings = clearedArray;
  saveDate();
}
function init() {
  indexJsFrom.addEventListener("submit", handleSubmit);
  const currentDatePending = localStorage.getItem(PENDING_LS);
  if (currentDatePending !== null) {
    const datesP = JSON.parse(currentDatePending);
    datesP.forEach(Element => {
      printPending(Element);
    });
  }
  const currentDateFinished = localStorage.getItem(FINISHED_LS);
  if (currentDateFinished !== null) {
    const datesF = JSON.parse(currentDateFinished);
    datesF.forEach(Element => {
      printFinished(Element);
    });
  }
}
init();
