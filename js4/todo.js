//작은 js 모듈들이 합쳐졌을때 const 상수 이름들이 충돌하면 안된다.

//document에서(최상위) 쿼리 설렉터 가능 -> toDoFrom(하위 요소에서) 쿼리 설렉팅도 가능!!
const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

//버튼이 눌린거는 알겠는데, 어떤버튼이 눌렸는지는 모름 ---> event.target
function deleteToDo(event) {
  //이제는 어떤 버튼인지는 알겠는데,어떤경로로 왔는지 모르겠어-> dir출력 & parentNode정보를 알게됨.
  //console.dir(event.target.parentNode);
  //HTML상에서만 제거
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  //순회결과 filterFn이 참인것들로 새로운 array 만듦.
  const cleanToDos = toDos.filter(function(toDo) {
    //주의!! - toDo.id는 숫자이고 , li.id는 string형이다.
    console.log(toDo.id, li.id);
    return toDo.id !== parseInt(li.id);
  });
  console.log(cleanToDos);
  toDos = cleanToDos;
  saveToDos();
}
function saveToDos() {
  //js object ---> stringㅇ로 만들어 저장.
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}
function paintToDo(text) {
  //태그생성
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerHTML = "X";
  delBtn.addEventListener("click", deleteToDo);
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  span.innerText = text;

  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);

  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj);
  saveToDos();
}
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function something(toDo) {
      paintToDo(toDo.text);
    });
  }
}
function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}
init();
