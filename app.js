const chalk = require('chalk')
const yargs = require('yargs')

const notes = require('./notes')

yargs.command({
    command: 'add',
    description: 'Add new notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Notes body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNotes(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    description: 'remove notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'read',
    description: 'read notes',
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    description: 'list notes',
    handler() {
        notes.listNotes()
    }
})

yargs.parse()

