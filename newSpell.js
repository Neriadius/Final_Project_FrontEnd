window.onload = function() {
    loadTasks();
}

function addNew() {
    let label = document.getElementById("title").value.trim();
    let descr = document.getElementById("discr").value.trim();
    let cost = document.getElementById("cost").value.trim();
    let school = document.getElementById("school").value.trim();

    if (!label || !descr || !cost || !school) {
        alert("Please fill in all fields!");
        return;
    }

    let task = {
        label: label,
        descr: descr,
        cost: cost,
        school: school,
        done: false 
    };

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    renderTask(task);

    document.getElementById("title").value = "";
    document.getElementById("discr").value = "";
    document.getElementById("cost").value = "";
    document.getElementById("school").value = "";
}

function renderTask(task) {
    let list = document.getElementById("list");

    let newItem = document.createElement("li");
    newItem.innerHTML = `
        <div class="task-header">
            <h3 ${task.done ? 'style="text-decoration: line-through;"' : ''}>
                ${task.label} <span class="">(${task.school}, Cost: ${task.cost})</span>
            </h3>
            <div class="task-buttons">
                <button type="button" onclick="removeTask(this)">
                    <img src="remove.png" alt="Remove">
                </button>
            </div>
        </div>
        <div class="task-desc">
            <p ${task.done ? 'style="text-decoration: line-through;"' : ''}>${task.descr}</p>
        </div>
    `;
    list.appendChild(newItem);
}

function removeTask(button) {
    if (confirm("Are you sure you want to remove this spell?")) {
        let li = button.closest("li");
        let label = li.querySelector("h3").innerText.split(" (")[0];

        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks = tasks.filter(t => t.label !== label);
        localStorage.setItem("tasks", JSON.stringify(tasks));

        li.remove();
    }
}



function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => renderTask(task));
}
