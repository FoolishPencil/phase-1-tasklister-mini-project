document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();


    const taskInput = document.getElementById('new-task-description').value;


    if (taskInput.trim() !== "") {
      const taskList = document.getElementById('tasks');

      const taskItem = document.createElement('li');
      taskItem.textContent = taskInput;

      taskList.appendChild(taskItem);
      form.reset();
    }
  });
});
