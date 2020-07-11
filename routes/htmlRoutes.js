/** @format */

// The path package will be used to construct paths to the html files.
const path = require("path");

//This function adds routes for serving the html files.
module.exports = function (app) {
	// Below code handles when users navigate to a page. 
	//(e.g. follow a link or enter a url in the address bar) 

	app.get("/notes", (req, res) => {
		res.sendFile(path.join(__dirname, "../public/notes.html"));
	});

	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname, "../public/index.html"));
	});
};
