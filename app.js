/*//The server set-up////
////////////////////////*/

// External Modules
const express = require("express");
const app = express();
const path = require("path");
var config = require("./config")();

// Importing internal request handlers/APIs
const userRoutes = require("./routes/userRoutes");

// Initialising internal APIs
app.use("/", userRoutes);

app.listen(config.port, function () {
  console.log("listening on port " + config.port);
});
