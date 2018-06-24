# NoteIt
A simple console application for taking down notes. 

## Installation
* Git clone or download this repository
* Change Directory into this repository
* Run *npm install*

## Usage
node app.js [commands] {options}

### commands: 
* add - Add a note
* list - List all notes
* read - Read a note
* remove - remove a note

### options
--title, -t : Title of the note. All notes have to have unique title. Notes are considered duplicate if they have same title

--body, -b  : Body or content of the note

--help      : Help Screen

Some of the commands have compulsory options. Trying to run the command without the option will not work.

For more help run with --help option to see the commands and their options.

## Examples:
node app.js add -t "Grocery" -b "Don't forget to buy chocolates"

node app.js add --title "Raj" --body "Meet Raj on your way to work"


#### Notes:
* In case of multiple commands being passed only the first command will be considered.
