const Task = require('./task');
const getTasks = require('./model').getTasks;
const setTask = require('./model').saveTasks;

let obj = getTasks();


function deleteTask(searched){

	function checkId(element){
		return element.id==searched;
	}
	
	if(obj.findIndex(checkId)!=-1){
		obj.splice(obj.findIndex(checkId),1);
		setTask(obj);
		console.log(`La tarea con ID: ${searched} ha sido eliminada.`);
	}else{
		console.log(`AVISO: No se encuentra la tarea con ID: ${searched}\nNO se ha eliminado nada` );
	}
}

module.exports = deleteTask;


