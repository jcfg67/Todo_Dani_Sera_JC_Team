const tasca = require('./model');

var tasques = [];

function create(id, title, description, state, start, end, user){
    tasques.push(new tasca(id, title, description, state, start, end, user));
    console.log("Tarea creada!");
    muestra();
}

function muestra(){
    tasques.forEach(element => {
        console.log(element);
    });
}

module.exports = create;