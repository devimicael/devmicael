import SERVER from "./server/server.js";
import showTasks from "./util/show-tasks.js";

SERVER.onLoad();
showTasks();

import createTask from "./module/create-task.js";
import deleteTask from "./module/delete-task.js";
import doneTask from "./module/done-task.js";
import editTask from "./module/edit-task.js";

createTask();
deleteTask();
doneTask();
editTask();

import searchInput from "./module/search-input.js";
searchInput();