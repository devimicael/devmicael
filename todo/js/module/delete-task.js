import SERVER from "../server/server.js";
import showTasks from "../util/show-tasks.js";

export default function deleteTask() {
    document.addEventListener("click", e => {
        const element = e.target;

        if(element.matches("[data-button='delete']")) {
            const container = element.closest(".todo-list-container");

            SERVER.remove(container.dataset.id);
            showTasks();
        }
    });
}