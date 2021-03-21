const userForm = document.querySelector(".userName-form"),
  input = userForm.querySelector(".userName-input"),
  h3 = document.querySelector(".h3");

const user = localStorage.getItem("user");

function handleSubmit(event) {
  event.preventDefault();
  input.classList.add("none");
  const a = input.value;
  localStorage.setItem("user", a);
  h3.innerHTML = `Hello ${a}!`;
  input.value = "";
}

function init() {
  if (user === null) {
    userForm.addEventListener("submit", handleSubmit);
  } else if (user !== null) {
    input.classList.add("none");
    h3.innerHTML = `Hello ${user}!`;
  }
}

init();
