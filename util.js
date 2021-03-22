const Task = require('./task');
const getTasks = require('./model').getTasks;

let obj = getTasks();
let ID=1;
if(obj.length>=1){
    ID=obj[obj.length-1].id + 1;
}

const date = new Date();

start = date.getDate() + "-"+ date.getMonth()+1 + "-" + date.getFullYear();
end = "";

function parseObj(argument){
    let data=argument.split(",");

    switch(data.length){
        case 1:
            return data[0];
            break;
        case 2:
            return data;
            break;
        case 4:
            return new Task(ID,data[0],data[1],data[2],start,end,data[3]);
            break;
        default:
            return false;
    }
}

module.exports = parseObj;