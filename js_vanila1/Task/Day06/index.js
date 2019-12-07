const selectElement = document.querySelector(".country");
const COUNTRY_LS = "country";
const options = document.querySelectorAll("option");

function saveCountry(text) {
  localStorage.setItem(COUNTRY_LS, text);
}
function getCountry() {
  return localStorage.getItem(COUNTRY_LS);
}
function selectEvent() {
  const currentCountry = getCountry();
  if (currentCountry !== null) {
    //options를 돌면서 value가 current라면 , selected를 true로 바꾼다.
    options.forEach(Element => {
      if (Element.value === currentCountry) {
        Element.selected = true;
      }
    });
  }
  selectElement.addEventListener("change", event => {
    console.log(event.target.value);
    if (event.target.value !== "") {
      saveCountry(event.target.value);
    }
  });
}

function init() {
  selectEvent();
}
init();
