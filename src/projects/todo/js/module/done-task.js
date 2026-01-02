export default function doneTask() {
    document.addEventListener("click", (e) => {
        const element = e.target;
        if(element.matches("[data-button='done']")) {
            const container = element.closest(".todo-list-container");
            container.classList.toggle("done");
        }
    });
}