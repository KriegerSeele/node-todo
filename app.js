//const argv = require('yargs').argv;
//const argv = require('./config/yargs').argv;
const argv = require('./config/yargs').argv;
const colors =  require('colors');

const toDo = require('./tasks_to_do/tasks_to_do');

console.log(argv);

let command = argv._[0];

switch(command) {

    case 'create':
        let task = toDo.create( argv.description );
        console.log(task);
    break;
    
    case 'list':
        let list = toDo.getList();
        for(let task of list){

            console.log('========== To Do =========='.green);
            console.log(task.description);
            console.log('State ', task.completed);
            console.log('==========================='.green);
        }
    break;

    case 'update':
        let updated = toDo.update(argv.description, argv.completed);
        console.log(updated);
    break;

    case 'borrar':
        let deleted = toDo.borrar(argv.description);
        console.log(deleted);
    break;

    default:
        console.log('Command is not recognized');
}


