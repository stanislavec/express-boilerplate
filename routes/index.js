/*jslint node: true, nomen: true*/
"use strict";

var express = require("express");
const path = require("path");
var router = express.Router();

const templatePath = path.join(__dirname, "../templates");

router.get("/", function (req, res, next) {
  res.sendFile(`${templatePath}/index/index.html`);
});

module.exports = router;
