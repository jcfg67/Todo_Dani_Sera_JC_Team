const getTasks = require('./model').getTasks;
const saveTasks = require('./model').saveTasks;

var tasks = getTasks();

function createTask(task){
    tasks.push(task);
    saveTasks(tasks);
    console.log(`Tarea ${task.id} creada!`);
}

module.exports = createTask;