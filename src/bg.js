const body = document.querySelector("body");

const num = 3;
const a = Math.ceil(Math.random() * num);

const img = new Image();
img.src = `image/${a}.jpg`;
img.classList.add("bgimg");
body.appendChild(img);
