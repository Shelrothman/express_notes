/** @format */

// The path package will be used to construct paths to the html files.
const path = require("path");
const router = require("express").Router();

//This function adds routes for serving the html files.
module.exports = function (router) {
	// Below code handles when users navigate to a page.

	router.get("/notes", (req, res) => {
		res.sendFile(path.join(__dirname, "../public/notes.html"));
	});

	router.get("*", (req, res) => {
		res.sendFile(path.join(__dirname, "../public/index.html"));
	});
};
