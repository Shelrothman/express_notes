// The routes interact with a couple of "data" sources. These data sources hold
// arrays of information on table-data, waitinglist, etc.
const tableData = require("../data/tableData");
const waitListData = require("../data/waitinglistData");

// This module exports a function which accepts an Express app object and
// and sets up the api routes.
module.exports = function (app) {
  //
  // Below code handles when users "visit" a page. In each of the below cases
  // when a user visits a link (ex: localhost:PORT/api/admin... they are shown a
  // JSON of the data in the table)
  app.get("/api/tables", (req, res) => {
    res.json(tableData);
  });

  app.get("/api/waitlist", (req, res) => {
    res.json(waitListData);
  });

  // Below code handles when a user submits a form and thus submits data to the
  // server. When a user submits form data (a JSON object) the JSON is pushed to
  // the appropriate JavaScript array (ex. User fills out a reservation
  // request... this data is then sent to the server... Then the server saves
  // the data to the tableData array)

  app.post("/api/tables", (req, res) => {
    // Note the code here. The "server" will respond to let the client know if
    // the user has a table or not. It will do this by sending out the value
    // "true" when there is an available table. The data submitted by the client
    // is read from req.body, which was created by the middleware setup in
    // server.js. (i.e. `app.use(express.urlencoded({ extended: true }))`)
    if (tableData.length < 5) {
      tableData.push(req.body);
      res.json(true);
    } else {
      waitListData.push(req.body);
      res.json(false);
    }
  });

  // This code isn't part of the assignment. This route was added to easily
  // clear out all the table data to facilitate demonstration. Don"t worry about
  // it!
  app.post("/api/clear", (req, res) => {
    // Empty out the arrays of data
    tableData.length = 0;
    waitListData.length = 0;

    res.json({ ok: true });
  });
};
