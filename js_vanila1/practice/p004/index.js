let todoList = [];
const List_LS = "listitem";
const seedItem = document.querySelector(".seeditem");
const itemList = document.querySelector(".js-itemlist");

function saveItem() {
  const item = {
    name: "hellow",
    content: "Examples!~"
  };
  todoList.push(item);
  localStorage.setItem(List_LS, JSON.stringify(todoList));
}
//todoList의 정보를 가져와, listitem만들기
function loadItem() {
  const items = localStorage.getItem(List_LS);
  if (items !== null) {
    const LSItems = JSON.parse(items);
    LSItems.forEach(element => {
      todoList.push({ name: element.name, content: element.content });
    });

  }
  
}
function printList(element){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerText = 
}
function init() {
  seedItem.addEventListener("click", saveItem);
  loadItem();
}
init();
