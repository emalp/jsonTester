'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var checker = require('./backend/jsonChecker');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/*', checker);

app.use((error, req, res, next) => {
  //Catch bodyParser JSON error
  if (error) {
    console.log("Parsing error, catching error and returning proper error JSON.");
    var JsonErr = JSON.stringify({ error: "Could not decode request: JSON parsing failed" });
    res.setHeader('content-type', 'application/json');
    res.status(400).send(JsonErr, null, 3);
  }
});

module.exports = app;
//# sourceMappingURL=app.js.map
