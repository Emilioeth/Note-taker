const router = require('express').Router();
const { createNewNote, deleteNote } = require('../../lib/notes')
const { savedNotes } = require("../../db/db.json");


router.get('/notes', (req, res) => {
    let results = savedNotes;
    res.json(results);
});

router.post('/notes', (req, res) => {
    const note = createNewNote(req.body, savedNotes);
    res.json(note);
});

router.delete(`/notes/:id`, (req, res) => {
    let id = req.params.id;
    deleteNote(id, savedNotes);
    res.json(req.body);
});

module.exports = router;