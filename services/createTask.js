const Task = require('../models/task');
const { saveTasks, getTasks } = require('../models/model');
const { askTask } = require('../controllers/inquirer');

async function createTask(){
    let tasks = getTasks();
    let ID = 1;
    if (tasks.length >= 1) ID = tasks[tasks.length - 1].id + 1;
    const answers = await askTask();
    const date = new Date();
	const start = date.getDate() + "-"+ parseInt(date.getMonth()+1) + "-" + date.getFullYear();
	const end = "";
	const task = new Task(ID, answers.title, answers.description, "To_Do", start, end, answers.user);
    tasks.push(task);
    saveTasks(tasks);
    console.log(`Task ${task.id} saved!`);
}

module.exports = createTask;
