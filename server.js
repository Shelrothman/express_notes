const express = require("express");
const setupApiRoutes = require("./routes/apiRoutes");
const setupHtmlRoutes = require("./routes/htmlRoutes");
// This sets up the basic properties for our express server 
//and tells node that we are creating an "express" server
const app = express();
const PORT = process.env.PORT || 8088;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//middle-ware function
app.use(express.static("public"));


app.use("/", setupApiRoutes); //if localhost/api, navigate to api routes
app.use("/", setupHtmlRoutes); // if localhost, navigates to htmlroutes




// The code below points the server to a series of "route" files. 
// and it effectively "starts" our server
app.listen(PORT, () => {
  console.log("App listening on PORT: " + PORT);
});



