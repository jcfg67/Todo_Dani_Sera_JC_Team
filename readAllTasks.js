const getTasks = require('./model').getTasks;

var tasks = [];

obj = getTasks();

tasks.push(obj);

function readAllTasks(){
    tasks.forEach(element => {
        console.log(element);
    })
    
}

module.exports = readAllTasks;