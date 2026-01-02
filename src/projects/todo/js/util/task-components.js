export default function containerTask(task) {
    const container = document.createElement("div");
    container.classList.add("todo-list-container");
    container.dataset.id = task.id;

    const title = document.createElement("h3");
    title.textContent = task.todo;

    const containerActions = document.createElement("div");
    containerActions.classList.add("todo-actions");

    const buttonstype = ["done", "edit", "delete"];
    for(let i = 0; i < buttonstype.length; i++) {
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = buttonstype[i];
        button.dataset.button = `${buttonstype[i]}`;

        containerActions.appendChild(button);
    }

    container.appendChild(title);
    container.appendChild(containerActions);

    return container;
}