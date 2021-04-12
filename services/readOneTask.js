const { getTasks } = require('../models/model');
const { askTaskId } = require('../controllers/inquirer');

async function readOneTask(){
    const answer = await askTaskId();
    const tasks = getTasks();
    tasks.forEach(element => {
        if(element.id == answer.id){
            console.log(element)
        }
    })
}

module.exports = readOneTask;
