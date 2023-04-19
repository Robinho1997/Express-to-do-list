const input = document.getElementById("input-to-do");
const addBtn = document.getElementById("add-btn");
const container = document.querySelector("container");


getItems();
function getItems() {
  fetch("http://localhost:3000/todos")
    .then((response) => response.json())
    .then((data) => {
      if (data.length > 0) {
        displayToDos(data);
      }
    })
    .catch((err) => console.log(err));
}

function addToDo() {
  const todo = { todo: input.value };
  fetch("http://localhost:3000/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      displayToDos(data);
    })
    .catch((err) => console.log(err));
}

addBtn.addEventListener("click", addToDo);

function displayToDos(todos) {
  container.innerHTML = "";
  todos.forEach((element, i) => {
    const p = document.createElement("p");
    p.innerHTML = element.todo;
    const btn = document.createElement("button");
    btn.innerHTML = "Delete";
    btn.addEventListener("click", () => {
      deleteToDo(i);
    });
    p.appendChild(btn);
    container.appendChild(p);
  });
}

function deleteToDo(id) {
  fetch(`http://localhost:3000/todos/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      displayToDos(data);
    })
    .catch((err) => console.log(err));
}
