const fs = require('fs');

let listsTaskToDo = [];

const saveDB = () => {

    let data = JSON.stringify(listsTaskToDo);

    fs.writeFile('db/data.json', data, (err) => {
        if(err){
            throw new Error('No se pudo grabar', err);
        }
    });
}

const getDB = () => {

    try {

        listsTaskToDo = require('../db/data.json');
        
    } catch (error) {
        listsTaskToDo = [];
    }
}

const create = (description) => {

    getDB();

    let toDo = {
        description,
        completed: false
    };

    listsTaskToDo.push( toDo );

    saveDB(); 

    return toDo;
}

const getList = () => {
    
    getDB();
    return listsTaskToDo;
}

const update = (description, completed =  true) => {
    
    getDB();

    let index = listsTaskToDo.findIndex(task => task.description === description);
    if (index >= 0) {
        listsTaskToDo[index].completed = completed;
        saveDB();
        return true; 
    } else {
        return false;
    }
}

const borrar = (description) => {

    getDB();

    let newList = listsTaskToDo.filter(task => task.description !== description);

    if (listsTaskToDo.length === newList.length) {
        return false;
    } else {
        listsTaskToDo = newList;
        saveDB();
        return true;
    }
}

module.exports = {
    create, 
    getList, 
    update, 
    borrar
}
