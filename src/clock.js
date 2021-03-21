const div = document.querySelector("div");
const h2 = div.querySelector(".h2-clock");
const h4 = div.querySelector(".h4-clock");
const h4second = div.querySelector(".h4-seconds");
const date = new Date();

const getDate = date.getDate();

const month12 = [
  "January",
  "February",
  "March",
  "Apri",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const month = date.getMonth();

const year = date.getFullYear();

const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
const day = date.getDay();

h4.innerHTML = `${year} ${month12[month]} ${getDate} ${days[day]}.`;

function getTime() {
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  h2.innerHTML = `${hour < 10 ? `0${hour}` : hour}:${
    minute < 10 ? `0${minute}` : minute
  }`;
  h4second.innerHTML = `${second < 10 ? `0${second}` : second}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
