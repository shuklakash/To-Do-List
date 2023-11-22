document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var taskInput = document.getElementById('task-input');
    var taskText = taskInput.value.trim();

    if (taskText) {
        var taskElement = document.createElement('li');
        taskElement.classList.add('task');
        taskElement.textContent = taskText;

        document.getElementById('task-list').appendChild(taskElement);
        taskInput.value = '';
    }
});