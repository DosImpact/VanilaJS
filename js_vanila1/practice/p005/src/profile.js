const profileTitle = document.querySelector(".profile__title");
const profileInput = document.querySelector(".profile__input");
const profileForm = document.querySelector(".profile__form");

const USERNAME_LS = "USER";
const SHOWING_CN = "showing";
function handleSubmit(event) {
  event.preventDefault();
  console.log(profileInput.value);
  printName(profileInput.value);
}
function saveName(name) {
  localStorage.setItem(USERNAME_LS, name);
}
function printName(name) {
  profileTitle.innerHTML = `Hello! ${name}`;
  profileForm.classList.remove(SHOWING_CN);
  profileTitle.classList.add(SHOWING_CN);
  saveName(name);
}
function askForName() {
  profileForm.addEventListener("submit", handleSubmit);
  profileForm.classList.add(SHOWING_CN);
}
function init() {
  const currentName = localStorage.getItem(USERNAME_LS);
  if (currentName === null) {
    askForName();
  } else {
    printName(currentName);
  }
}
init();
