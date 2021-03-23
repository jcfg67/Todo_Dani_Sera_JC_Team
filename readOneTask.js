const getTasks = require('./model').getTasks;

let tasks = getTasks();

function readOneTask(id){
    tasks.forEach(element => {
        if(element.id == id){
            console.log(element);
        }
    })
}

module.exports = readOneTask;
