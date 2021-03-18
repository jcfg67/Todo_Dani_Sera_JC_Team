const { createFile } = require('./model');

const command = process.argv[2];
const argument = process.argv[3];

createFile();

switch(command){
	case '-c':
		create(argument);
		break;
	case '-r':
		readOneTask(argument);
		break;
	case '-u':
		update(argument);
		break;
    case '-d':
        deleteTask(argument);
        break;
	case 'help':
		help();
		break;
	case undefined:
		readAllTasks();
		break;
	default:
		console.log(`Command not found!! 'node ToDo help' to list available commands`);
		help();
		break;
}

function help() {
    console.log(`
Use: node ToDo [-c|-r|-u|-d] [dataTask]
"dataTask" must be a string separated with commas: "title,description,state,user"
Use: node ToDo to list all tasks`)
}

function create(task) {
    console.log(`Creating task ${task}`);
	setTask(task)
}

function readOneTask(task) {
    console.log(`Reading task ${task}`);
}

function update(task) {
    console.log(`Updating task ${task}`);
}

function deleteTask(task) {
    console.log(`Deleting task ${task}`);
}

function readAllTasks() {
    console.log(`Reading all tasks!!`);
}
