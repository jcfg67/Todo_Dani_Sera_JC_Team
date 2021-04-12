const { saveTasks, getTasks } = require('../models/model');
const { askTaskId } = require('../controllers/inquirer');

async function updateTask(){
	let tasks = getTasks();

	const searched = await askTaskId();

	const date = new Date();
    
	function checkId(element){
		return element.id==searched.id;
	}
	
	if(tasks.findIndex(checkId)!=-1){
		let index=tasks.findIndex(checkId);
		let task=tasks[index];
		
		switch(task.state){
			case 'To_Do':
				console.log(`The previous task state was ${task.state}. Assigning "Doing" as state.\n`);
				task.state="Doing";
				saveTasks(tasks);
				break;
			case 'Doing':
				console.log(`The previous task state was ${task.state}. Assigning "Done" as state.\n`);
				task.state="Done";
				task.end= date.getDate() + "-"+ parseInt(date.getMonth()+1)+ "-" + date.getFullYear();
				saveTasks(tasks);
				break;   
			case 'Done':
				console.log(`The previous task state was ${task.state}. Assigning "To_Do" as state.\n`);
				task.state="To_Do";
				task.end= "";
				saveTasks(tasks);
				break;
			case undefined:
				console.log(`The previous task state was not found. Assigning "To_Do" as state.\n`);
				task.state="To_Do";
				saveTasks(tasks);
				break;
			default:
				console.log(`The previous task state was ${task.state}. Assigning "To_Do" as state.\n`);
				task.state="To_Do";
				saveTasks(tasks);		
				break;
		}
	}		
}

module.exports = updateTask;