const Task = require('./task');
const getTasks = require('./model').getTasks;
const setTask = require('./model').saveTasks;//[Sera] Cambio .setTask por .saveTasks La primera no existe en el modelo.

var tasks = [];

let obj = getTasks();

tasks.push(obj);

function createTask(task){
    tasks.push(task);
    setTask(tasks);
    console.log(`Tarea ${task.id} creada!`);
}

module.exports = createTask;