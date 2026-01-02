import SERVER from "../server/server.js";
import containerTask from "./task-components.js";

export default function showTasks() {
    const containerTODO = document.querySelector(".todo-list .todo-list-item");
    containerTODO.innerHTML = "";

    const tasks = SERVER.getTasks();
    tasks.forEach(task => {
        const container = containerTask(task);
        containerTODO.appendChild(container);
    });
}