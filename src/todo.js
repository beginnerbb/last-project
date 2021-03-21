import "./styles.css";

const form = document.querySelector(".js-form");
const todoInput = form.querySelector(".js-input");
const ul = document.querySelector(".js-ul");

let todos = [];

function btnClick(event) {
  const li = event.target.parentNode;
  ul.removeChild(li);
  let a = parseInt(li.id, 10);
  console.log(typeof a);
  const delTodo = todos.filter(function (todo) {
    return a !== todo.id;
  });
  todos = delTodo;
  localStorage.setItem("todo", JSON.stringify(todos));
  //li의 id와 todoObj가 갖고 있는 id비교.
}

function addList(a) {
  const li = document.createElement("li");
  li.id = todos.length;
  const span = document.createElement("span");
  span.innerText = a;
  const btn = document.createElement("button");
  btn.innerText = "x";
  btn.addEventListener("click", btnClick);
  li.appendChild(span);
  li.appendChild(btn);
  ul.appendChild(li);
}

function submitEvent(event) {
  event.preventDefault();
  let todoObj = {};
  const a = todoInput.value;
  todoObj.text = a;
  todoObj.id = todos.length + 1;
  console.log(todoObj);
  todos.push(todoObj);
  console.log(todos.length);
  console.log(Array.isArray(todos));
  localStorage.setItem("todo", JSON.stringify(todos));
  addList(a, todos);
  todoInput.value = "";
}

function refresh() {
  const item = localStorage.getItem("todo");
  if (item !== null) {
    const items = JSON.parse(item);
    console.log(Array.isArray(item));
    console.log(typeof item);
    items.forEach(function (b) {
      todos.push(b);
      console.log(todos);
      addList(b.text);
    });
  }
}

function init() {
  form.addEventListener("submit", submitEvent);
  refresh();
}

init();
