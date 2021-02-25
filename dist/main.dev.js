"use strict";

var fs = require("fs");

fs.appendFile('http-client.js', 'r+', function (err, fd) {
  if (err) {
    return console.error(err);
  }

  console.log("HELLO WORLD");
  process.argv[3];
});