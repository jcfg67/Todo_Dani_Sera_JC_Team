const createTask = require('./services/createTask');
const readAllTasks = require('./services/readAllTasks');
const readOneTask = require('./services/readOneTask');
const deleteTask = require('./services/deleteTask');
const updateTask = require('./services/updateTask');
const { askMenuOption } = require('./controllers/inquirer');

menu();

async function menu() {
	while (true) {
		const answers = await askMenuOption();
		if (answers.option == "Create") await createTask();
		if (answers.option == "Read All") readAllTasks();
		if (answers.option == "Read One") await readOneTask();
		if (answers.option=="Update") await updateTask();
		if (answers.option=="Delete") await deleteTask();
		if (answers.option=="Exit") process.exit();
	}
}
