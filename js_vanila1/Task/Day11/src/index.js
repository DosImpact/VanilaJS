const numberbtns = document.querySelectorAll(".number");
const operatorbtns = document.querySelectorAll(".operator");
const clearbtn = document.querySelector("#clear");
const display = document.querySelector("#display");
const log = document.querySelector("#log");

let currentVara = "";
let currentVarOperator = "";
let currentVarb = "";
let currentLog = "";

const cal = {
  plus: function(a, b) {
    return a + b;
  },
  minus: function(a, b) {
    return a - b;
  },
  mul: function(a, b) {
    return a * b;
  },
  div: function(a, b) {
    return a / parseFloat(b);
  }
};
function calulator(a, op, b) {
  a = parseInt(a);
  b = parseInt(b);
  if (op === "+") {
    return cal.plus(a, b);
  } else if (op === "-") {
    return cal.minus(a, b);
  } else if (op === "*") {
    return cal.mul(a, b);
  } else if (op === "/") {
    return cal.div(a, b);
  } else {
    console.error("currentVarOperator Error");
  }
}
function displayCurrentVar() {
  display.innerHTML = currentVarb;
}
function displayResultVar() {
  display.innerHTML = currentVara;
}
function displayClear(vars) {
  display.innerHTML = String(vars);
}
function displayLog() {
  log.innerHTML = currentLog;
}
function displayLog(op) {
  log.innerHTML = currentLog + " " + op;
}
function handleClickClearBtn(event) {
  currentVara = currentVarb = currentVarOperator = "";
  displayClear("0");
}
function handleClickOperatorBtn(event) {
  const operator = event.target.innerText;
  if (operator === "=") {
    const result = calulator(currentVara, currentVarOperator, currentVarb);
    currentVara = String(result);
    currentVarb = "";
    currentVarOperator = "";
    displayResultVar();
  } else {
    //operator가 사칙연산인 경우.
    //그전 계산 기록이 없는경우.
    if (currentVara === "") {
      currentVarOperator = operator;
      currentVara = currentVarb;
      currentVarb = "";
    } else {
      const result = calulator(currentVara, currentVarOperator, currentVarb);
      currentVarOperator = operator;
      currentVara = result;
      currentVarb = "";
      displayResultVar();
    }
  }
}
function handleClickNumberBtn(event) {
  const number = event.target.innerText; // 1~9까지 입력받는다.
  currentVarb += number;
  displayCurrentVar();
  console.log(currentVarb);
}
function init() {
  numberbtns.forEach(element => {
    element.addEventListener("click", handleClickNumberBtn);
  });
  operatorbtns.forEach(element => {
    element.addEventListener("click", handleClickOperatorBtn);
  });
  clearbtn.addEventListener("click", handleClickClearBtn);
}
init();
