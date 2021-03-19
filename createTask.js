const Task = require('./task');
const getTasks = require('./model').getTasks;
const setTask = require('./model').setTask;

var tasks = [];

let obj = getTasks();

tasks.push(obj);

function createTask(task){
    tasks.push(task);
    setTask(tasks);
    console.log(`Tarea ${task.id} creada!`);
}

module.exports = createTask;