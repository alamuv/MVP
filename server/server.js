var express = require('express');
var mongoose = require('mongoose');

var app= express();

mongoose.connect('mongodb://localhost/newdb');

require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

var port = process.env.PORT || 8000;

app.listen(port, function(err) {
  if (err) {
    return console.log(err);
  }
  console.log('MVP listening on ' + port);
});

module.exports = app;