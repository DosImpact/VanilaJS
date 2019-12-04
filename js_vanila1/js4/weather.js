const weather = document.querySelector(".js-weather");
const API_KEY = "5478ba6582be8963c227dd6cb6136cb2";
const COORDS = "coords";

function getWeather(lat, log) {
  //데이터를 완전히 얻어오고 나면 then을 이용해서 함수를 부른다.
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`
  )
    .then(function(Response) {
      return Response.json();
    })
    .then(function(json) {
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `${temperature} @ ${place}`;
    });
  //받아온 함수를 보니 Response 이고 네트워크 정보들이 가득하다. 실제 쓰고 싶은 정보는 body안에 들어 있다.
  //하지만 response.json을 보니 여전히 데이터를 받아와서 처리중이다. 그럼 then을 한번 더 써주어 처리를 하자.
}
function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
  console.log(position.coords.latitude, position.coords.longitude);
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  //js에서 key 값과 value 값이같다면 다음과 같이 하나만 써주면 된다.
  const coordsObj = {
    latitude,
    longitude
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}
function handleGeoError() {
  console.log("cannot geo fun");
}
function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}
//위치정보를 한번 저장해 두니까 다시는 물어보지 않는다..
function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    //getWeather
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();
