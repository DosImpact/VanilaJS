const weather = document.querySelector(".weather");
const APPID = "5478ba6582be8963c227dd6cb6136cb2";
const GEOLS = "geolocation";
function handleGeoSucces(data) {
  lat = data.coords.latitude;
  log = data.coords.longitude;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${APPID}&units=metric`
  )
    .then(Response => {
      return Response.json();
    })
    .then(json => {
      const weatherstate = json.weather[0].main;
      const localName = json.name;
      const temps = json.main;
      //console.log(temps);
      weather.innerHTML = `${weatherstate}(${localName})@${temps["temp"]}ºC(${temps["temp_min"]}~${temps["temp_max"]})#체감온도 ${temps["feels_like"]} `;
    });
}
function handleGeoError() {
  console.log("Error");
}
function init() {
  const currentLocation = localStorage.getItem(GEOLS);
  if (currentLocation === null) {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
  } else {
  }
}
init();
