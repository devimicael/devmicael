import SERVER from "../server/server.js";
import showTasks from "../util/show-tasks.js";

export default function editTask() {
    const todoCreate = document.querySelector(".todo-create");
    const todoEdit = document.querySelector(".todo-edit");

    document.addEventListener("click",  e => {
        const element = e.target;

        if(element.matches("[data-button='edit']")) {
            todoCreate.classList.add("hidden");
            todoEdit.classList.add("active");
            
            const container = element.closest(".todo-list-container");
            
            if(container) {
                const task = SERVER.getItemByid(+container.dataset.id);
                todoEdit.querySelector("input#edit").placeholder = task.todo;
                
                const form = todoEdit.querySelector("form");

                function handleSubmitEdit(e) {
                    e.preventDefault();
    
                    const data = new FormData(form);
                    const dataObject = Object.fromEntries(data);
                    SERVER.update(task.id, dataObject.edit);
                    showTasks();

                    form.removeEventListener("submit", handleSubmitEdit);
                    todoCreate.classList.remove("hidden");
                    todoEdit.classList.remove("active");
                }

                form.addEventListener("submit", handleSubmitEdit);
            }
        }

        if(element.matches("[data-button='cancel']")) {
            todoCreate.classList.remove("hidden");
            todoEdit.classList.remove("active");
        }
    });
}