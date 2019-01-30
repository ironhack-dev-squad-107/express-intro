// Setup (configuration of your app)
// -----------------------------------------------------------------------------
// #############################################################################

// connect this file to the Express npm package
const express = require("express");

// the "app" variable represents our application and all its settings
// (all configuration and content will be defined through "app")
const app = express();

// the listen() method allows our program to accept connections from clients
// (this function will run when the program is ready for connections)
app.listen(5555, () => {
  console.log("Our Express app is READY!");
});

// connect the "public/" folder to our Express app
// (makes files inside "public/" available through our server's domain)
app.use(express.static(__dirname + "/public"));
// ("__dirname" is "directory name" - the folder where the current file is)

// Routes (content of your app)
// -----------------------------------------------------------------------------
// #############################################################################

// Express Route - defines a page of content on your app
// 2 ARGUMENTS: the address and a function that defines the content
app.get("/", (request, response, next) => {
  // "response" controls what the client will receive when they visit this route
  response.sendFile(__dirname + "/views/index.html");
  // ("__dirname" is "directory name" - the folder where the current file is)
});

app.get("/dog", (request, response, next) => {
  response.sendFile(__dirname + "/views/dog-page.html");
});
