function addTask() {
    var taskInput = document.getElementById("task-input");
    var taskList = document.getElementById("task-list");

    if (taskInput.value !== "") {
        var taskItem = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", function () {
            if (this.checked) {
                taskItem.classList.add("completed");
            } else {
                taskItem.classList.remove("completed");
            }
            filterTasks(); 
        });
        taskItem.appendChild(checkbox);

        var taskText = document.createElement("span");
        taskText.textContent = taskInput.value;
        taskItem.appendChild(taskText);

        taskList.appendChild(taskItem);

        taskInput.value = "";
    }
}
function clearList() {
    var taskList = document.getElementById("task-list");
    taskList.innerHTML = "";
}
function filterTasks() {
    var taskItems = document.querySelectorAll("#task-list li");
    var filterSelect = document.getElementById("filter-select");
    var filterValue = filterSelect.value;

    taskItems.forEach(function (taskItem) {
        if (filterValue === "all") {
            taskItem.style.display = "block";
        } else if (filterValue === "pending") {
            taskItem.style.display = taskItem.classList.contains("completed") ? "none" : "block";
        } else if (filterValue === "completed") {
            taskItem.style.display = taskItem.classList.contains("completed") ? "block" : "none";
        }
    });
}
