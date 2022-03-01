let newTaskBtn = document.querySelector(".new-task-button");
let modal = document.querySelector(".modal");
let addTaskBtn = document.querySelector(".addtask");
let todoList = document.querySelector(".todo-list");
let list = document.createElement("ol");

newTaskBtn.addEventListener("click", () => {
  modal.style.display = "block";
  newTaskBtn.style.display = "none";
});
addTaskBtn.addEventListener("click", () => {
  let taskInput = document.querySelector(".taskinput").value;
  let delBtn = document.createElement("i");
  let listItem = document.createElement("li");

  // input validation
  if (taskInput == "") {
    alert("You have not Enter any Todo list item");
  } else {
    let listItem = document.createElement("li");
    listItem.classList.add("my-list");
    listItem.textContent = taskInput;
  }

  listItem.classList.add("my-list");
  delBtn.classList.add("fa", "fa-trash");

  listItem.textContent = taskInput;
  listItem.appendChild(delBtn);
  list.appendChild(listItem);

  todoList.appendChild(list);

  modal.style.display = "none";
  newTaskBtn.style.display = "block";

  delBtn.addEventListener("click", () => {
    listItem.remove();
  });
});
