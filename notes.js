const fs = require('fs');

var printNote = (note) => {
    console.log();
    console.log(`Title: ${note.title}`);
    console.log('---------------------');
    console.log(note.body, );
    console.log();
}

var readNotes = () => {
    try {
        let noteString = fs.readFileSync('./notes-text.json');
        if (noteString.length === 0) 
            return [];
        return JSON.parse(noteString);
    } catch(e) {
        console.log('Error opening file. Make sure that notes-text.json is available in app folder')
    }
}

var writeNotes = (notes) => {
    try {
        fs.writeFileSync('./notes-text.json', JSON.stringify(notes));
    } catch (e) {
        console.log('Error writing notes to file. Try again');
    }
}


var addNote = (title,body) => {    
    let notes = readNotes();
    let duplicate = false;

    // Code to ensure that title is unique
    notes.forEach(note => {
        if (note.title === title) {
            duplicate = true;
        }
    });

    if (!duplicate) {
        notes.push( {title,body} );
        writeNotes(notes);
    }

    return duplicate;
};

var getAll = () => {
    return  readNotes();
};

var getNote = (title) => {
    let notes = readNotes();
    return notes.filter(note => note.title === title); 
};

var removeNote = (title) => {
    let notes = readNotes();
    let filteredNotes = notes.filter(note => note.title != title);
    if (filteredNotes.length != notes.length) {
        writeNotes(filteredNotes);
        return true;
    } else {
        return false;
    }
};



module.exports = {
    addNote:addNote,
    getAll:getAll,
    getNote:getNote,
    removeNote:removeNote,
    printNote, printNote
};


