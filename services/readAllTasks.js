const { getTasks } = require('../models/model');

function readAllTasks() {
    const tasks = getTasks();
    tasks.forEach(element => {
        console.log(element);
    })
    
}

module.exports = readAllTasks;
