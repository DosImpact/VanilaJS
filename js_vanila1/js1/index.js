/*
alert("HI world!!");
console.log("Im here");

*/

const a = 777; /* 상수로 선언 */
let b = a - 111; /*변수로 선언 */
var c = a + b; // var은 쓰지 말것, 이제는 let아니면 const로 써
console.log(b);

//string,bool,array
const what = "Nicolas";
const watt = true;
const watf = false;
const dayOfWeek = ["Mon", "Tue", "Wed", true, 1, 20.3]; // 낙타등 명명 규칙 - 띄어쓰기 대신에 대문자를 써준다.
console.log(dayOfWeek);

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

//make object to array
