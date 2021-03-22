const getTasks = require('./model').getTasks;
const saveTasks = require('./model').saveTasks;

let tasks = getTasks();

function createTask(task){
    tasks.push(task);
    saveTasks(tasks);
    console.log(`Task ${task.id} saved!`);
}

module.exports = createTask;
