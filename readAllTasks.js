const getTasks = require('./model').getTasks;

let tasks = getTasks();

function readAllTasks() {
    tasks.forEach(element => {
        console.log(element);
    })
    
}

module.exports = readAllTasks;
