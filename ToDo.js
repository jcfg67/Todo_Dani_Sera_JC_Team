const parseObj = require('./util');
const createTask = require('./createTask');
const updateTask = require('./updateTask');

const command = process.argv[2];
const argument = process.argv[3];

switch(command){
	case '-c':
		createTask(parseObj(argument));
		break;
	case '-r':
		readOneTask(parseObj(argument));
		break;
	case '-u':
		updateTask(parseObj(argument));
		break;
    case '-d':
        deleteTask(parseObj(argument));
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
Use: node ToDo (to list all tasks)
Use: node ToDo -c "title","description","state","user" (replacing content inside "" with your data)
Use: node ToDo [-r|-u|-d] X (where X is a number which corresponds with the task in the list)
`)
}

function readOneTask(task) {
    console.log(`Reading task ${task}`);
}

function readAllTasks() {
    console.log(`Reading all tasks!!`);
}
