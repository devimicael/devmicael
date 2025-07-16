import SERVER from "../server/server.js";
import showTasks from "../util/show-tasks.js";

export default function createTask() {
    const formCreate = document.querySelector(".todo-create > form");
   
    function handleCreateTask(e) {
        e.preventDefault();

        const data = new FormData(formCreate);
        const dataObject = Object.fromEntries(data);
        SERVER.save(dataObject);
        showTasks();
        formCreate.reset();
    }

   if(formCreate) {
        formCreate.addEventListener("submit", handleCreateTask);
   }
}