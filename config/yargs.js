const description = {
    demand: true,
    alias: 'd',
    desc: 'Delete task'
}
const completed = {
    demand: true,
    alias: 'c',
    desc: 'Mark completed or pending'
}

const argv = require('yargs')
    .command('create', 'Create an element to do', {
        description
    })
    .command('update', 'Update state start / end task to do', {
        description,
        completed 
    })
    .command('borrar','Delete task selected', {
        description
    })
    .help()
    .argv

module.exports = {
    argv
}     