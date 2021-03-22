const Task = require('./task');
const getTasks = require('./model').getTasks;
const saveTasks = require('./model').saveTasks;

var tasks = getTasks();

function updateTask(searched){
    tasks.push(task);
    saveTasks(tasks);
    console.log(`Tarea ${task.id} creada!`);
}

module.exports = createTask;