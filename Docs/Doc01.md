# 변수

```js
alert("HI world!!");
console.log("Im here");
```

```js
const a = 777; /* 상수로 선언 */
let b = a - 111; /*변수로 선언 */
var c = a + b; // var은 쓰지 말것, 이제는 let아니면 const로 써
console.log(b);
```

```js
//string,bool,array
const what = "Nicolas";
const watt = true;
const watf = false;
const dayOfWeek = ["Mon", "Tue", "Wed", true, 1, 20.3]; // 낙타등 명명 규칙 - 띄어쓰기 대신에 대문자를 써준다.
console.log(dayOfWeek);
```

```js
//make object
const nicoInfo = {
  name: "Nico",
  age: 33,
  gender: "Male",
  isHandsome: true,
  favMovies: ["Oldboy", "SilverTown"],
  favFood: [
    { name: "Kimchi", fatty: false },
    { name: "Lynn", fatty: false }
  ]
};
console.log(nicoInfo);
// const nicoInfo : nicoInfo자체를 바꿀수는없지만, 변수값은 변경가능.
```

# 함수

```js
function sayhello(prefix, suffix) {
  console.log(prefix, "say To ", suffix);
  console.log(prefix + " say To " + suffix);
}

function sayhello2(arg1, arg2) {
  console.log(`${arg1} say to ${arg2}`); // ``을 쓰고 안의 변수는 ${} 을 이용해서 나타낸다.
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
```

# Element

```js
// DOM document object model 은 html문서를 모든 객체로 만든다.
const title = document.getElementById("title");
console.log(title.innerText);

//title에 대한 어트리뷰트를 출력해준다.★★★★★
console.dir(title);

title.style.color = "red";
//왠만해서는 쿼리설렉터 쓰는게 간편함.~
const title2 = document.querySelector("#title");
title2.innerText = "Wokring~";
```
