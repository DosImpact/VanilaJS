//console,alert은 빌트인 함수이다.
console.log(console);

function sayhello(prefix, suffix) {
  console.log(prefix, "say To ", suffix);
  console.log(prefix + " say To " + suffix);
}
function sayhello2(arg1, arg2) {
  console.log(`${arg1} say to ${arg2}`);
}

sayhello("Mon", "father");
sayhello2("sister", "brother");
// js에 문자열은 "" '' `` 3개로 가능하다.
//` 은 backtick이라고 부른다.

// 함수는 객체의 맴버로 들어갈수있다.

const calculator = {
  plus: function(a, b) {
    return a + b;
  },
  minus: function(a, b) {
    return a - b;
  },
  multi: function(a, b) {
    return a * b;
  },
  division: function(a, b) {
    return a / b;
  }
};
let result = calculator.plus(3, 5);
console.log(result);

// DOM document object model 은 html문서를 모든 객체로 만든다.
const title = document.getElementById("title");
console.log(title.innerText);
console.dir(title);
title.style.color = "red";
//왠만해서는 쿼리스트링을 쓰는게 간편함.~
const title2 = document.querySelector("#title");
title2.innerText = "Wokring~";
