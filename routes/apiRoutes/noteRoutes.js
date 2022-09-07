const router = require('express').Router();
const { createNewNote } = require('../../lib/notes')
const { savedNotes } = require("../../db/notes.json");


router.get('/notes', (req, res) => {
    let results = savedNotes;
    res.json(results);
});

router.post('/notes', (req, res) => {
    const note = createNewNote(req.body, savedNotes);
    res.json(note);
});

module.exports = router;