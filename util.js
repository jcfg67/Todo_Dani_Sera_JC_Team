const task = require('./task');

const ID = 0;
const END = Date.now();

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
            return new task(ID,data[0],data[1],data[2],Date.now(),END,data[3]);
            break;
        default:
            return false;
    }
}

module.exports = parseObj;