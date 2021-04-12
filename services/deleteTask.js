const { saveTasks, getTasks } = require('../models/model');
const { askTaskId } = require('../controllers/inquirer');

async function deleteTask(){
    let obj = getTasks();

	const searched = await askTaskId();

	function checkId(element){
		return element.id==searched.id;
	}
	
	if(obj.findIndex(checkId)!=-1){
		obj.splice(obj.findIndex(checkId),1);
		saveTasks(obj);
		console.log(`Task with Id: ${searched.id} has been deleted.`);
	}else{
		console.log(`WARNING: Task with Id: ${searched.id} was NOT found.\nThere were NOT changes in the tasks` );
	}
}

module.exports = deleteTask;
