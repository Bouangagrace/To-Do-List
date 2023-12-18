document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
});

function addTask() {
    var taskInput = document.querySelector("#taskInput");
    var taskList = document.querySelector("#taskList");

    if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");
        li.textContent = taskInput.value;

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Supprimer";
        deleteButton.onclick = function() {
            taskList.removeChild(li);
            saveTasks();
        };

        var editButton = document.createElement("button");
        editButton.textContent = "Modifier";
        editButton.onclick = function() {
            var newTaskText = prompt("Modifier la tâche", li.textContent);
            if (newTaskText !== null) {
                li.textContent = newTaskText;
                saveTasks();
            }
        };

        li.appendChild(deleteButton);
        li.appendChild(editButton);

        taskList.appendChild(li);

        taskInput.value = "";

        saveTasks();
    }
}

function modifyTasks() {
    var taskList = document.querySelector("#taskList");
    var tasks = taskList.querySelectorAll("li");

    for (var i = 0; i < tasks.length; i++) {
        var editButton = document.createElement("button");
        editButton.textContent = "Modifier";
        editButton.onclick = function() {
            var newTaskText = prompt("Modifier la tâche", tasks[i].textContent);
            if (newTaskText !== null) {
                tasks[i].textContent = newTaskText;
                saveTasks();
            }
        };

        tasks[i].appendChild(editButton);
    }
}

function clearTasks() {
    var taskList = document.querySelector("#taskList");
    taskList.innerHTML = "";
    saveTasks();
}

function saveTasks() {
    var taskList = document.querySelector("#taskList");
    var tasks = taskList.querySelectorAll("li");

    var taskArray = [];

    for (var i = 0; i < tasks.length; i++) {
        taskArray.push(tasks[i].textContent);
    }

    localStorage.setItem("tasks", JSON.stringify(taskArray));
}

function loadTasks() {
    var taskList = document.querySelector("#taskList");
    var storedTasks = JSON.parse(localStorage.getItem("tasks"));

    if (storedTasks) {
        for (var i = 0; i < storedTasks.length; i++) {
            var li = document.createElement("li");
            li.textContent = storedTasks[i];

            var deleteButton = document.createElement("button");
            deleteButton.textContent = "Supprimer";
            deleteButton.onclick = function() {
                taskList.removeChild(li);
                saveTasks();
            };

            var editButton = document.createElement("button");
            editButton.textContent = "Modifier";
            editButton.onclick = function() {
                var newTaskText = prompt("Modifier la tâche", li.textContent);
                if (newTaskText !== null) {
                    li.textContent = newTaskText;
                    saveTasks();
                }
            };

            li.appendChild(deleteButton);
            li.appendChild(editButton);

            taskList.appendChild(li);
        }
    }
}
