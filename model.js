const fs = require('fs');

const TASKS_JSON_PATH = "./tasks.json";

(function createFile(){
	if(!fs.existsSync(TASKS_JSON_PATH)){
		console.log(`Creating "tasks.json" file`);
		saveTasks([]);	
	}
})();

function saveTasks(task){
	fs.writeFileSync(TASKS_JSON_PATH, JSON.stringify(task));
}

function getTasks(){
    const data = fs.readFileSync(TASKS_JSON_PATH);
    return JSON.parse(data);
}


module.exports = {saveTasks, getTasks}
