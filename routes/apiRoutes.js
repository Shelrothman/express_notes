/** @format */

// Setting up the routes ti read the db.json file

const fs = require("fs");
const path = require("path");
const router = require("express").Router();
const storage = require("../db/storage");

router.get("/api/notes", function(req, res) { //from storage.js
    storage
        .getNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));
});

router.post("/api/notes", (req, res) => {

    storage
	.addNotes(req.body)
	//request whole note body as arg.
    .then((note) => res.json(note))
    .catch(err => res.status(500).json(err));
});

router.delete("/api/notes/:id", function(req, res) {
    storage
	.removeNotes(req.params.id)
	//request id function from store.js
      .then(() => res.json({ ok: true }))
      .catch(err => res.status(500).json(err));
  });
  

module.exports = router;