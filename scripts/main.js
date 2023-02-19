const addNewTask = document.querySelector("#new-task");
const cancelTask = document.querySelector("#cancel-task");

const addTask = document.querySelector("#add-task");

const newTask = document.querySelector("#open-dialog");
const closeDialog = document.querySelector("#close-dialog");

const taskList = document.querySelector("#task-list");
const taskForm = document.querySelector("#task-form");
const nameForm = document.querySelector("#form-name");
const typeForm = document.querySelector("#form-type");
const descForm = document.querySelector("#form-desc");
// const prioForm = document.querySelector("#form-prio");

class Task {
  constructor(title, description, type, priority) {
    this._title = title;
    this._description = description;
    this._type = type;
    this._priority = priority;
  }

  print() {
    return `<div class="task">
      <span>${this._title}</span>
      
    </div>`;
  }
}

newTask.addEventListener("click", () => {
  addTask.showModal();
});

closeDialog.addEventListener("click", () => {
  addTask.close();
});

addNewTask.addEventListener("click", () => {
  tas;
});
