const express = require("express");
const path = require("path");
const router = express.Router();

//Default URL for website
router.get("/", (req, res) => {
  //res.render('index')
  res.sendFile(path.join(__dirname, "../views", "index.html"));
});

module.exports = router;
