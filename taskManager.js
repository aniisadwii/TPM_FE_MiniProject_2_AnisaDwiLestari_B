export const addTask = (tasks, newTask) => {
  return [...tasks, newTask];
};

export const removeTask = (tasks, id) => {
  return tasks.filter((task) => task.id !== id);
};
