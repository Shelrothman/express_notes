/** @format */

// Setting up the routes ti read the db.json file
const noteData = require("../db/db.json");
const fs = require("fs");
const path = require("path");

//const newNote = $()

const noteArray = [
  {
    title: "Test Title One",
    text: "the first text test"
  }
];


module.exports = function (app) {
	app.get("/api/notes", (req, res) => {
		res.json(noteData);
	});

	app.delete("/api/notes/:id", (req, res) => {
		fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", (err, data) => {
			if (err) throw err;
			//check if file exisits.
			const fileJSON = JSON.parse(data);
			const id = parseInt(req.params.id);
			for (let i = 0; i < fileJSON.length; i++) {
				if (id === fileJSON[i].id) {
					fileJSON.splice(i, 1);
					fs.writeFile(
						path.join(__dirname, "../db/db.json"),
						JSON.stringify(fileJSON),
						(err, data) => {
							if (err) throw err;
						}
					);
					return res.send("Note Deleted");
				} else {
					return res.send(
						`Cannot delete notes - Record with id: ${id} not found.`
					);
				}
			}
		});
	});

	app.post("/api/notes", (req, res) => {
		fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", (err, data) => {
			if (err) throw err;

			let reqJson = req.body;

			//code to check if file exisits.
			const fileJSON = JSON.parse(data);
			if (fileJSON != null || fileJSON != "undefined" || fileJSON != "") {
        reqJson.id = fileJSON.length + 1;
        noteArray.push(newNote);
			} else {
				reqJson.id = 1;
			}
			fileJSON.push(reqJson);
			fs.writeFile(
				path.join(__dirname, "../db/db.json"),
				JSON.stringify(fileJSON),
				(err, data) => {
					if (err) throw err;
					res.json(reqJson);
				}
			);
		});
	});
};
