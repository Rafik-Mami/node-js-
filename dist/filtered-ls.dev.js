"use strict";

var fs = require("fs");

var path = require('path');

console.log(process.argv[3]);
fs.readdir(process.argv[2], function (err, files) {
  if (err) {
    return console.error(err);
  }

  files.filter(function (file) {
    return path.extname(file) === '.' + process.argv[3];
  }).forEach(function (file) {
    console.log(file);
  });
});