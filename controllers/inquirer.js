const inquirer = require('inquirer');

module.exports = {
  askMenuOption: () => {
    const questions = {
      type:"list",
      name:"option",
      message:"ToDo MENU",
      choices:["Create","Read All","Read One","Update","Delete","Exit"]
    }
    return inquirer.prompt(questions)
  },
  askTask: () => {
    const questions = [
        {
        name: 'title',
        type: 'input',
        message: 'Enter a task title:',
        validate: function( value ) {
            if (value.length) {
                   return true;
            } else {
                   return 'Please, enter a task title!';
            }
        }
        },
        {
        name: 'description',
        type: 'input',
        message: 'Enter task description:',
        validate: function( value ) {
            if (value.length) {
                   return true;
            } else {
                   return 'Please, enter task description!';
            }
        }
        },
        {
        name: 'user',
        type: 'input',
        message: 'Enter a user name:',
        validate: function( value ) {
            if (value.length) {
                   return true;
            } else {
                   return 'Please, enter user name!';
            }
        }
        }];
    return inquirer.prompt(questions)
  },
  askTaskId: () => {
    const questions = [
        {
        name: 'id',
        type: 'input',
        message: 'Enter a task id:',
        validate: function( value ) {
            if (value.length) {
                   return true;
            } else {
                   return 'Please, enter a task id!';
            }
        }
        }
    ];
    return inquirer.prompt(questions)
  }
}
