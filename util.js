const Task = require('./task');
const getTasks = require('./model').getTasks;

let obj = getTasks();
let ID=1;
if(obj.length>=1){
    ID=obj[obj.length-1].id + 1;
}


function parseObj(argument){
    let data=argument.split(",");

    switch(data.length){
        case 1:
            return data[0];
            break;
        case 2:
            return data;
            break;
        case 3:
            const date = new Date();
            start = date.getDate() + "-"+ parseInt(date.getMonth()+1) + "-" + date.getFullYear();
            end = "";
            return new Task(ID,data[0],data[1],"To_Do",start,end,data[2]);
            break;
        default:
            return false;
    }
}

module.exports = parseObj;