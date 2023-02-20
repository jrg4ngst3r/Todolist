//form buttons
const addNewTask = document.querySelector("#new-task");
const cancelTask = document.querySelector("#cancel-task");

//dialog
const addTask = document.querySelector("#add-task");

//open and close dialog (x && +)
const newTask = document.querySelector("#open-dialog");
const closeDialog = document.querySelector("#close-dialog");

//ul with tasks
const taskList = document.querySelector("#task-list");

//form and inputs
const taskForm = document.querySelector("#task-form");
const nameForm = document.querySelector("#form-name");
const typeForm = document.querySelector("#form-type");
const descForm = document.querySelector("#form-desc");
// const prioForm = document.querySelector("#form-prio");

console.log(addNewTask);

let tasks = [];
class Task {
  constructor(title, description, type, priority) {
    this._title = title;
    this._description = description;
    this._type = type;
    this._priority = priority;
  }

  print() {
    return `<div class="task">
    <div class="task__text">
    <span>${this._title}</span>
    <small>${this._description}</small>    
    </div>
      <div class="task__btns">
          <input class="form-check-input" type="checkbox">
        <a class="btn btn-sm btn-danger" href="#">Borrar</a>
      </div>
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
  // let formData = new FormData(taskForm);
  // console.log("entreee", Object.fromEntries(formData));
  // alert(nameForm.value);
  let nuevaTarea = new Task(
    nameForm.value,
    descForm.value,
    typeForm.value,
    "23"
  );
  taskList.innerHTML += nuevaTarea.print();
});
