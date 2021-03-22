const getTasks = require('./model').getTasks;
const saveTasks = require('./model').saveTasks;

let obj = getTasks();


function deleteTask(searched){

	function checkId(element){
		return element.id==searched;
	}
	
	if(obj.findIndex(checkId)!=-1){
		obj.splice(obj.findIndex(checkId),1);
		saveTasks(obj);
		console.log(`Task with ID: ${searched} has been deleted.`);
	}else{
		console.log(`WARNING: Task with ID: ${searched} is NOT found.\nThere were NOT changes in the tasks` );
	}
}

module.exports = deleteTask;