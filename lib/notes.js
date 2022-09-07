const fs = require('fs');
const path = require('path');


//functions
function createNewNote(body, savedNotesArr) {
    const note = body;
    const newNoteId = (note.id.replaceAll(" ","")) + (savedNotesArr.length.toString());
    note.id = newNoteId;
    
    savedNotesArr.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../db/notes.json'),
        JSON.stringify({ savedNotes: savedNotesArr }, null, 2)
    );
    return note;
};





function deleteNote(id, savedNotesArr) {
    let ids = savedNotesArr.map(element => {
        return element.id
    })
    let index = ids.indexOf(id)
    savedNotesArr.splice(index, 1)
    fs.writeFileSync(
        path.join(__dirname, '../db/notes.json'),
        JSON.stringify({ savedNotes: savedNotesArr }, null, 2)
    );
}



module.exports = {
    createNewNote,
    deleteNote
}