let todoInputBox = document.querySelector(".todo-input").firstElementChild;
window.onload = (event) => {
  todoInputBox.focus();
};

const createTodoTask = (taskName) => {
  let li = document.createElement("li");
  li.className = "todo-list-item";
  setTimeout(() => {
    li.classList.add("show");
  }, 100);
  let todoTaskTemplate = `
            <input type="checkbox" name="todo-item-check" class="todo-item-checkbox" />
            <div class="todo-task-title">${taskName}</div>
            <div class="todo-task-action">
              <input type="button" value="Delete" class="delete-task-text"/>
              <input type="button" value="Edit"  class="edit-task-text"/>
            </div>
        `;
  li.innerHTML = todoTaskTemplate;

  let todoList = document.querySelector(".todo-list");
  todoList.appendChild(li);

  let taskCount = document.querySelector(".todo-list").childElementCount;
  console.log("taskCount", taskCount);
  if (taskCount > 0) {
    updateCount();
    let checkBox = li.querySelector(".todo-item-checkbox");
    console.log("checkBox", checkBox);

    checkBox.addEventListener("change", (e) => {
      console.log(checkBox.checked);
      let taskName = li.querySelector(".todo-task-title");
      if (checkBox.checked) {
        taskName.classList.add("todo-element-checked");
      } else {
        taskName.classList.remove("todo-element-checked");
      }
      updateCount();
    });

    let deleteButton = li.querySelector(".delete-task-text");

    deleteButton.addEventListener("click", (e) => {
      const taskItem = e.target.closest("li");
      taskItem.classList.add("fade-out");
      setTimeout(() => {
        li.remove();
        updateCount();
      }, 300);
    });

    let editButton = li.querySelector(".edit-task-text");

    editButton.addEventListener("click", (e) => {
      let taskNameParent = e.target.closest(".todo-list-item");
      let taskName = taskNameParent.querySelector(".todo-task-title");
      console.log("taskName ", taskName);

      let taskItemUpdated = prompt("Enter Task Name");
      console.log(taskItemUpdated);

      if (taskItemUpdated && taskItemUpdated.trim()) {
        taskName.textContent = taskItemUpdated.trim();
        taskNameParent.classList.add("flash");
        setTimeout(() => taskNameParent.classList.remove("flash"), 400);
      }
      updateCount();
    });
  }
};

let addTaskButton = document.querySelector("#add-task-button");
addTaskButton.addEventListener("click", () => {
  let taskName = document.querySelector("#add-task-text").value.trim();
  if (!taskName) {
    alert("please add a task");
    return;
  }
  createTodoTask(taskName);
  document.querySelector("#add-task-text").value = "";
  todoInputBox.focus();
});

document.querySelector("#add-task-text").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTaskButton.click();
  }
});

const updateCount = () => {
  let totalCount = document.querySelector(".todo-list").childElementCount;
  let completedCount = document.querySelectorAll(
    ".todo-item-checkbox:checked"
  ).length;
  let uncompletedCount = totalCount - completedCount;

  document.getElementById("total-count").textContent = totalCount;
  document.getElementById("completed-count").textContent = completedCount;
  document.getElementById("uncompleted-count").textContent = uncompletedCount;
};
