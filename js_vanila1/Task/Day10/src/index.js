const myRange = document.querySelector("#myRange");
const myRangeDisplay = document.querySelector("#myRangeDisplay");

const inputRangeInput = document.querySelector(".js-inputRangeInput");
const inputRangeButton = document.querySelector(".js-inputRangeButton");
const result = document.querySelector(".js-result");

let maxValue = 100;
let playerChoice = 0;
function handleInput(event) {
  const value = parseInt(event.target.value);
  const min = parseInt(event.target.min);
  myRangeDisplay.innerHTML = `Generate a number between ${min} and ${value}`;
  maxValue = value;
}
function handleSubmit(event) {
  event.preventDefault();
  playerChoice = parseInt(inputRangeInput.value);
  const machineChoice = Math.floor(Math.random() * maxValue);
  if (machineChoice === playerChoice) {
    result.innerHTML = `You chose ${playerChoice}, the machine chose:${machineChoice}. <b>You WIN!</b>`;
  } else {
    result.innerHTML = `You chose ${playerChoice}, the machine chose:${machineChoice}. <b>You LOST!</b>`;
  }
}
function init() {
  console.dir(myRange);
  myRange.addEventListener("input", handleInput);
  inputRangeButton.addEventListener("submit", handleSubmit);
  //myRange.addEventListener("change", showVal);
}
init();
