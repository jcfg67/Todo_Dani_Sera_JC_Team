const getTasks = require('./model').getTasks;

obj = getTasks();

function readOneTask(id){
    obj.forEach(element => {
        if(element.id == id){
            console.log(element);
        }
    })
    
}

module.exports = readOneTask;