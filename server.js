var express = require('express');
var app = express();
var morgan = require('morgan');

// set port
var port = process.env.PORT || 8080;
var server = require('http').createServer(app);

// use morgan to log requests to the console
app.use(morgan('dev'));
app.use('/static', express.static('uploads'));

require('./config/express')(app);

app.get('/', function(request, response) {
  response.send('Hello World!');
});
server.listen(port, function () {
  console.log('sVideo server listening on port: ', port);
});

