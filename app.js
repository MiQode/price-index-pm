/*//The server set-up////
////////////////////////*/

// External Modules
const express = require("express");
const app = express();
var config = require("./config")();

app.listen(config.port, function () {
  console.log("listening on port " + config.port);
});
