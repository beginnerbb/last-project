const API_key = "aa0f567eddadf4e11b5b96db1705c562";
const span = document.querySelector(".js-weather");

function getWeather(lon, lat) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const temp = json.main.temp;
      const place = json.name;
      span.innerHTML = `${temp}C & ${place}`;
    });
}

function success(position) {
  const longitude = position.coords.longitude;
  const latitude = position.coords.latitude;
  let coordsObj = { longitude, latitude };
  const b = JSON.stringify(coordsObj);
  console.log(typeof b);
  localStorage.setItem("coords", b);
  getWeather(longitude, latitude);
}

function error() {
  console.log("Can't get geolocation.");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(success, error);
}

function init() {
  //const a = localStorage.getItem("coords");
  askForCoords();
}

init();
