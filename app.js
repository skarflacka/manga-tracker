var express = require('express');
var controller = require(__dirname + '/controllers/controller.js');

var app = express();

app.get('/', controller.getIndex)
app.get('/login', );

app.listen(1337, function() {
  console.log('Listening on port: 1337');
});
