const getTasks = require('./model').getTasks;
const saveTasks = require('./model').saveTasks;

var tasks = getTasks();

function updateTask(searched){

	const date = new Date();
    
	function checkId(element){
		return element.id==searched;
	}
	
	if(tasks.findIndex(checkId)!=-1){
		let index=tasks.findIndex(checkId);
		let task=tasks[index];
		
		switch(task.state){
			case 'To_Do':
				console.log(`The task's previous was ${task.state}. Assigning "Doing" as state.\n`);
				task.state="Doing";
				saveTasks(tasks);
				break;
			case 'Doing':
				console.log(`The task's previous was ${task.state}. Assigning "Done" as state.\n`);
				task.state="Done";
				task.end= date.getDate() + "-"+ parseInt(date.getMonth()+1)+ "-" + date.getFullYear();
				saveTasks(tasks);
				break;   
			case 'Done':
				console.log(`The task's previous was ${task.state}. Assigning "To_Do" as state.\n`);
				task.state="To_Do";
				task.end= "";
				saveTasks(tasks);
				break;
			case undefined:
				console.log(`Task's previous state not found. Assigning "To_Do" as state.\n`);
				task.state="To_Do";
				saveTasks(tasks);
				break;
			default:
				console.log(`The task's previous was ${task.state}. Assigning "To_Do" as state.\n`);
				task.state="To_Do";
				saveTasks(tasks);		
				break;
		}
	}		
}

module.exports = updateTask;