const  yargs = require('yargs');
const notes = require('./notes');

const titleOptions = {
    desc: 'Title of the note',
    alias: 't',
    required: true
};

const bodyOptions = {
    desc: 'Body of the note',
    alias: 'b',
    required: true
};


const argv = yargs.command('add', 'Add a note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleOptions
    })
    .command('remove', 'Remove a note', {
        title:titleOptions
    })
    .help()
    .argv;



const command = argv._[0];


if (command ==='add') {

    let duplicate = notes.addNote(argv.title, argv.body);
    if (duplicate) console.log('Note not added. Title is already used');
    else console.log('Note successfuly added');

}else if (command === 'list') {
    
    let allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} notes(s)`);
    allNotes.forEach(note => notes.printNote(note));

}else if (command === 'remove')  {
    
    let result = notes.removeNote(argv.title, argv.body);
    if (result) 
        console.log('Note successfuly removed');
    else 
        console.log('Note not found')

} else if (command === 'read') {

    let filteredNotes = notes.getNote(argv.title); 
    if (filteredNotes.length) {
        notes.printNote(filteredNotes[0]);
    } else {
        console.log('Note not found');
    }
    
} else {
    console.log('command not recognized');
} 