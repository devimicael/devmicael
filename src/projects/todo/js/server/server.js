const SERVER = {
    todos: [],
    
    genereteId: function() {
        return Date.now() + Math.floor(Math.random() * 1000);
    },

    onLoad: function() {
        this.todos = JSON.parse(localStorage.getItem("tasks")) || [];
    },

    getTasks: function() {
        return this.todos; 
    },

    save: function(task) {
        const newTask = { id: this.genereteId(), ...task };
        this.todos.push(newTask);
        localStorage.setItem("tasks", JSON.stringify(this.todos));
    },

    remove: function(id) {
        const newList = this.todos.filter(task => task.id !== +id);
        localStorage.setItem("tasks", JSON.stringify(newList));
        this.todos = newList;
    },

    getItemByid: function(id) {
        return this.todos.find((task) => task.id === id);
    },

    update: function(id, text) {
        const index = this.todos.findIndex(task => task.id === +id); 
        if (index !== -1) {
            const updatedTask = { ...this.todos[index], todo: text }; 
            console.log(updatedTask);
            this.todos[index] = updatedTask;
            localStorage.setItem("tasks", JSON.stringify(this.todos));
        }
    }
    
};

export default SERVER;
