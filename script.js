const addTask = document.getElementById("add-task");
const inputTag = document.getElementById("user-input");
const todoContainer = document.getElementById("to-conatainer");

var toDoList = [];
let idValue = 1

const onAddTask = (task) => {
  if (task === "") {
    alert("enter a task");
    return;
  }

  const todoData = {
    id: ++idValue + "id",
    tittle: task,
    isCompleted: false,
  };


  inputTag.value = ""
  toDoList.push(todoData);
};

const deleteTodo = (todoId) =>{
    toDoList = toDoList.filter(each => each.id !== todoId)
    renderToDoTask(toDoList)
}

function checkTodo(todoId) {
  toDoList.forEach((todo) => {
    if (todo.id === todoId) {
      todo.isCompleted = !todo.isCompleted;
      console.log(todo.tittle);
    }
  });

  renderToDoTask(toDoList);

  return;
}

const renderToDoTask = (toDoList) => {
  console.log(toDoList);
  let html = ``;

  toDoList.forEach((todo, i) => {
    html += `
            <li class="flex items-center justify-between rounded-md border-1 border-blue-500 bg-white gap-2 px-2 py-3">
                <div class="flex items-center gap-2">
                    <p>${i + 1}</P>
                    <h1 class="text-md font-semibold">${todo.tittle}</h1>
                </div>
                <div>
                    <button onclick="checkTodo('${todo.id}')">
                ${
                  todo.isCompleted
                    ? `<i class="bi bi-check-circle-fill"></i>`
                    : `<i class="bi bi-check-circle"></i>`
                }
                </button>
                <button onclick="deleteTodo('${
                  todo.id
                }')"><i class="bi bi-trash3"></i></button>
                </div>
            </li>
        `;
  });
  todoContainer.innerHTML = html;

  return;
};

addTask.addEventListener("click", () => {
  onAddTask(inputTag.value);
  renderToDoTask(toDoList);
});
