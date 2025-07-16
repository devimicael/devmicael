import SERVER from "../server/server.js";
import containerTask from "../util/task-components.js";

export default function searchInput() {
    const form = document.querySelector(".search form");
    
    const tasks = SERVER.getTasks();
    const todoContainer = document.querySelector(".todo-list-item");

    function handleChange(e) {
        e.preventDefault();
        todoContainer.innerHTML = "";
        
        tasks.forEach(task => {
            if(task.todo.includes(e.target.value) ) {
                const container = containerTask(task);
                todoContainer.appendChild(container);
            }
        });
    }

    form.addEventListener("keyup",  handleChange);
}