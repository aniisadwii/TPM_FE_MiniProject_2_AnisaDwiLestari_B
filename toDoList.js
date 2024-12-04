import { addTask, removeTask } from "./taskManager.js";

document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("task-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const taskList = document.getElementById("task-list");

  let tasks = [
    {
      id: 1,
      title: "Create budgeting plan for yearly event",
      completed: false,
    },
    {
      id: 2,
      title: "Design power point presentation",
      completed: false,
    },
    {
      id: 3,
      title: "Finish assignment",
      completed: false,
    },
    {
      id: 4,
      title: "Attend meeting at 19.30 AM",
      completed: false,
    },
  ];

  const renderTasks = () => {
    taskList.innerHTML = "";
    tasks.forEach((task) => {
      const taskItem = document.createElement("li");
      taskItem.className = `task-item ${task.completed ? "completed" : ""}`;

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = task.completed;
      checkbox.addEventListener("change", () => {
        task.completed = checkbox.checked;
        renderTasks();
      });

      const taskText = document.createElement("span");
      taskText.textContent = task.title;

      const deleteIcon = document.createElement("img");
      deleteIcon.src = "./assets/close.png";
      deleteIcon.alt = "Delete";
      deleteIcon.addEventListener("click", () => {
        tasks = removeTask(tasks, task.id);
        renderTasks();
      });

      taskItem.appendChild(checkbox);
      taskItem.appendChild(taskText);
      taskItem.appendChild(deleteIcon);
      taskList.appendChild(taskItem);
    });
  };

  renderTasks();

  addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
      const newTask = {
        id: Date.now(),
        title: taskText,
        completed: false,
      };
      tasks = addTask(tasks, newTask);
      taskInput.value = "";
      renderTasks();
    }
  });
});
